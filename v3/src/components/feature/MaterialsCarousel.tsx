
import { useState } from 'react';

interface Material {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  description: string;
}

const materials: Material[] = [
  {
    id: 1,
    title: "Lac",
    subtitle: "ados",
    image: "https://readdy.ai/api/search-image?query=Modern%20bathroom%20with%20lacquered%20white%20surfaces%2C%20minimalist%20design%2C%20clean%20lines%2C%20contemporary%20interior%2C%20sleek%20finish%2C%20premium%20quality%20materials%2C%20elegant%20and%20sophisticated%20atmosphere&width=400&height=500&seq=lacados&orientation=portrait",
    link: "/materiales?tipo=lacados",
    description: "Acabados lacados de alta calidad con resistencia superior"
  },
  {
    id: 2,
    title: "Made",
    subtitle: "ra S3",
    image: "https://readdy.ai/api/search-image?query=Premium%20wood%20bathroom%20furniture%20with%20natural%20grain%20texture%2C%20warm%20tones%2C%20modern%20design%2C%20high-quality%20wooden%20surfaces%2C%20contemporary%20styling%2C%20elegant%20finish&width=400&height=500&seq=madera-s3&orientation=portrait",
    link: "/materiales?tipo=madera-s3",
    description: "Madera natural con tratamiento especial S3"
  },
  {
    id: 3,
    title: "Made",
    subtitle: "ra S4",
    image: "https://readdy.ai/api/search-image?query=Dark%20wood%20bathroom%20vanity%20with%20rich%20grain%20pattern%2C%20luxurious%20finish%2C%20modern%20bathroom%20design%2C%20premium%20wooden%20materials%2C%20sophisticated%20appearance&width=400&height=500&seq=madera-s4&orientation=portrait",
    link: "/materiales?tipo=madera-s4",
    description: "Madera premium con acabado S4 de lujo"
  },
  {
    id: 4,
    title: "Már",
    subtitle: "mol",
    image: "https://readdy.ai/api/search-image?query=White%20marble%20bathroom%20countertop%20with%20natural%20veining%2C%20luxury%20stone%20surface%2C%20elegant%20marble%20texture%2C%20premium%20natural%20stone%2C%20sophisticated%20bathroom%20design&width=400&height=500&seq=marmol&orientation=portrait",
    link: "/materiales?tipo=marmol",
    description: "Mármol natural de las mejores canteras"
  },
  {
    id: 5,
    title: "Solid",
    subtitle: "surface",
    image: "https://readdy.ai/api/search-image?query=Modern%20bathroom%20with%20solid%20surface%20materials%2C%20seamless%20white%20countertop%2C%20contemporary%20design%2C%20smooth%20finish%2C%20premium%20composite%20material%2C%20minimalist%20styling&width=400&height=500&seq=solidsurface&orientation=portrait",
    link: "/materiales?tipo=solidsurface",
    description: "Superficie sólida sin juntas, máxima higiene"
  },
  {
    id: 6,
    title: "Cera",
    subtitle: "mica",
    image: "https://readdy.ai/api/search-image?query=Ceramic%20bathroom%20surfaces%20with%20glossy%20finish%2C%20modern%20tile%20design%2C%20sleek%20ceramic%20materials%2C%20contemporary%20bathroom%20styling%2C%20premium%20ceramic%20finish&width=400&height=500&seq=ceramica&orientation=portrait",
    link: "/materiales?tipo=ceramica",
    description: "Cerámica técnica de alta resistencia"
  }
];

export default function MaterialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % materials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + materials.length) % materials.length);
  };

  const visibleMaterials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % materials.length;
      result.push(materials[index]);
    }
    return result;
  };

  return (
    <section className="materials-carousel py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Materiales</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de materiales premium, 
            cada uno cuidadosamente elegido por su calidad, durabilidad y belleza excepcional.
          </p>
        </div>
        
        <div className="carousel-container relative">
          <div className="carousel-wrapper overflow-hidden">
            <div className="carousel-slides flex transition-transform duration-500 ease-in-out">
              {visibleMaterials().map((material) => (
                <div key={material.id} className="carousel-slide flex-none w-full md:w-1/3 px-4">
                  <a href={material.link} className="material-card block group">
                    <div className="material-image-wrapper relative overflow-hidden mb-6">
                      <img 
                        src={material.image}
                        alt={`${material.title}${material.subtitle}`}
                        className="material-image w-full h-96 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="material-title text-center text-2xl md:text-3xl font-light mb-3">
                      <span>{material.title}<em className="font-light">{material.subtitle}</em></span>
                    </h3>
                    <p className="text-center text-sm text-gray-600">
                      {material.description}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="carousel-button carousel-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white border border-gray-300 flex items-center justify-center transition-all cursor-pointer hidden md:flex"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          
          <button
            onClick={nextSlide}
            className="carousel-button carousel-button-next absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white border border-gray-300 flex items-center justify-center transition-all cursor-pointer hidden md:flex"
          >
            <i className="ri-arrow-right-line text-xl"></i>
          </button>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2 md:hidden">
            {materials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                  index === currentIndex ? 'bg-black' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a 
            href="/materiales" 
            className="inline-block bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
          >
            Ver todos los materiales
          </a>
        </div>
      </div>
    </section>
  );
}
