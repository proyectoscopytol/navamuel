
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

const edgeProducts = [
  {
    id: 1,
    name: "EDGE Módulos",
    image: "https://inbani.com/wp-content/uploads/2024/04/aa_thumbnail-1.jpg",
    description: "Módulos con diseño vanguardista y líneas definidas"
  },
  {
    id: 2,
    name: "Lavabo Edge14",
    image: "https://inbani.com/wp-content/uploads/2024/05/aa_thumbnail-8.jpg",
    description: "Lavabo de 40cm con geometría angular contemporánea"
  },
  {
    id: 3,
    name: "Lavabo Edge15",
    image: "https://inbani.com/wp-content/uploads/2024/05/aa_thumbnail-9.jpg",
    description: "Lavabo de 50cm con diseño edge innovador"
  },
  {
    id: 4,
    name: "Lavabo Edge45",
    image: "https://inbani.com/wp-content/uploads/2024/05/aa_thumbnail-10.jpg",
    description: "Lavabo de 45cm con acabado vanguardista"
  },
  {
    id: 5,
    name: "Lavabo Edge88 freestanding",
    image: "https://inbani.com/wp-content/uploads/2024/05/aa_thumbnail-14.jpg",
    description: "Lavabo independiente de gran formato"
  },
  {
    id: 6,
    name: "EDGE Encimera simple",
    image: "https://inbani.com/wp-content/uploads/2024/05/aa_thumbnail-15.jpg",
    description: "Encimera minimalista con diseño edge"
  },
  {
    id: 7,
    name: "Bañera Edge",
    image: "https://inbani.com/wp-content/uploads/2024/05/aa_thumbnail.jpg",
    description: "Bañera con líneas arquitectónicas definidas"
  },
  {
    id: 8,
    name: "EDGE Taburete",
    image: "https://inbani.com/wp-content/uploads/2024/05/aa_thumbnail-3.jpg",
    description: "Taburete complementario con diseño angular"
  },
  {
    id: 9,
    name: "EDGE auxiliares",
    image: "https://inbani.com/wp-content/uploads/2024/05/aa_thumbnail-5.jpg",
    description: "Muebles auxiliares con estética vanguardista"
  },
  {
    id: 10,
    name: "EDGE Toallero",
    image: "https://inbani.com/wp-content/uploads/2024/05/aa_thumbnail-1.jpg",
    description: "Toallero con diseño geométrico angular"
  },
  {
    id: 11,
    name: "EDGE Espejo toallero",
    image: "https://inbani.com/wp-content/uploads/2024/05/aa_thumbnail-2.jpg",
    description: "Espejo con toallero integrado"
  },
  {
    id: 12,
    name: "EDGE Estantes",
    image: "https://inbani.com/wp-content/uploads/2024/05/aa_thumbnail-12.jpg",
    description: "Estantes modulares con líneas definidas"
  }
];

export default function EdgeCollectionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <img 
          src="https://inbani.com/wp-content/uploads/2024/10/webedge3.jpg"
          alt="Colección Edge"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-end justify-start">
          <div className="p-12 text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Colección Edge
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Diseño vanguardista donde cada línea está definida con precisión. Edge representa la evolución del baño contemporáneo con formas angulares y geometría pura.
            </p>
            <a 
              href="#products" 
              className="inline-block bg-white text-black px-8 py-4 hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Explorar productos
            </a>
          </div>
        </div>
      </section>

      {/* Collection Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              Vanguardia y Precisión
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Edge define un nuevo lenguaje en el diseño de baños, donde cada arista cuenta una historia de 
              precisión y vanguardia. La colección explora las posibilidades de la geometría angular, 
              creando piezas que son tanto funcionales como escultóricas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-medium mb-4">Líneas Definidas</h3>
                <p className="text-gray-600">
                  Cada arista está calculada para crear impacto visual y funcionalidad
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Diseño Angular</h3>
                <p className="text-gray-600">
                  Geometría contemporánea que redefine los espacios de baño
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Versatilidad</h3>
                <p className="text-gray-600">
                  Adaptable a diferentes espacios manteniendo su identidad única
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
              Productos de la Colección Edge
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {edgeProducts.map(product => (
                <div key={product.id} className="product-card group cursor-pointer">
                  <div className="aspect-[4/5] overflow-hidden mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2 group-hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a 
                href="/productos" 
                className="inline-block bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
              >
                Ver todos los productos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20Edge%20collection%20bathroom%20interior%20with%20angular%20geometric%20design%2C%20clean%20defined%20lines%20and%20contemporary%20vanguard%20aesthetics%2C%20sophisticated%20materials%20with%20sharp%20edges%2C%20professional%20architectural%20photography%2C%20simple%20background&width=600&height=450&seq=edge_philosophy&orientation=landscape"
                  alt="Filosofía Edge"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  Filosofía del Diseño
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  La colección Edge nace de la búsqueda constante de la perfección geométrica. 
                  Cada pieza es el resultado de un exhaustivo proceso de diseño donde la función 
                  y la forma se fusionan en perfecta armonía.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Las líneas definidas no son solo un elemento estético, sino que representan 
                  nuestra visión de un futuro donde el diseño trasciende lo convencional para 
                  crear espacios verdaderamente excepcionales.
                </p>
                <a 
                  href="/colecciones" 
                  className="inline-block border border-black text-black px-8 py-4 hover:bg-black hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                >
                  Explorar más colecciones
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
