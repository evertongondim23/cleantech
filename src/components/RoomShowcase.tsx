import { ImageWithFallback } from "./figma/ImageWithFallback";

export function RoomShowcase() {
  const rooms = [
    {
      id: 1,
      title: "QUARTO",
      description: "Tecnologia para um descanso perfeito",
      image: "https://images.unsplash.com/photo-1616418928117-4e6d19be2df1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc1Nzk5ODE4OXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      title: "SALA",
      description: "Limpeza inteligente para convivência",
      image: "https://images.unsplash.com/photo-1704428382583-c9c7c1e55d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwZGVzaWdufGVufDF8fHx8MTc1ODAzMjQwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      title: "COZINHA",
      description: "Soluções práticas para o dia a dia",
      image: "https://images.unsplash.com/photo-1652161853855-005106816b9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHBpbGxvd3MlMjBiZWRkaW5nfGVufDF8fHx8MTc1ODAzMjY0NXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      title: "BANHEIRO",
      description: "Higiene e tecnologia em perfeita harmonia",
      image: "https://images.unsplash.com/photo-1560449752-ac541afdd6b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXV0cmFsJTIwYmVkcm9vbSUyMGRlY29yfGVufDF8fHx8MTc1ODAzMjY0NXww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="py-20 bg-[var(--cleantech-neutral-50)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-light tracking-[0.3em] text-[var(--cleantech-primary)] uppercase mb-4">
            AMBIENTES CLEANTECH
          </h2>
          <h3 className="text-3xl lg:text-4xl font-light tracking-[0.2em] text-[var(--cleantech-neutral-900)] uppercase mb-6">
            TRANSFORME CADA ESPAÇO
          </h3>
          <div className="h-1 w-32 bg-gradient-to-r from-[var(--cleantech-cyan-light)] to-[var(--cleantech-cyan-vibrant)] mx-auto"></div>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room, index) => (
            <div 
              key={room.id} 
              className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <ImageWithFallback
                  src={room.image}
                  alt={`Ambiente ${room.title}`}
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--cleantech-primary)]/80 via-[var(--cleantech-primary)]/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-lg font-light tracking-[0.2em] text-white uppercase mb-2">
                      {room.title}
                    </h4>
                    <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {room.description}
                    </p>
                    
                    {/* Arrow Icon */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">→</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--cleantech-cyan-light)] rounded-lg transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-[var(--cleantech-primary)] text-white font-light tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[var(--cleantech-blue-navy)] hover:scale-105 hover:shadow-lg">
            VER TODOS OS AMBIENTES
          </button>
        </div>
      </div>
    </section>
  );
}