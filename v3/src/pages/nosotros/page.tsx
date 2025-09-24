
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              <span>Nosot<em className="font-light">ros</em></span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Somos un nuevo concepto de funcionalidad. Somos un nuevo concepto de baño.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  Nuestra Historia
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Baños Navamuel nace con la visión de revolucionar el concepto tradicional del baño, 
                  transformándolo en un espacio de bienestar y diseño excepcional. Desde nuestros 
                  inicios, hemos apostado por la innovación y la calidad como pilares fundamentales.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Nuestra pasión por el diseño nos ha llevado a crear colecciones que no solo 
                  cumplen una función, sino que elevan la experiencia diaria del baño a un 
                  nivel de sofisticación y confort únicos.
                </p>
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20bathroom%20design%20company%20workspace%20with%20designers%20working%20on%20innovative%20bathroom%20concepts%2C%20contemporary%20office%20environment%20with%20design%20sketches%20and%20materials%2C%20creative%20team%20collaboration%2C%20professional%20photography%2C%20simple%20background&width=600&height=450&seq=inbani_history&orientation=landscape"
                  alt="Historia de Baños Navamuel"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              Nuestra Filosofía
            </h2>
            <p className="text-lg text-gray-600">
              Creemos que el baño debe ser mucho más que un espacio funcional. 
              Es el lugar donde comenzamos y terminamos cada día, por lo que merece 
              la máxima atención en diseño, calidad y experiencia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-compass-3-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-medium mb-4">Innovación</h3>
              <p className="text-gray-600">
                Buscamos constantemente nuevas formas de mejorar la funcionalidad 
                y estética del baño través de la innovación continua.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-medal-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-medium mb-4">Calidad</h3>
              <p className="text-gray-600">
                Utilizamos únicamente materiales de primera calidad y procesos 
                de fabricación que garantizan durabilidad y excelencia.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-palette-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-medium mb-4">Diseño</h3>
              <p className="text-gray-600">
                Cada pieza es cuidadosamente diseñada para crear armonía entre 
                forma y función, belleza y practicidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-8">
                Nuestro Equipo
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Un equipo multidisciplinario de diseñadores, ingenieros y artesanos 
                que comparten la pasión por crear espacios excepcionales.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20creative%20design%20director%20in%20modern%20bathroom%20design%20studio%2C%20sophisticated%20person%20with%20design%20expertise%2C%20contemporary%20office%20setting%2C%20professional%20headshot%20photography%2C%20simple%20background&width=400&height=400&seq=team_director&orientation=squarish"
                    alt="Director Creativo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">Director Creativo</h3>
                <p className="text-gray-600 mb-4">Liderazgo en innovación y diseño</p>
                <p className="text-sm text-gray-500">
                  Responsable de la visión creativa y el desarrollo de nuevas colecciones.
                </p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20engineering%20manager%20in%20bathroom%20product%20development%2C%20technical%20expert%20in%20modern%20office%20environment%2C%20sophisticated%20professional%20appearance%2C%20professional%20headshot%20photography%2C%20simple%20background&width=400&height=400&seq=team_engineering&orientation=squarish"
                    alt="Jefe de Ingeniería"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">Jefe de Ingeniería</h3>
                <p className="text-gray-600 mb-4">Innovación técnica y desarrollo</p>
                <p className="text-sm text-gray-500">
                  Especialista en el desarrollo técnico y la implementación de nuevas tecnologías.
                </p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20quality%20control%20manager%20in%20manufacturing%20facility%2C%20expert%20in%20bathroom%20product%20quality%20assurance%2C%20professional%20appearance%20in%20modern%20workplace%2C%20professional%20headshot%20photography%2C%20simple%20background&width=400&height=400&seq=team_quality&orientation=squarish"
                    alt="Responsable de Calidad"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">Responsable de Calidad</h3>
                <p className="text-gray-600 mb-4">Excelencia en cada detalle</p>
                <p className="text-sm text-gray-500">
                  Garantiza que cada producto cumple con los más altos estándares de calidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Sustainable%20bathroom%20manufacturing%20facility%20with%20eco-friendly%20processes%2C%20green%20technology%20in%20production%2C%20renewable%20materials%20and%20environmentally%20conscious%20design%2C%20professional%20industrial%20photography%2C%20simple%20background&width=600&height=450&seq=sustainability&orientation=landscape"
                  alt="Sostenibilidad"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  Compromiso con el Futuro
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  En Baños Navamuel entendemos que la belleza debe ir de la mano con la responsabilidad. 
                  Por eso, #navamuelgreen representa nuestro compromiso con prácticas sostenibles 
                  y respetuosas con el medio ambiente.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Desde la selección de materiales hasta los procesos de fabricación, 
                  cada decisión está guiada por nuestro compromiso de crear un futuro más sostenible.
                </p>
                <a 
                  href="/inbanigreen" 
                  className="inline-block bg-green-600 text-white px-8 py-4 hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Conoce #navamuelgreen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              ¿Quieres saber más?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Estamos aquí para ayudarte a crear el baño de tus sueños. 
              Contacta con nuestro equipo de expertos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contacto" 
                className="inline-block bg-white text-black px-8 py-4 hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                Contactar
              </a>
              <a 
                href="/proyectos" 
                className="inline-block border border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-colors cursor-pointer whitespace-nowrap"
              >
                Ver proyectos
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
