
import { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  author: string;
  image: string;
  mobileImage: string;
  tabletImage: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Showroom MOV'IN",
    author: "By MOV'IN movimiento Interno Mónaco",
    image: "https://inbani.com/wp-content/uploads/2024/09/1920x1080_escritorio_0002_IMG_0043-Enhanced-NR.jpg",
    mobileImage: "https://inbani.com/wp-content/uploads/2024/09/520x900_movil_0002_IMG_0017-Enhanced-NR.jpg",
    tabletImage: "https://inbani.com/wp-content/uploads/2024/09/800x1200_tablet_0002_IMG_0017-Enhanced-NR.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Casa Escondida",
    author: "By Grupoarquitectura",
    image: "https://inbani.com/wp-content/uploads/2024/09/1920x1080_escritorio_0003_Casa-Escondida-7.jpg",
    mobileImage: "https://inbani.com/wp-content/uploads/2024/09/520x900_movil_0003_Casa-Escondida-7.jpg",
    tabletImage: "https://inbani.com/wp-content/uploads/2024/09/800x1200_tablet_0003_Casa-Escondida-7.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Casa DACHA",
    author: "By Yuri Kulikov",
    image: "https://inbani.com/wp-content/uploads/2024/07/1920x1080_escritorio_0002_IVP_6019.jpg",
    mobileImage: "https://inbani.com/wp-content/uploads/2024/07/520x900_movil_0001_IVP_6021.jpg",
    tabletImage: "https://inbani.com/wp-content/uploads/2024/07/800x1200_tablet_0001_IVP_6021.jpg",
    link: "#"
  },
  {
    id: 4,
    title: "Bulgara 5",
    author: "By Igor Schneider",
    image: "https://inbani.com/wp-content/uploads/2024/07/1920x1080_escritorio_0003_DSC_9961.jpg",
    mobileImage: "https://inbani.com/wp-content/uploads/2024/07/520x900_movil_0002_DSC_9848.jpg",
    tabletImage: "https://inbani.com/wp-content/uploads/2024/07/800x1200_tablet_0002_DSC_9848.jpg",
    link: "#"
  },
  {
    id: 5,
    title: "Un baño Zen",
    author: "By Thevissen CV & Sanitair",
    image: "https://inbani.com/wp-content/uploads/2024/09/1920x1080_escritorio_0001_79c403a1-e0cb-42b8-b472-0cd92e1cd8b6.jpg",
    mobileImage: "https://inbani.com/wp-content/uploads/2024/09/520x900_movil_0001_79c403a1-e0cb-42b8-b472-0cd92e1cd8b6.jpg",
    tabletImage: "https://inbani.com/wp-content/uploads/2024/09/800x1200_tablet_0001_79c403a1-e0cb-42b8-b472-0cd92e1cd8b6.jpg",
    link: "#"
  },
  {
    id: 6,
    title: "Holy House",
    author: "By West One Bathrooms",
    image: "https://inbani.com/wp-content/uploads/2024/07/1920x1080_escritorio_0001_Holly-House-18.jpg",
    mobileImage: "https://inbani.com/wp-content/uploads/2024/07/520x900_movil_0000_Holly-House-18.jpg",
    tabletImage: "https://inbani.com/wp-content/uploads/2024/07/800x1200_tablet_0000_Holly-House-18.jpg",
    link: "#"
  }
];

export default function ProjectSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="project-slider relative h-screen overflow-hidden">
      <div className="slider-wrapper relative h-full">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`slide absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <a href={project.link} className="slide-link block h-full relative">
              <picture className="slide-image-wrapper absolute inset-0">
                <source 
                  media="(max-width: 425px)" 
                  srcSet={project.mobileImage}
                />
                <source 
                  media="(max-width: 768px)" 
                  srcSet={project.tabletImage}
                />
                <img 
                  src={project.image}
                  alt={project.title}
                  className="slide-image w-full h-full object-cover object-top"
                />
              </picture>
              
              <div className="slide-content absolute bottom-16 left-8 text-white max-w-lg">
                <h2 className="slide-title text-3xl md:text-4xl font-light mb-2">
                  {project.title}
                </h2>
                <p className="slide-author text-lg opacity-90">
                  {project.author}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="slider-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {projects.map((_, index) => (
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
