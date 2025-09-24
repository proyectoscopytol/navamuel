
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

const scalaProducts = [
  {
    id: 1,
    name: "Encimera Scala",
    image: "https://inbani.com/wp-content/uploads/2024/10/aa_thumbnail.jpg",
    description: "Encimera de diseño contemporáneo con líneas arquitectónicas"
  },
  {
    id: 2,
    name: "Lavabos Scala",
    image: "https://inbani.com/wp-content/uploads/2024/09/aa_thumbnail-1.jpg",
    description: "Lavabos integrados con el concepto arquitectónico Scala"
  },
  {
    id: 3,
    name: "Módulos Scala",
    image: "https://readdy.ai/api/search-image?query=Modern%20Scala%20collection%20bathroom%20modules%20with%20contemporary%20architectural%20design%2C%20clean%20geometric%20lines%20and%20minimalist%20forms%2C%20neutral%20color%20palette%2C%20professional%20interior%20photography%2C%20simple%20background&width=295&height=365&seq=scala_modules&orientation=portrait",
    description: "Módulos modulares con diseño arquitectónico contemporáneo"
  },
  {
    id: 4,
    name: "Espejos Scala",
    image: "https://readdy.ai/api/search-image?query=Scala%20collection%20mirrors%20with%20architectural%20design%20elements%2C%20contemporary%20geometric%20frames%20and%20clean%20lines%2C%20modern%20bathroom%20mirror%20design%2C%20professional%20photography%2C%20simple%20background&width=295&height=365&seq=scala_mirrors&orientation=portrait",
    description: "Espejos que complementan la estética arquitectónica"
  }
];

export default function ScalaCollectionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <img 
          src="https://inbani.com/wp-content/uploads/2024/10/webscala3.jpg"
          alt="Colección Scala"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-end justify-start">
          <div className="p-12 text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Nueva colección Scala
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Inspirada en la arquitectura contemporánea, Scala representa la evolución del diseño modular con líneas puras y funcionalidad excepcional.
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
              Diseño Arquitectónico
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              La colección Scala nace de la observación de las estructuras arquitectónicas más innovadoras. 
              Cada pieza refleja la geometría precisa y la funcionalidad inteligente que caracterizan a la 
              arquitectura contemporánea, creando espacios de baño que son verdaderas obras de arte funcional.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-medium mb-4">Geometría Pura</h3>
                <p className="text-gray-600">
                  Líneas arquitectónicas que definen espacios con precisión matemática
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Funcionalidad</h3>
                <p className="text-gray-600">
                  Cada elemento está diseñado para optimizar el espacio y la usabilidad
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Innovación</h3>
                <p className="text-gray-600">
                  Materiales y acabados que representan lo último en tecnología
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
              Productos de la Colección
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {scalaProducts.map(product => (
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

      {/* Inspiration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  Inspiración Arquitectónica
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Scala encuentra su inspiración en los grandes maestros de la arquitectura contemporánea. 
                  Las líneas limpias, los volúmenes precisos y la integración perfecta entre forma y función 
                  son los pilares sobre los que se construye esta colección.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Cada elemento ha sido pensado para crear ambientes que trascienden lo meramente funcional, 
                  convirtiéndose en espacios que inspiran y elevan la experiencia diaria del baño.
                </p>
                <a 
                  href="/nosotros" 
                  className="inline-block border border-black text-black px-8 py-4 hover:bg-black hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                >
                  Conoce nuestra filosofía
                </a>
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Contemporary%20architectural%20bathroom%20interior%20inspired%20by%20modern%20architecture%2C%20clean%20geometric%20lines%20and%20volumes%2C%20minimalist%20design%20with%20sophisticated%20materials%2C%20professional%20architectural%20photography%2C%20simple%20background&width=600&height=450&seq=scala_inspiration&orientation=landscape"
                  alt="Inspiración Scala"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
