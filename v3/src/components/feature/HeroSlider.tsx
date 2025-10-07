import { useState, useEffect } from "react";

const fallbackImage = "/images/foto_07.jpg";

interface SlideData {
  id: number;
  image: string;
  mobileImage: string;
  tabletImage: string;
  link: string;
  texts: {
    title: string;
    subtitle: string;
  }[];
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "/images/foto_07.jpg",
    mobileImage: "/images/foto_07.jpg",
    tabletImage: "/images/foto_07.jpg",
    link: "#",
    texts: [
      { title: "NUEVO CATALOGO", subtitle: "Personalización sin límites" },
      { title: "FABRICACIÓN A MEDIDA", subtitle: "Diseña tu espacio de baño." },
    ],
  },
  {
    id: 2,
    image: "/images/foto_09.jpg",
    mobileImage: "/images/foto_09.jpg",
    tabletImage: "/images/foto_09.jpg",
    link: "#",
    texts: [
      {
        title: "CATÁLOGO DE MADERAS NATURALES",
        subtitle: "Abraza la calidez de lo natural.",
      },
      {
        title: "DISEÑOS DE FRENTES ÚNICOS",
        subtitle: "Más de 300 combinaciones posibles.",
      },
    ],
  },
  {
    id: 3,
    image: "/images/foto_08.jpg",
    mobileImage: "/images/foto_08.jpg",
    tabletImage: "/images/foto_08.jpg",
    link: "#",
    texts: [
      {
        title: "INFINIDAD DE SOLUCIONES MODULARES",
        subtitle:
          "Nos adaptamos a cada espacio. Crea tus propias composiciones.",
      },
      {
        title: "DISEÑA TU ENCIMERA Y ESPEJO A MEDIDA",
        subtitle: "Nuevas colecciones en encimeras y espejos.",
      },
    ],
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [fade, setFade] = useState(true);
  const [imageFade, setImageFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentText((prevText) => {
          const nextText = prevText + 1;

          if (nextText >= slides[currentSlide].texts.length) {
            setImageFade(false);

            setTimeout(() => {
              setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
              setCurrentText(0);
              setImageFade(true);
            }, 500);
          }

          return nextText >= slides[currentSlide].texts.length ? 0 : nextText;
        });

        setTimeout(() => setFade(true), 500);
      }, 500);
    }, 4000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const slide = slides[currentSlide];
  const text = slide.texts[currentText];

  return (
    <section className="relative h-screen overflow-hidden mt-20">
      {/* Imagen */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
          imageFade ? "opacity-100" : "opacity-0"
        }`}
      >
        <picture className="w-full h-full">
          <source media="(max-width: 425px)" srcSet={slide.mobileImage} />
          <source media="(max-width: 768px)" srcSet={slide.tabletImage} />
          <img
            src={slide.image}
            alt={text.title}
            className="w-full h-full object-cover md:object-cover sm:object-contain object-center"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== window.location.origin + fallbackImage) {
                target.src = fallbackImage;
              }
            }}
          />
        </picture>
      </div>

      {/* Texto centrado */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`text-center text-white max-w-3xl px-8 transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-4 drop-shadow-lg">
            {text.title}
          </h2>
          <p className="text-lg md:text-xl opacity-90 drop-shadow-md">
            {text.subtitle}
          </p>
        </div>
      </div>

      {/* Paginación */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setCurrentText(0);
            }}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
