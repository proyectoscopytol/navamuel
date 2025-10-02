
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

const collections: Collection[] = [
  {
    id: 'scala',
    name: 'Scala',
    description: 'Nueva colección inspirada en la arquitectura contemporánea',
    image: 'https://inbani.com/wp-content/uploads/2024/10/webscala3.jpg',
    link: '/collections/scala'
  },
  {
    id: 'fuse',
    name: 'Fuse',
    description: 'Fusión perfecta entre funcionalidad y diseño',
    image: 'https://readdy.ai/api/search-image?query=Modern%20bathroom%20interior%20with%20Fuse%20collection%20featuring%20innovative%20modular%20design%20and%20contemporary%20materials%2C%20clean%20lines%20with%20geometric%20forms%2C%20neutral%20color%20palette%2C%20professional%20architectural%20photography%2C%20simple%20background&width=800&height=600&seq=fuse_collection&orientation=landscape',
    link: '/collections/fuse'
  },
  {
    id: 'edge',
    name: 'Edge',
    description: 'Diseño vanguardista con líneas definidas',
    image: 'https://inbani.com/wp-content/uploads/2024/10/webedge3.jpg',
    link: '/collections/edge'
  },
  {
    id: 'strato',
    name: 'Strato',
    description: 'Estratos de diseño modular y versátil',
    image: 'https://readdy.ai/api/search-image?query=Contemporary%20bathroom%20with%20Strato%20collection%20featuring%20layered%20modular%20design%20and%20minimalist%20forms%2C%20sophisticated%20materials%20and%20textures%2C%20modern%20architectural%20elements%2C%20professional%20interior%20photography%2C%20simple%20background&width=800&height=600&seq=strato_collection&orientation=landscape',
    link: '/collections/strato'
  },
  {
    id: 'ease',
    name: 'Ease',
    description: 'Simplicidad y comodidad en cada detalle',
    image: 'https://readdy.ai/api/search-image?query=Contemporary%20bathroom%20with%20Ease%20collection%20featuring%20organic%20curved%20forms%20and%20natural%20materials%2C%20warm%20wood%20textures%20combined%20with%20white%20surfaces%2C%20serene%20atmosphere%2C%20professional%20interior%20photography%2C%20simple%20background&width=800&height=600&seq=ease_collection&orientation=landscape',
    link: '/collections/ease'
  },
  {
    id: 'heritage',
    name: 'Heritage',
    description: 'Inspiración clásica con toque contemporáneo',
    image: 'https://readdy.ai/api/search-image?query=Luxurious%20bathroom%20inspired%20by%20Greek%20architecture%20with%20Heritage%20collection%2C%20classical%20proportions%20and%20marble%20textures%2C%20sophisticated%20design%20elements%2C%20timeless%20elegance%2C%20professional%20architectural%20photography%2C%20simple%20background&width=800&height=600&seq=heritage_collection&orientation=landscape',
    link: '/collections/heritage'
  },
  {
    id: 'grate',
    name: 'Grate',
    description: 'Texturas y patrones geométricos únicos',
    image: 'https://readdy.ai/api/search-image?query=Modern%20bathroom%20featuring%20Grate%20collection%20with%20geometric%20patterns%20and%20contrasting%20light%20and%20shadow%20effects%2C%20contemporary%20design%20with%20textured%20surfaces%2C%20dramatic%20lighting%2C%20professional%20interior%20photography%2C%20simple%20background&width=800&height=600&seq=grate_collection&orientation=landscape',
    link: '/collections/grate'
  },
  {
    id: 'arc',
    name: 'Arc',
    description: 'Formas curvas y elegancia atemporal',
    image: 'https://readdy.ai/api/search-image?query=Elegant%20bathroom%20with%20Arc%20collection%20featuring%20curved%20forms%20and%20graceful%20lines%2C%20sophisticated%20materials%20and%20refined%20design%2C%20contemporary%20luxury%20aesthetic%2C%20professional%20architectural%20photography%2C%20simple%20background&width=800&height=600&seq=arc_collection&orientation=landscape',
    link: '/collections/arc'
  },
  {
    id: 'origin',
    name: 'Origin',
    description: 'Vuelta a los orígenes del diseño puro',
    image: 'https://readdy.ai/api/search-image?query=Minimalist%20bathroom%20with%20Origin%20collection%20featuring%20pure%20geometric%20forms%20and%20natural%20materials%2C%20clean%20contemporary%20design%2C%20neutral%20color%20scheme%2C%20professional%20architectural%20photography%2C%20simple%20background&width=800&height=600&seq=origin_collection&orientation=landscape',
    link: '/collections/origin'
  },
  {
    id: 'paral',
    name: 'Paral',
    description: 'Líneas paralelas y geometría precisa',
    image: 'https://readdy.ai/api/search-image?query=Contemporary%20bathroom%20with%20Paral%20collection%20featuring%20parallel%20lines%20and%20precise%20geometry%2C%20minimalist%20design%20with%20clean%20surfaces%2C%20modern%20architectural%20elements%2C%20professional%20interior%20photography%2C%20simple%20background&width=800&height=600&seq=paral_collection&orientation=landscape',
    link: '/collections/paral'
  },
  {
    id: 'facett',
    name: 'Facett',
    description: 'Facetas multidimensionales y diseño innovador',
    image: 'https://readdy.ai/api/search-image?query=Modern%20bathroom%20with%20Facett%20collection%20featuring%20multifaceted%20surfaces%20and%20innovative%20design%2C%20geometric%20patterns%20with%20angular%20forms%2C%20contemporary%20luxury%20materials%2C%20professional%20architectural%20photography%2C%20simple%20background&width=800&height=600&seq=facett_collection&orientation=landscape',
    link: '/collections/facett'
  }
];

export default function ColeccionesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-white mt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              <span>Colec<em className="font-light">ciones</em></span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Cada colección cuenta una historia única de diseño y funcionalidad
            </p>
            <div className="scroll-down hidden lg:block">
              <a href="#collections" className="inline-block text-sm">
                Descubrir
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section id="collections" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map(collection => (
              <div key={collection.id} className="collection-card group cursor-pointer">
                <a href={collection.link} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden mb-6">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-3xl md:text-4xl font-light text-center">
                        {collection.name}
                      </h3>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                      {collection.description}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Colecciones Destacadas
            </h2>
            <p className="text-lg text-gray-600">
              Nuestras colecciones más innovadoras y populares
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Scala Featured */}
            <div className="relative h-96 overflow-hidden group cursor-pointer">
              <a href="/collections/scala" className="block h-full">
                <img
                  src="https://inbani.com/wp-content/uploads/2024/10/webscala3.jpg"
                  alt="Colección Scala"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute inset-0 flex items-end justify-start p-8">
                  <div className="text-white">
                    <h3 className="text-3xl md:text-4xl font-light mb-2">Nueva colección Scala</h3>
                    <p className="text-lg opacity-90">Arquitectura contemporánea</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Edge Featured */}
            <div className="relative h-96 overflow-hidden group cursor-pointer">
              <a href="/collections/edge" className="block h-full">
                <img
                  src="https://inbani.com/wp-content/uploads/2024/10/webedge3.jpg"
                  alt="Colección Edge"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute inset-0 flex items-end justify-start p-8">
                  <div className="text-white">
                    <h3 className="text-3xl md:text-4xl font-light mb-2">Colección Edge</h3>
                    <p className="text-lg opacity-90">Diseño vanguardista</p>
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
