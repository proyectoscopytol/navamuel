
import { useState } from 'react';

interface Ambiente {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

const ambientes: Ambiente[] = [
  {
    id: 1,
    title: "Carrara",
    subtitle: " & Noche",
    image: "https://inbani.com/wp-content/uploads/2024/05/Ambientes_512x640_Edge.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Scala",
    subtitle: " Mármol",
    image: "https://inbani.com/wp-content/uploads/2024/09/Ambientes_512x640_Strato-Marble-Washbasins.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Ease",
    subtitle: " Havana",
    image: "https://inbani.com/wp-content/uploads/2023/06/Ambientes_512x640__Ease-Havana.jpg",
    link: "#"
  },
  {
    id: 4,
    title: "Calm H",
    subtitle: "eritage",
    image: "https://inbani.com/wp-content/uploads/2024/09/Ambientes_512x640_Heritage-Calma-1.jpg",
    link: "#"
  },
  {
    id: 5,
    title: "Bath &",
    subtitle: " dressing",
    image: "https://inbani.com/wp-content/uploads/2023/06/Ambientes_512x640__Arc-dressing.jpg",
    link: "#"
  },
  {
    id: 6,
    title: "Iconic",
    subtitle: " Grate",
    image: "https://inbani.com/wp-content/uploads/2023/06/Ambientes_512x640__Iconic-Grate.jpg",
    link: "#"
  },
  {
    id: 7,
    title: "A master",
    subtitle: " piece",
    image: "https://inbani.com/wp-content/uploads/2023/06/Ambientes_512x640__Master-piece.jpg",
    link: "#"
  },
  {
    id: 8,
    title: "Solar",
    subtitle: " Strato",
    image: "https://inbani.com/wp-content/uploads/2023/06/Ambientes_512x640__Solar-Strato.jpg",
    link: "#"
  }
];

export default function AmbientesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % ambientes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + ambientes.length) % ambientes.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="ambientes-carousel py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-light mb-16">Ambientes</h2>
        
        <div className="carousel-container relative">
          <div className="carousel-wrapper overflow-hidden">
            <div 
              className="carousel-slides flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {ambientes.map((ambiente) => (
                <div key={ambiente.id} className="carousel-slide flex-none w-full md:w-1/3 px-4">
                  <a href={ambiente.link} className="ambiente-card block group">
                    <div className="ambiente-image-wrapper relative overflow-hidden mb-6">
                      <img 
                        src={ambiente.image}
                        alt={`${ambiente.title}${ambiente.subtitle}`}
                        className="ambiente-image w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="ambiente-title text-center text-2xl md:text-3xl font-light">
                      <span>{ambiente.title}<em className="font-light">{ambiente.subtitle}</em></span>
                    </h3>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="carousel-button carousel-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          
          <button
            onClick={nextSlide}
            className="carousel-button carousel-button-next absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <i className="ri-arrow-right-line text-xl"></i>
          </button>

          {/* Pagination Dots */}
          <div className="carousel-pagination flex justify-center mt-8 space-x-2">
            {ambientes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
