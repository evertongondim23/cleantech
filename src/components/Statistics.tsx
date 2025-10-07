import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Statistics() {
  const stats = [
    {
      id: 1,
      number: "25+",
      label: "ANOS DE EXPERIÊNCIA"
    },
    {
      id: 2,
      number: "500k+",
      label: "CLIENTES SATISFEITOS"
    },
    {
      id: 3,
      number: "100+",
      label: "PRODUTOS INOVADORES"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl mb-6 text-[var(--cleantech-primary)]">
                INOVAÇÃO EM<br />
                <span className="text-[var(--cleantech-cyan-light)]">LIMPEZA INTELIGENTE</span>
              </h2>
              <p className="text-[var(--cleantech-neutral-600)] mb-6 leading-relaxed">
                Desenvolvemos soluções inovadoras de limpeza com foco em 
                eficiência, sustentabilidade e tecnologia avançada. Nossos 
                produtos são resultado de anos de pesquisa e desenvolvimento 
                para oferecer a melhor experiência de limpeza.
              </p>
              <p className="text-[var(--cleantech-neutral-600)] leading-relaxed">
                Com certificações internacionais e compromisso com a 
                qualidade, somos referência no mercado de produtos de 
                limpeza profissionais e domésticos.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[var(--cleantech-cyan-light)] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs text-[var(--cleantech-neutral-600)] uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                onClick={() => document.querySelector('#featured-products')?.scrollIntoView({behavior: 'smooth'})}
                className="px-8 py-3 bg-[var(--cleantech-cyan-light)] text-white font-medium uppercase tracking-wide transition-all duration-300 hover:bg-[var(--cleantech-primary)] hover:scale-105"
              >
                NOSSOS PRODUTOS
              </button>
              <button 
                onClick={() => document.querySelector('#about')?.scrollIntoView({behavior: 'smooth'})}
                className="px-8 py-3 border-2 border-[var(--cleantech-neutral-300)] text-[var(--cleantech-neutral-600)] font-medium uppercase tracking-wide transition-all duration-300 hover:border-[var(--cleantech-cyan-light)] hover:text-[var(--cleantech-cyan-light)]"
              >
                SAIBA MAIS
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758523670739-0d26a3ee976d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHN1cHBsaWVzJTIwbW9kZXJufGVufDF8fHx8MTc1ODkxMDEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Produtos CleanTech"
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[var(--cleantech-cyan-light)] opacity-20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[var(--cleantech-primary)] opacity-20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}