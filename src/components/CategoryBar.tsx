export function CategoryBar() {
  const categories = [
    { name: "MOPS", href: "#" },
    { name: "PANOS", href: "#" },
    { name: "ESPONJAS", href: "#" },
    { name: "ESCOVAS", href: "#" },
    { name: "LAVANDERIA", href: "#" },
    { name: "TAPETES", href: "#" },
    { name: "ORGANIZAÇÃO", href: "#" }
  ];

  return (
    <div className="fixed top-22 sm:top-28 md:top-30 left-0 right-0 bg-white border-b border-gray-100 shadow-sm z-40">
      <div className="container mx-auto px-3 sm:px-4 -mt-0.5">
        {/* Desktop */}
        <nav className="hidden lg:flex items-justify justify-center py-3">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href={category.href}
              onClick={(e) => {
                e.preventDefault();
                (window as any).navigateToCategory && (window as any).navigateToCategory(category.name);
              }}
              className={`
                text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 
                hover:text-[var(--cleantech-primary)] hover:scale-105
                text-[var(--cleantech-neutral-700)]
                ${index < categories.length - 1 ? 'border-r border-gray-200 pr-6 mr-6' : ''}
              `}
            >
              {category.name}
            </a>
          ))}
        </nav>

        {/* Mobile - Scroll horizontal */}
        <nav className="lg:hidden pt-8 pb-2 sm:py-3">
          <div className="relative">
            {/* Gradiente esquerdo para indicar scroll */}
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
            
            {/* Gradiente direito para indicar scroll */}
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            
            {/* Container de scroll com padding lateral */}
            <div className="flex items-center space-x-5 sm:space-x-6 overflow-x-auto scrollbar-hide px-6 py-1 snap-x snap-mandatory">
              {categories.map((category, index) => (
                <a
                  key={category.name}
                  href={category.href}
                  onClick={(e) => {
                    e.preventDefault();
                    (window as any).navigateToCategory && (window as any).navigateToCategory(category.name);
                  }}
                  className="
                    text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 
                    hover:text-[var(--cleantech-primary)] active:text-[var(--cleantech-primary)]
                    text-[var(--cleantech-neutral-700)]
                    whitespace-nowrap flex-shrink-0 py-2 px-1
                    snap-center touch-manipulation
                    relative
                  "
                >
                  {category.name}
                  {/* Indicador visual de toque */}
                  <div className="absolute inset-0 bg-[var(--cleantech-primary)] opacity-0 transition-opacity duration-200 rounded touch-manipulation hover:opacity-5 active:opacity-10"></div>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}