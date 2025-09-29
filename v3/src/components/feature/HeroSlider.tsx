// Fallback image in case a slide image fails to load
const fallbackImage = "/images/foto_01.jpg";

import { useState, useEffect } from 'react';

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
    title: "Inspiración",
    subtitle: "Diseño <em>exclusivo</em>",
    description: "Espacios que inspiran cada día.",
    image: "/images/foto_01.jpg",
    mobileImage: "/images/foto_01.jpg",
    tabletImage: "/images/foto_01.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Calidad",
    subtitle: "Materiales <em>premium</em>",
    description: "Solo lo mejor para tu baño.",
    image: "/images/foto_02.jpg",
    mobileImage: "/images/foto_02.jpg",
    tabletImage: "/images/foto_02.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Innovación",
    subtitle: "Tecnología <em>avanzada</em>",
    description: "Funcionalidad y vanguardia en cada detalle.",
    image: "/images/foto_03.jpg",
    mobileImage: "/images/foto_03.jpg",
    tabletImage: "/images/foto_03.jpg",
    link: "#"
  },
  {
    id: 4,
    title: "Estilo",
    subtitle: "Elegancia <em>atemporal</em>",
    description: "Diseños que nunca pasan de moda.",
    image: "/images/foto_04.jpg",
    mobileImage: "/images/foto_04.jpg",
    tabletImage: "/images/foto_04.jpg",
    link: "#"
  },
  {
    id: 5,
    title: "Sostenibilidad",
    subtitle: "Compromiso <em>verde</em>",
    description: "Cuidamos el planeta en cada proceso.",
    image: "/images/foto_05.jpg",
    mobileImage: "/images/foto_05.jpg",
    tabletImage: "/images/foto_05.jpg",
    link: "#"
  },
  {
    id: 6,
    title: "Confort",
    subtitle: "Bienestar <em>total</em>",
    description: "Tu espacio, tu refugio personal.",
    image: "/images/foto_06.jpg",
    mobileImage: "/images/foto_06.jpg",
    tabletImage: "/images/foto_06.jpg",
    link: "#"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="fullscreen-slider relative h-screen overflow-hidden">
      <div className="slider-wrapper relative h-full">
        {slides && Array.isArray(slides) && slides.length > 0 && slides.map((slide, index) => (
          <div
            key={slide.id || index}
            className={`slide absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <a href={slide.link} className="slide-link block h-full relative">
              <picture className="slide-image-wrapper absolute inset-0 w-full h-full flex items-center justify-center aspect-video">
                <source 
                  media="(max-width: 425px)" 
                  srcSet={slide.mobileImage}
                />
                <source 
                  media="(max-width: 768px)" 
                  srcSet={slide.tabletImage}
                />
                <img
                  src={slide.image}
                  alt={`${slide.title} ${slide.subtitle}`}
                  className="slide-image w-full h-full object-cover object-center"
                  onError={e => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== window.location.origin + fallbackImage) {
                      target.src = fallbackImage;
                    }
                  }}
                />
              </picture>
              <div className="slide-content absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-2xl px-4">
                  <h2 className="slide-title text-4xl md:text-6xl lg:text-7xl font-light mb-4">
                    {slide.title} <span dangerouslySetInnerHTML={{ __html: slide.subtitle }} />
                  </h2>
                  <p className="slide-description text-lg md:text-xl opacity-90">
                    {slide.description}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="slider-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
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
