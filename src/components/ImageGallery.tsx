import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ImageGallery() {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1614226114662-feb24e8e41f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYmVkcm9vbSUyMGxpbmVufGVufDF8fHx8MTc1ODAzMjYzOXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Produto CleanTech 1",
      category: "LIMPEZA"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1672350563389-6e568bcf8496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGJlZGRpbmclMjBiZWRyb29tfGVufDF8fHx8MTc1ODAzMjY0MXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Produto CleanTech 2",
      category: "CASA"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1616418928117-4e6d19be2df1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc1Nzk5ODE4OXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Produto CleanTech 3",
      category: "QUARTO"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1704428382583-c9c7c1e55d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwZGVzaWdufGVufDF8fHx8MTc1ODAzMjQwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Produto CleanTech 4",
      category: "MODERNO"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1652161853855-005106816b9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHBpbGxvd3MlMjBiZWRkaW5nfGVufDF8fHx8MTc1ODAzMjY0NXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Produto CleanTech 5",
      category: "COZINHA"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1560449752-ac541afdd6b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXV0cmFsJTIwYmVkcm9vbSUyMGRlY29yfGVufDF8fHx8MTc1ODAzMjY0NXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Produto CleanTech 6",
      category: "BANHEIRO"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[var(--cleantech-light-bg)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-light tracking-[0.3em] text-[var(--cleantech-primary)] uppercase mb-4">
            INSPIRE-SE
          </h2>
          <h3 className="text-3xl lg:text-4xl font-light tracking-[0.2em] text-[var(--cleantech-neutral-900)] uppercase mb-6">
            GALERIA DE INSPIRAÇÕES
          </h3>
          <div className="h-1 w-32 bg-gradient-to-r from-[var(--cleantech-cyan-light)] to-[var(--cleantech-cyan-vibrant)] mx-auto mb-6"></div>
          <p className="text-[var(--cleantech-neutral-600)] max-w-2xl mx-auto">
            Descubra como nossos produtos CleanTech transformam ambientes com tecnologia e design inteligente
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className="group cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-square relative">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--cleantech-primary)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-xs font-light tracking-[0.2em] text-white uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {image.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Plus Icon for Zoom */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <span className="text-[var(--cleantech-primary)] text-lg">+</span>
                    </div>
                  </div>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--cleantech-cyan-light)] rounded-lg transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-[var(--cleantech-cyan-light)] to-[var(--cleantech-cyan-vibrant)] text-white font-light tracking-[0.1em] uppercase transition-all duration-300 hover:shadow-lg hover:scale-105 animate-gradient">
            VER GALERIA COMPLETA
          </button>
        </div>
      </div>
    </section>
  );
}