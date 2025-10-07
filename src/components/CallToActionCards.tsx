export function CallToActionCards() {
  const cards = [
    {
      id: 1,
      title: "LIMPEZA RESIDENCIAL",
      subtitle: "Produtos para casa",
      description: "Mantenha sua casa sempre limpa com nossa linha residencial",
      bgColor: "bg-gradient-to-br from-pink-500 to-pink-600",
      buttonText: "EXPLORAR"
    },
    {
      id: 2,
      title: "SOLUÇÕES PROFISSIONAIS", 
      subtitle: "Para empresas",
      description: "Produtos profissionais para limpeza comercial e industrial",
      bgColor: "bg-gradient-to-br from-[var(--cleantech-cyan-light)] to-[var(--cleantech-primary)]",
      buttonText: "CONSULTAR"
    },
    {
      id: 3,
      title: "PRODUTOS ESPECIAIS",
      subtitle: "Inovação constante",
      description: "Descubra nossa linha de produtos especializados e inovadores",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
      buttonText: "DESCOBRIR"
    }
  ];

  return (
    <section className="py-16 bg-[var(--cleantech-light-bg)]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Card 1 - Produtos de Limpeza */}
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl p-6 relative overflow-hidden group transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="flex items-center justify-between h-full">
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">
                  PRODUTOS DE<br />LIMPEZA
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Ideais para manter sua casa<br />sempre limpa
                </p>
              </div>
              <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center ml-4 flex-shrink-0 group-hover:bg-white/40 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 - Frete Grátis */}
          <div className="bg-gradient-to-r from-[var(--cleantech-cyan-light)] to-[var(--cleantech-cyan-vibrant)] text-white rounded-xl p-6 relative overflow-hidden group transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="flex items-center justify-between h-full">
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">
                  FRETE<br />GRÁTIS
                </h3>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  acima de R$99 para todo<br />BRASIL
                </p>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 text-xs font-medium uppercase tracking-wide transition-all duration-300 rounded-lg">
                  + BRINDE NO CARRINHO
                </button>
              </div>
              <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center ml-4 flex-shrink-0 group-hover:bg-white/40 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M7 13v4a2 2 0 002 2h8a2 2 0 002-2v-4m-8 5a1 1 0 11-2 0 1 1 0 012 0zm8 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 3 - Acessórios para Casa */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-6 relative overflow-hidden group transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="flex items-center justify-between h-full">
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">
                  ACESSÓRIOS<br />PARA CASA
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Mais praticidade e mais<br />organização
                </p>
              </div>
              <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center ml-4 flex-shrink-0 group-hover:bg-white/40 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m3 7 9-4 9 4m0 0v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7m18 0-9 4-9-4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}