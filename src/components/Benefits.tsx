import { Truck, Percent, CreditCard, Shield } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      id: 1,
      icon: Truck,
      title: "FRETE GRÁTIS",
      description: "Para todo Brasil acima de R$299"
    },
    {
      id: 2,
      icon: Percent,
      title: "MÊS DO CONSUMIDOR", 
      description: "Até 50% OFF"
    },
    {
      id: 3,
      icon: CreditCard,
      title: "ATÉ 6X SEM JUROS",
      description: "PIX com 5% OFF"
    },
    {
      id: 4,
      icon: Shield,
      title: "GARANTIA DE 90 DIAS",
      description: "Contra defeitos de fábrica"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-[var(--cleantech-primary)] to-[var(--cleantech-blue-navy)] py-3 sm:py-4">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        {/* Mobile: Stack layout com melhor espaçamento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-0">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.id}
                className={`
                  group relative overflow-hidden
                  flex items-center space-x-3 
                  px-3 py-3 sm:px-4 sm:py-3 lg:px-6 lg:py-3
                  text-white rounded-lg sm:rounded-none
                  bg-white/5 sm:bg-transparent
                  backdrop-blur-sm sm:backdrop-blur-none
                  border border-white/10 sm:border-none
                  hover:bg-white/10 transition-all duration-300
                  transform hover:scale-[1.02] sm:hover:scale-100
                  ${index < benefits.length - 1 ? 'lg:border-r lg:border-white/20' : ''}
                `}
              >
                {/* Background hover effect para mobile */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--cleantech-cyan-light)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:hidden"></div>
                
                <div className="flex-shrink-0 relative z-10">
                  <div className="p-1.5 sm:p-0 rounded-full bg-white/10 sm:bg-transparent">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[var(--cleantech-cyan-light)] group-hover:text-[var(--cleantech-cyan-vibrant)] transition-colors duration-300" />
                  </div>
                </div>
                
                <div className="text-left min-w-0 flex-1 relative z-10">
                  <h3 className="text-xs sm:text-sm font-medium sm:font-bold uppercase tracking-wide leading-tight truncate">
                    {benefit.title}
                  </h3>
                  <p className="text-xs opacity-85 group-hover:opacity-100 mt-0.5 line-clamp-2 sm:line-clamp-none transition-opacity duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Indicador visual sutil no mobile */}
        <div className="sm:hidden mt-3 flex justify-center">
          <div className="flex space-x-1">
            {benefits.map((_, index) => (
              <div key={index} className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}