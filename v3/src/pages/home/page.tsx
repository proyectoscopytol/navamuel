
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSlider from '../../components/feature/HeroSlider';
import MaterialsCarousel from '../../components/feature/MaterialsCarousel';
import AmbientesCarousel from '../../components/feature/AmbientesCarousel';
import ProjectSlider from '../../components/feature/ProjectSlider';
import CollectionsGrid from '../../components/feature/CollectionsGrid';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Slider */}
      <HeroSlider />

      {/* Text Featured Section */}
      <section className="text-featured py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-light mb-8">
              Somos un nuevo concepto de funcionalidad. Somos un nuevo{' '}
              <span>concepto<em className="font-light"> de baño.</em></span>
            </h3>
            <div className="text-lg text-gray-600 mb-8">
              <p>
                Conoce Baños Navamuel Experience, un recorrido para entender nuestra filosofía, 
                conocer nuestros principios y alcance.
              </p>
            </div>
            <a 
              href="#" 
              className="inline-block bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              Descubre Baños Navamuel
            </a>
          </div>
        </div>
      </section>

      {/* Materials Carousel - Now with prominence */}
      <MaterialsCarousel />

      {/* Materials Hero Section */}
      <section className="fullscreen-basic relative h-screen overflow-hidden">
        <a href="/materiales" className="block h-full relative">
          <picture className="absolute inset-0">
            <img 
              src="https://readdy.ai/api/search-image?query=Luxury%20bathroom%20materials%20showcase%20with%20marble%2C%20wood%2C%20and%20lacquered%20surfaces%2C%20premium%20finishes%2C%20elegant%20textures%2C%20modern%20bathroom%20design%2C%20sophisticated%20material%20combinations%2C%20high-end%20interior%20design&width=1920&height=1080&seq=materials-hero&orientation=landscape"
              alt="Materiales Premium"
              className="w-full h-full object-cover object-center"
            />
          </picture>
          
          <div className="absolute inset-0 bg-black/30"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h2 className="text-4xl md:text-6xl font-light mb-6">
                Materiales <em className="font-light">Premium</em>
              </h2>
              <p className="text-xl md:text-2xl font-light mb-8">
                La excelencia en cada superficie
              </p>
              <button className="bg-white text-black px-8 py-4 hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
                Explorar materiales
              </button>
            </div>
          </div>
        </a>
      </section>

      {/* Scala Collection Fullscreen */}
      <section className="fullscreen-basic relative h-screen overflow-hidden">
        <a href="#" className="block h-full relative">
          <picture className="absolute inset-0">
            <source 
              media="(max-width: 360px)" 
              srcSet="https://inbani.com/wp-content/uploads/2024/10/webscala1.jpg"
            />
            <source 
              media="(max-width: 768px)" 
              srcSet="https://inbani.com/wp-content/uploads/2024/10/webscala2.jpg"
            />
            <img 
              src="https://inbani.com/wp-content/uploads/2024/10/webscala3.jpg"
              alt="Nueva colección Scala"
              className="w-full h-full object-cover object-top"
            />
          </picture>
          
          <div className="absolute inset-0 flex items-end justify-start">
            <div className="p-12 text-white">
              <h2 className="text-4xl md:text-5xl font-light">
                Nueva colección Scala
              </h2>
            </div>
          </div>
        </a>
      </section>

      {/* Edge Collection Fullscreen */}
      <section className="fullscreen-basic relative h-screen overflow-hidden">
        <a href="#" className="block h-full relative">
          <picture className="absolute inset-0">
            <source 
              media="(max-width: 360px)" 
              srcSet="https://inbani.com/wp-content/uploads/2024/10/webedge1.jpg"
            />
            <source 
              media="(max-width: 768px)" 
              srcSet="https://inbani.com/wp-content/uploads/2024/10/webedge2.jpg"
            />
            <img 
              src="https://inbani.com/wp-content/uploads/2024/10/webedge3.jpg"
              alt="Colección Edge"
              className="w-full h-full object-cover object-top"
            />
          </picture>
          
          <div className="absolute inset-0 flex items-end justify-start">
            <div className="p-12 text-white">
              <h2 className="text-4xl md:text-5xl font-light">
                Colección Edge
              </h2>
            </div>
          </div>
        </a>
      </section>

      {/* Ambientes Carousel */}
      <AmbientesCarousel />

      {/* Grifería Code Collection */}
      <section className="fullscreen-basic relative h-screen overflow-hidden">
        <a href="#" className="block h-full relative">
          <picture className="absolute inset-0">
            <img 
              src="https://inbani.com/wp-content/uploads/2024/09/1920x1080_Code.jpg"
              alt="Colección de Grifería Code"
              className="w-full h-full object-cover object-top"
            />
          </picture>
          
          <div className="absolute inset-0 flex items-end justify-start">
            <div className="p-12 text-white">
              <h2 className="text-4xl md:text-5xl font-light">
                Colección de Grifería Code
              </h2>
            </div>
          </div>
        </a>
      </section>

      {/* Collections Grid */}
      <CollectionsGrid />

      {/* Inbanigreen Video Section */}
      <section className="fullscreen-video relative h-screen overflow-hidden bg-black flex items-center justify-center">
        <div className="video-wrapper w-full h-full">
          <iframe 
            className="w-full h-full object-cover"
            src="https://player.vimeo.com/video/985468554?badge=0&autopause=0&loop=1&autoplay=1&muted=1&background=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="absolute bottom-12 right-12">
          <a 
            href="#" 
            className="inline-block bg-white/20 text-white px-6 py-3 hover:bg-white/30 transition-colors cursor-pointer whitespace-nowrap"
          >
            #navamuelgreen
          </a>
        </div>
      </section>

      {/* Second Text Featured Section */}
      <section className="text-featured py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              Somos más que una elección de diseño.{' '}
              <span>Somo<em className="font-light">s un</em></span>{' '}
              <span>estilo <em className="font-light">de vida.</em></span>
            </h2>
            <div className="text-lg text-gray-600 mb-8">
              <p>
                Descubre los mejores proyectos de interiorismo y arquitectura de todas partes del mundo 
                que han optado por Baños Navamuel. Visita nuestra página de{' '}
                <a href="#" className="underline">proyectos</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Slider */}
      <ProjectSlider />

      <Footer />
    </div>
  );
}
