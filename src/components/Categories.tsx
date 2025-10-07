import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Categories() {
  const [currentPage, setCurrentPage] = useState(0);

  const categories = [
    {
      id: 1,
      name: "MOPS",
      image: "https://images.unsplash.com/photo-1722710070534-e31f0290d8de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMG1vcCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTg5MTIzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      name: "PANOS",
      image: "https://images.unsplash.com/photo-1692645214212-ea7fdb37ca6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb2ZpYmVyJTIwY2xlYW5pbmclMjBjbG90aHxlbnwxfHx8fDE3NTg5MTIzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      name: "ESPONJAS",
      image: "https://images.unsplash.com/photo-1721060581444-dbd5296215ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHNwb25nZXMlMjBzY3J1YmJlcnxlbnwxfHx8fDE3NTkyNTYxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      name: "ESCOVAS",
      image: "https://images.unsplash.com/photo-1630325459372-36f3f86281cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMGJydXNoJTIwc2NydWJ8ZW58MXx8fHwxNzU4ODk4NzIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 5,
      name: "LAVANDERIA",
      image: "https://images.unsplash.com/photo-1635369306367-9d891c6c1a7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXVuZHJ5JTIwY2xlYW5pbmclMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTkyNTYxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 6,
      name: "TAPETES",
      image: "https://images.unsplash.com/photo-1625044364652-c841c1ae31b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZXQlMjBydWclMjBjbGVhbmluZ3xlbnwxfHx8fDE3NTkyNTYxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 7,
      name: "ORGANIZAÇÃO",
      image: "https://images.unsplash.com/photo-1757087997434-9e07ce7cf9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwb3JnYW5pemF0aW9uJTIwc3RvcmFnZXxlbnwxfHx8fDE3NTkyNTYxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  // Configuração responsiva de itens por página
  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 6; // Desktop: 6 itens
      if (window.innerWidth >= 768) return 3;  // Tablet: 3 itens
      return 2; // Mobile: 2 itens
    }
    return 6; // Default para SSR
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  // Atualizar itens por página quando redimensionar
  useState(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      // Reset para primeira página se necessário
      const newMaxPage = Math.ceil(categories.length / getItemsPerPage()) - 1;
      if (currentPage > newMaxPage) {
        setCurrentPage(0);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  });

  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleCategories = categories.slice(startIndex, startIndex + itemsPerPage);

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <section 
      id="categories"
      className="py-20 bg-[var(--cleantech-light-bg)] relative"
      style={{
        backgroundImage: 'linear-gradient(var(--cleantech-light-bg), var(--cleantech-light-bg)), linear-gradient(90deg, var(--cleantech-primary), var(--cleantech-cyan-light)), linear-gradient(var(--cleantech-light-bg), var(--cleantech-light-bg)), linear-gradient(90deg, var(--cleantech-primary), var(--cleantech-cyan-light))',
        backgroundSize: '100% calc(100% - 4px), 100% 2px, 100% calc(100% - 4px), 100% 2px',
        backgroundPosition: '0 2px, 0 0, 0 0, 0 100%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 mx-[100px] my-[0px] p-[0px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-[var(--cleantech-primary)] text-[36px]">
            NOSSOS PRODUTOS
          </h2>
          <p className="text-[var(--cleantech-neutral-600)] max-w-2xl mx-auto">
            Explore nossa linha completa de produtos de limpeza desenvolvidos 
            com tecnologia avançada para atender todas as suas necessidades.
          </p>
        </div>

        {/* Navigation Controls - Desktop */}
        {totalPages > 1 && (
          <div className="hidden lg:flex justify-center items-center mb-8">
            <div className="flex items-center space-x-8">
              <button
                onClick={goToPrevious}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[var(--cleantech-light-bg)] group"
                aria-label="Página anterior"
              >
                <ChevronLeft 
                  size={24} 
                  className="text-[var(--cleantech-primary)] group-hover:text-[var(--cleantech-cyan-light)] transition-colors duration-300" 
                />
              </button>



              <button
                onClick={goToNext}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[var(--cleantech-light-bg)] group"
                aria-label="Próxima página"
              >
                <ChevronRight 
                  size={24} 
                  className="text-[var(--cleantech-primary)] group-hover:text-[var(--cleantech-cyan-light)] transition-colors duration-300" 
                />
              </button>
            </div>
          </div>
        )}

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 min-h-[180px] md:min-h-[180px]">
          {visibleCategories.map((category, index) => (
            <div 
              key={category.id} 
              className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-2 overflow-hidden rounded-full border-3 border-transparent group-hover:border-[var(--cleantech-cyan-light)] transition-all duration-300 shadow-md group-hover:shadow-lg">
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--cleantech-primary)]/40 via-transparent to-transparent group-hover:from-[var(--cleantech-cyan-light)]/30 transition-all duration-300"></div>
                
                {/* Hover Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                    <span className="text-[var(--cleantech-primary)]">→</span>
                  </div>
                </div>
              </div>
              <h3 className="category-title font-light tracking-[0.2em] text-[var(--cleantech-neutral-700)] uppercase group-hover:text-[var(--cleantech-primary)] transition-colors duration-300">
                {category.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Navigation Controls - Mobile */}
        {totalPages > 1 && (
          <div className="flex lg:hidden justify-center items-center mt-8 space-x-6">
            <button
              onClick={goToPrevious}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[var(--cleantech-light-bg)] group"
              aria-label="Página anterior"
            >
              <ChevronLeft 
                size={20} 
                className="text-[var(--cleantech-primary)] group-hover:text-[var(--cleantech-cyan-light)] transition-colors duration-300" 
              />
            </button>

            <button
              onClick={goToNext}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[var(--cleantech-light-bg)] group"
              aria-label="Próxima página"
            >
              <ChevronRight 
                size={20} 
                className="text-[var(--cleantech-primary)] group-hover:text-[var(--cleantech-cyan-light)] transition-colors duration-300" 
              />
            </button>
          </div>
        )}


      </div>
    </section>
  );
}