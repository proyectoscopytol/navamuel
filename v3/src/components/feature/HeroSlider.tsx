import { useState, useEffect } from 'react';

// Fallback image in case a slide image fails to load
const fallbackImage = "/images/foto_07.jpg";

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  mobileImage: string;
  tabletImage: string;
  link: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "NUEVO CATALOGO",
    subtitle: "Personalización sin límites",
    description: "FABRICACIÓN A MEDIDA. Diseña tu espacio de baño.",
    image: "/images/foto_07.jpg",
    mobileImage: "/images/foto_07.jpg",
    tabletImage: "/images/foto_07.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "CATÁLOGO DE MADERAS NATURALES",
    subtitle: "Abraza la calidez de lo natural.",
    description:
      "DISEÑOS DE FRENTES ÚNICOS. Más de 300 combinaciones posibles.",
    image: "/images/foto_09.jpg",
    mobileImage: "/images/foto_09.jpg",
    tabletImage: "/images/foto_09.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "INFINIDAD DE SOLUCIONES MODULARES",
    subtitle: "Nos adaptamos a cada espacio. Crea tus propias composiciones.",
    description:
      "DISEÑA TU ENCIMERA Y ESPEJO A MEDIDA. Nuevas colecciones en encimeras y espejos.",
    image: "/images/foto_08.jpg",
    mobileImage: "/images/foto_08.jpg",
    tabletImage: "/images/foto_08.jpg",
    link: "#",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <section className="fullscreen-slider relative h-screen overflow-hidden mt-20">
      <div className="slider-wrapper relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <a href={slide.link} className="slide-link block h-full relative">
              <picture className="slide-image-wrapper absolute inset-0 w-full h-full">
                <source media="(max-width: 425px)" srcSet={slide.mobileImage} />
                <source media="(max-width: 768px)" srcSet={slide.tabletImage} />
                <img
                  src={slide.image}
                  alt={`${slide.title} ${slide.subtitle}`}
                  className="slide-image w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== window.location.origin + fallbackImage) {
                      target.src = fallbackImage;
                    }
                  }}
                />
              </picture>

              {/* Texto del carrusel */}
              <div className="slide-content absolute inset-0 flex items-center justify-center">
                <div className="text-left text-white max-w-xl px-8 lg:px-16 space-y-4">
                  <h2 className="slide-title text-5xl md:text-6xl font-light leading-tight">
                    {slide.title}
                  </h2>
                  <h3
                    className="slide-subtitle text-2xl md:text-3xl font-light"
                    dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                  />
                  <p className="slide-description text-lg md:text-xl opacity-90">
                    {slide.description}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="slider-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
          />
        ))}
      </div>

      {/* Indicador de scroll */}
      <div className="scroll-down absolute bottom-8 right-8 hidden lg:block">
        <div className="scroll-down-content flex flex-col items-center">
          <button className="scroll-down-button text-white mb-4 cursor-pointer">
            <span>Descubrir</span>
          </button>
          <div className="scroll-down-line w-px h-16 bg-white/50 relative">
            <div className="scroll-down-line-animation absolute top-0 w-full bg-white h-4 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
