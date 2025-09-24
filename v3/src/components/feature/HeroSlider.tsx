
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
    title: "Colección",
    subtitle: "Gr<em>ate</em>",
    description: "Repetición y continuo contraste entre luces y sombras",
    image: "https://inbani.com/wp-content/uploads/2025/08/grate_round_new_desktop_alternative.jpg",
    mobileImage: "https://inbani.com/wp-content/uploads/2025/08/grate_round_new_mobile.jpg",
    tabletImage: "https://inbani.com/wp-content/uploads/2025/08/grate_round_new_tablet.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Colección",
    subtitle: "Fu<em>se</em>",
    description: "Equilibrio perfecto entre estética, innovación y personalización",
    image: "https://inbani.com/wp-content/uploads/2025/01/fuse_collection_desktop.jpg",
    mobileImage: "https://inbani.com/wp-content/uploads/2025/01/fuse_collection_mobile.jpg",
    tabletImage: "https://inbani.com/wp-content/uploads/2025/01/fuse_collection_tablet.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Colección",
    subtitle: "Sc<em>ala</em>",
    description: "Cada pieza se convierte en una obra única",
    image: "https://inbani.com/wp-content/uploads/2024/11/home_scala.jpg",
    mobileImage: "https://inbani.com/wp-content/uploads/2024/10/movil_scala_1.jpg",
    tabletImage: "https://inbani.com/wp-content/uploads/2024/10/scala_tablet_1.jpg",
    link: "#"
  },
  {
    id: 4,
    title: "Nueva colección",
    subtitle: "Ed<em>ge</em>",
    description: "Donde se mezclan simpleza y elegancia",
    image: "https://inbani.com/wp-content/uploads/2025/03/edge_home_desktop-1.jpg",
    mobileImage: "https://inbani.com/wp-content/uploads/2025/03/edge_home_mobile-1.jpg",
    tabletImage: "https://inbani.com/wp-content/uploads/2025/03/edge_home_tablet-1.jpg",
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
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <a href={slide.link} className="slide-link block h-full relative">
              <picture className="slide-image-wrapper absolute inset-0">
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
                  className="slide-image w-full h-full object-cover object-top"
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
