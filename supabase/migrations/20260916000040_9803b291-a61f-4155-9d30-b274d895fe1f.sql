CREATE TYPE public.app_role AS ENUM ('admin', 'user');
CREATE TYPE public.property_purpose AS ENUM ('comprar', 'alugar');
CREATE TYPE public.property_status AS ENUM ('disponivel', 'reservado', 'vendido', 'alugado', 'arquivado');

CREATE TABLE public.profiles (
  id uuid PRIMARY KEY,
  display_name text,
  avatar_url text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own profile" ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = id);
CREATE POLICY "Users create own profile" ON public.profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);
CREATE POLICY "Users update own profile" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;

CREATE TABLE public.properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL CHECK (char_length(title) BETWEEN 1 AND 180),
  slug text NOT NULL UNIQUE CHECK (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  purpose public.property_purpose NOT NULL,
  property_type text NOT NULL CHECK (char_length(property_type) BETWEEN 1 AND 80),
  city text NOT NULL CHECK (char_length(city) BETWEEN 1 AND 100),
  neighborhood text NOT NULL CHECK (char_length(neighborhood) BETWEEN 1 AND 100),
  approximate_location text,
  price numeric(14,2) CHECK (price IS NULL OR price >= 0),
  private_area numeric(10,2) CHECK (private_area IS NULL OR private_area >= 0),
  total_area numeric(10,2) CHECK (total_area IS NULL OR total_area >= 0),
  bedrooms integer CHECK (bedrooms IS NULL OR bedrooms >= 0),
  suites integer CHECK (suites IS NULL OR suites >= 0),
  bathrooms integer CHECK (bathrooms IS NULL OR bathrooms >= 0),
  parking_spaces integer CHECK (parking_spaces IS NULL OR parking_spaces >= 0),
  description text NOT NULL CHECK (char_length(description) BETWEEN 1 AND 10000),
  features text[] NOT NULL DEFAULT '{}',
  differentials text[] NOT NULL DEFAULT '{}',
  condominium_fee numeric(12,2) CHECK (condominium_fee IS NULL OR condominium_fee >= 0),
  property_tax numeric(12,2) CHECK (property_tax IS NULL OR property_tax >= 0),
  parking_property_tax numeric(12,2) CHECK (parking_property_tax IS NULL OR parking_property_tax >= 0),
  status public.property_status NOT NULL DEFAULT 'disponivel',
  featured boolean NOT NULL DEFAULT false,
  published boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.properties TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.properties TO authenticated;
GRANT ALL ON public.properties TO service_role;
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published properties are public" ON public.properties FOR SELECT TO anon, authenticated USING (published = true OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins create properties" ON public.properties FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update properties" ON public.properties FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete properties" ON public.properties FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.property_photos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL REFERENCES public.properties(id) ON DELETE CASCADE,
  storage_path text NOT NULL UNIQUE,
  alt_text text NOT NULL CHECK (char_length(alt_text) BETWEEN 1 AND 240),
  sort_order integer NOT NULL DEFAULT 0 CHECK (sort_order >= 0),
  is_cover boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.property_photos TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.property_photos TO authenticated;
GRANT ALL ON public.property_photos TO service_role;
ALTER TABLE public.property_photos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published property photos are public" ON public.property_photos FOR SELECT TO anon, authenticated USING (EXISTS (SELECT 1 FROM public.properties p WHERE p.id = property_id AND (p.published = true OR public.has_role(auth.uid(), 'admin'))));
CREATE POLICY "Admins create property photos" ON public.property_photos FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update property photos" ON public.property_photos FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete property photos" ON public.property_photos FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;
CREATE TRIGGER profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER properties_updated_at BEFORE UPDATE ON public.properties FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

INSERT INTO public.properties (
  title, slug, purpose, property_type, city, neighborhood, approximate_location,
  private_area, total_area, bedrooms, suites, parking_spaces, description,
  features, differentials, condominium_fee, property_tax, parking_property_tax,
  status, featured, published
) VALUES (
  'Viver no coração do Cambuí. Com espaço para respirar.',
  'viver-no-coracao-do-cambui',
  'comprar',
  'Apartamento',
  'Campinas',
  'Cambuí',
  'Cambuí | Campinas/SP',
  174,
  239.26,
  4,
  2,
  3,
  E'Há endereços que fazem parte da cidade. E há aqueles que fazem você viver a cidade de um jeito especial.\n\nNo miolo do Cambuí, em uma das regiões mais desejadas de Campinas, este apartamento reúne o que é cada vez mais raro encontrar: uma localização absolutamente privilegiada e a tranquilidade de um condomínio cercado por verde.\n\nAqui, restaurantes, cafés, serviços e toda a conveniência do Cambuí estão a poucos passos de casa. E, ao voltar, a experiência muda: uma área de lazer ampla e arborizada, muito espaço livre e uma vista que traz leveza à rotina.\n\nA privacidade também é um diferencial: apenas dois apartamentos por andar, com elevador exclusivo para cada unidade e hall privativo.\n\nA varanda generosa se integra à sala e a dois dormitórios, criando uma conexão especial com o verde da área de lazer.\n\nUm imóvel para quem valoriza localização, privacidade, amplitude e qualidade de vida.\n\nPorque estar no coração do Cambuí é um privilégio. Ter o verde como extensão da sua casa é ainda mais.',
  ARRAY['174 m² de área privativa','239,26 m² de área total','4 dormitórios','2 suítes','3 vagas de garagem cobertas e livres','sala para 3 ambientes','varanda','lavabo','cozinha com sala de almoço','despensa','lavanderia','dependência completa de serviço','lazer completo','ampla área verde'],
  ARRAY['Apenas dois apartamentos por andar','Elevador exclusivo para cada unidade','Hall privativo','Varanda integrada à sala e a dois dormitórios','Ampla área de lazer arborizada'],
  2700.00,
  521.45,
  134.50,
  'disponivel',
  true,
  true
);