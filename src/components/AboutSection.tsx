import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[var(--cleantech-light-bg)] to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-light  text-[var(--cleantech-primary)] uppercase mb-4">
                SOBRE A CLEANTECH
              </h2>
              <h3 className="text-4xl lg:text-5xl font-light tracking-[0.1em] text-[var(--cleantech-neutral-900)] mb-6">
                Inovação em 
                <span className="block text-[var(--cleantech-cyan-light)]">Limpeza Inteligente</span>
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-[var(--cleantech-cyan-light)] to-[var(--cleantech-cyan-vibrant)]"></div>
            </div>
            
            <div className="space-y-6 text-[var(--cleantech-neutral-600)] leading-relaxed">
              <p className="text-lg">
                Na CleanTech, revolucionamos a forma como você cuida dos seus espaços. 
                Combinamos <strong className="text-[var(--cleantech-primary)]">tecnologia avançada</strong> com 
                design inteligente para criar produtos que tornam a limpeza mais eficiente e sustentável.
              </p>
              
              <p>
                Cada produto é desenvolvido com precisão, utilizando materiais premium 
                e tecnologias que respeitam o meio ambiente, proporcionando resultados 
                excepcionais que superam expectativas.
              </p>
              
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-[var(--cleantech-primary)]">10+</div>
                  <div className="text-sm text-[var(--cleantech-neutral-600)]">Anos de Experiência</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-[var(--cleantech-primary)]">50k+</div>
                  <div className="text-sm text-[var(--cleantech-neutral-600)]">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <button className="px-6 py-3 bg-[var(--cleantech-primary)] text-white font-light tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[var(--cleantech-blue-navy)] hover:scale-105">
                Nossa História
              </button>
              <button className="px-6 py-3 border-2 border-[var(--cleantech-primary)] text-[var(--cleantech-primary)] font-light tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[var(--cleantech-primary)] hover:text-white">
                Contato
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1684248655527-46bee8e79029?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGxpbmVuJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzU4MDMyNjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="CleanTech products"
                className="w-full h-96 lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--cleantech-primary)]/20 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-[var(--cleantech-cyan-light)] to-[var(--cleantech-cyan-vibrant)] rounded-lg -z-10 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-[var(--cleantech-primary)] to-[var(--cleantech-blue-navy)] rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}