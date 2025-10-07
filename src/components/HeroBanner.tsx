import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroMopImage from "figma:asset/4833a026084b5e20c1cc47855ef126c429835e7f.png";
import bathroomImage from "figma:asset/ea46b98906e595bb8bc7890f2426842a2adfaa77.png";
import bedroomImage from "figma:asset/51506c9e773fb4c5e767684cc9fef545930c2cf4.png";

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroMopImage,
      title:
        "PRODUTOS DE LIMPEZA | MOPS, RODOS, ESCOVAS E ACESSÓRIOS",
      subtitle:
        "Encontre mops, rodos, panos, escovas e acessórios que facilitam a limpeza e deixam seu ambiente impecável.",
    },
    {
      image: bathroomImage,
      title: "TRANSFORME SEU BANHEIRO | CORTINAS E ACESSÓRIOS",
      subtitle:
        "Cortinas de banheiro modernas e funcionais que combinam design e praticidade para seu ambiente.",
    },
    {
      image: bedroomImage,
      title: "AMBIENTES ELEGANTES | CORTINAS E DECORAÇÃO",
      subtitle:
        "Cortinas blackout e acessórios decorativos que transformam seus ambientes com sofisticação.",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000); // Change slide every 9 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length,
    );
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] min-h-[500px] sm:min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentSlideData.image}
          alt="Ambiente CleanTech - Produtos de Limpeza"
          className="w-full h-full object-cover"
        />
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--cleantech-blue-dark)]/20 via-transparent to-[var(--cleantech-cyan-light)]/10"></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 w-full">
          <div className="max-w-4xl text-center mx-auto text-white">
            {/* Decorative line */}
            <div className="w-16 h-0.5 bg-[var(--cleantech-cyan-light)] mx-auto mb-8"></div>

            <h1 className="my-4 sm:my-6 pt-12 sm:pt-20 leading-tight font-light tracking-wide text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
              {currentSlideData.title}
            </h1>

            <p className="mb-8 sm:mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto font-light text-sm sm:text-base lg:text-lg px-4 sm:px-0">
              {currentSlideData.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  document
                    .querySelector("#featured-products")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-[var(--cleantech-blue-dark)] text-white font-medium uppercase tracking-wide transition-all duration-300 hover:bg-[var(--cleantech-blue-navy)] hover:scale-105 shadow-xl text-sm"
              >
                EXPLORAR PRODUTOS
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 border-2 border-white/60 text-white font-medium uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-[var(--cleantech-blue-dark)] hover:scale-105 text-sm"
              >
                SAIBA MAIS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[var(--cleantech-cyan-light)] w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}