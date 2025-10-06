
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

interface Ambiente {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

const ambientes: Ambiente[] = [
  {
    id: 'bano-principal',
    name: 'Baño Principal',
    description: 'Espacios amplios y elegantes para el descanso diario',
    image: 'https://readdy.ai/api/search-image?query=Luxurious%20master%20bathroom%20interior%20with%20elegant%20wooden%20furniture%20and%20marble%20surfaces%2C%20spacious%20design%20with%20double%20vanity%2C%20modern%20lighting%2C%20warm%20neutral%20colors%2C%20professional%20architectural%20photography%2C%20simple%20background&width=800&height=600&seq=ambiente_bano_principal&orientation=landscape',
    link: '/ambientes?tipo=bano-principal'
  },
  {
    id: 'bano-invitados',
    name: 'Baño de Invitados',
    description: 'Diseños funcionales y acogedores para tus visitas',
    image: 'https://readdy.ai/api/search-image?query=Elegant%20guest%20bathroom%20with%20compact%20design%20and%20sophisticated%20wooden%20furniture%2C%20single%20vanity%20with%20mirror%2C%20refined%20materials%20and%20finishes%2C%20welcoming%20atmosphere%2C%20professional%20interior%20photography%2C%20simple%20background&width=800&height=600&seq=ambiente_bano_invitados&orientation=landscape',
    link: '/ambientes?tipo=bano-invitados'
  },
  {
    id: 'aseo',
    name: 'Aseo',
    description: 'Soluciones compactas y eficientes para espacios reducidos',
    image: 'https://readdy.ai/api/search-image?query=Modern%20powder%20room%20with%20minimalist%20wooden%20furniture%20design%2C%20compact%20vanity%20and%20mirror%2C%20efficient%20use%20of%20space%2C%20contemporary%20fixtures%2C%20clean%20lines%2C%20professional%20architectural%20photography%2C%20simple%20background&width=800&height=600&seq=ambiente_aseo&orientation=landscape',
    link: '/ambientes?tipo=aseo'
  },
  {
    id: 'bano-infantil',
    name: 'Baño Infantil',
    description: 'Espacios seguros y divertidos para los más pequeños',
    image: 'https://readdy.ai/api/search-image?query=Colorful%20children%20bathroom%20with%20fun%20and%20safe%20wooden%20furniture%20design%2C%20kid-friendly%20vanity%20and%20accessories%2C%20bright%20colors%20and%20playful%20elements%2C%20safety%20features%2C%20professional%20interior%20photography%2C%20simple%20background&width=800&height=600&seq=ambiente_bano_infantil&orientation=landscape',
    link: '/ambientes?tipo=bano-infantil'
  },
  {
    id: 'bano-minimalista',
    name: 'Baño Minimalista',
    description: 'Pureza y simplicidad en cada detalle',
    image: 'https://readdy.ai/api/search-image?query=Ultra-minimalist%20bathroom%20with%20clean%20geometric%20wooden%20furniture%2C%20pure%20white%20surfaces%2C%20simple%20lines%2C%20uncluttered%20design%2C%20natural%20light%2C%20serene%20atmosphere%2C%20professional%20architectural%20photography%2C%20simple%20background&width=800&height=600&seq=ambiente_bano_minimalista&orientation=landscape',
    link: '/ambientes?tipo=bano-minimalista'
  },
  {
    id: 'bano-clasico',
    name: 'Baño Clásico',
    description: 'Elegancia tradicional con toques contemporáneos',
    image: 'https://readdy.ai/api/search-image?query=Classic%20traditional%20bathroom%20with%20elegant%20vintage-inspired%20wooden%20furniture%2C%20ornate%20details%2C%20marble%20surfaces%2C%20brass%20fixtures%2C%20timeless%20design%20elements%2C%20sophisticated%20atmosphere%2C%20professional%20interior%20photography%2C%20simple%20background&width=800&height=600&seq=ambiente_bano_clasico&orientation=landscape',
    link: '/ambientes?tipo=bano-clasico'
  },
  {
    id: 'bano-moderno',
    name: 'Baño Moderno',
    description: 'Innovación y tecnología en diseño contemporáneo',
    image: 'https://readdy.ai/api/search-image?query=Contemporary%20modern%20bathroom%20with%20sleek%20wooden%20furniture%20and%20innovative%20design%2C%20geometric%20forms%2C%20high-tech%20fixtures%2C%20sophisticated%20materials%2C%20cutting-edge%20style%2C%20professional%20architectural%20photography%2C%20simple%20background&width=800&height=600&seq=ambiente_bano_moderno&orientation=landscape',
    link: '/ambientes?tipo=bano-moderno'
  }
];

export default function AmbientesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-white mt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              <span>Ambien<em className="font-light">tes</em></span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Cada ambiente cuenta una historia única de funcionalidad y estilo
            </p>
            <div className="scroll-down hidden lg:block">
              <a href="#ambientes" className="inline-block text-sm">
                Descubrir
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ambientes Grid */}
      <section id="ambientes" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ambientes.map(ambiente => (
              <div key={ambiente.id} className="ambiente-card group cursor-pointer">
                <a href={ambiente.link} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden mb-6">
                    <img
                      src={ambiente.image}
                      alt={ambiente.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-3xl md:text-4xl font-light text-center">
                        {ambiente.name}
                      </h3>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                      {ambiente.description}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Ambientes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Ambientes Destacados
            </h2>
            <p className="text-lg text-gray-600">
              Nuestros diseños más populares y versátiles
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Baño Principal Featured */}
            <div className="relative h-96 overflow-hidden group cursor-pointer">
              <a href="/ambientes?tipo=bano-principal" className="block h-full">
                <img
                  src="https://readdy.ai/api/search-image?query=Luxurious%20master%20bathroom%20interior%20with%20elegant%20wooden%20furniture%20and%20marble%20surfaces%2C%20spacious%20design%20with%20double%20vanity%2C%20modern%20lighting%2C%20warm%20neutral%20colors%2C%20professional%20architectural%20photography%2C%20simple%20background&width=800&height=600&seq=featured_bano_principal&orientation=landscape"
                  alt="Baño Principal"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute inset-0 flex items-end justify-start p-8">
                  <div className="text-white">
                    <h3 className="text-3xl md:text-4xl font-light mb-2">Baño Principal</h3>
                    <p className="text-lg opacity-90">Elegancia y funcionalidad</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Baño Minimalista Featured */}
            <div className="relative h-96 overflow-hidden group cursor-pointer">
              <a href="/ambientes?tipo=bano-minimalista" className="block h-full">
                <img
                  src="https://readdy.ai/api/search-image?query=Ultra-minimalist%20bathroom%20with%20clean%20geometric%20wooden%20furniture%2C%20pure%20white%20surfaces%2C%20simple%20lines%2C%20uncluttered%20design%2C%20natural%20light%2C%20serene%20atmosphere%2C%20professional%20architectural%20photography%2C%20simple%20background&width=800&height=600&seq=featured_bano_minimalista&orientation=landscape"
                  alt="Baño Minimalista"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute inset-0 flex items-end justify-start p-8">
                  <div className="text-white">
                    <h3 className="text-3xl md:text-4xl font-light mb-2">Baño Minimalista</h3>
                    <p className="text-lg opacity-90">Simplicidad y pureza</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}