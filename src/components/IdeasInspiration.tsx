import { Tag, ArrowRight, Heart, Sparkles, ShoppingBag } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function IdeasInspiration() {
  const ideas = [
    {
      id: 1,
      title: "Casa Organizada",
      category: "Organização",
      image: "https://images.unsplash.com/photo-1757087997434-9e07ce7cf9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG9yZ2FuaXplZCUyMGhvbWV8ZW58MXx8fHwxNzU5MzMzNzAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 128
    },
    {
      id: 2,
      title: "Cozinha Moderna",
      category: "Cozinha",
      image: "https://images.unsplash.com/photo-1593136573819-c3b57b8caf29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwY2xlYW58ZW58MXx8fHwxNzU5MzM0MTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 95
    },
    {
      id: 3,
      title: "Banheiro Limpo",
      category: "Banheiro",
      image: "https://images.unsplash.com/photo-1737372805905-be0b91ec86fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGNsZWFuaW5nJTIwdGlwc3xlbnwxfHx8fDE3NTkzMzM3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 67
    },
    {
      id: 4,
      title: "Sala Minimalista",
      category: "Sala",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NTkzMjE1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 84
    },
    {
      id: 5,
      title: "Quarto Organizado",
      category: "Quarto",
      image: "https://images.unsplash.com/photo-1754606581512-222f5ea9d8c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbml6ZWQlMjBiZWRyb29tfGVufDF8fHx8MTc1OTMzNDEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 156
    },
    {
      id: 6,
      title: "Escritório Limpo",
      category: "Escritório",
      image: "https://images.unsplash.com/photo-1557777948-261e80e1abc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTkzMTg5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 203
    },
    {
      id: 7,
      title: "Ambiente Sustentável",
      category: "Sustentabilidade",
      image: "https://images.unsplash.com/photo-1650964336686-7f7be9e35f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGNsZWFuaW5nfGVufDF8fHx8MTc1OTMzMzcwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 142
    },
    {
      id: 8,
      title: "Limpeza Profissional",
      category: "Profissional",
      image: "https://images.unsplash.com/photo-1757087997434-9e07ce7cf9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG9yZ2FuaXplZCUyMGhvbWV8ZW58MXx8fHwxNzU5MzMzNzAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 89
    }
  ];

  const categories = [
    { name: "Todas", count: ideas.length, active: true },
    { name: "Cozinha", count: 15, active: false },
    { name: "Banheiro", count: 12, active: false },
    { name: "Quarto", count: 10, active: false },
    { name: "Sala", count: 8, active: false },
    { name: "Escritório", count: 6, active: false }
  ];

  const handleIdeaClick = (ideaId: number) => {
    console.log(`Clicou na ideia: ${ideaId}`);
    // Navegar para a página de galeria
    if ((window as any).navigateToGallery) {
      (window as any).navigateToGallery();
    }
  };

  const handleCategoryFilter = (categoryName: string) => {
    console.log(`Filtrar por categoria: ${categoryName}`);
    // Aqui seria implementado o filtro por categoria
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-[var(--cleantech-neutral-50)]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-[var(--cleantech-accent)]" />
            <span className="px-4 py-2 bg-gradient-to-r from-[var(--cleantech-accent)] to-[var(--cleantech-secondary)] text-white rounded-full text-sm font-light tracking-wider uppercase">
              Galeria Visual
            </span>
            <ImageWithFallback className="w-8 h-8 text-[var(--cleantech-accent)]" />
          </div>
          
          <h2 className="text-4xl font-light text-[var(--cleantech-primary)] uppercase mb-4 tracking-wider">
            INSPIRAÇÃO PARA IDEIAS
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[var(--cleantech-cyan-light)] to-[var(--cleantech-cyan-vibrant)] mx-auto mb-6"></div>
          <p className="text-[var(--cleantech-neutral-600)] max-w-3xl mx-auto">
            Explore ambientes limpos e organizados que inspiram. Uma coleção visual de espaços transformados com nossas soluções.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryFilter(category.name)}
              className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                category.active
                  ? 'bg-[var(--cleantech-primary)] text-white shadow-lg'
                  : 'bg-white text-[var(--cleantech-neutral-600)] border border-[var(--cleantech-neutral-200)] hover:border-[var(--cleantech-primary)] hover:text-[var(--cleantech-primary)]'
              }`}
            >
              <Tag className="w-4 h-4" />
              <span className="font-medium">{category.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                category.active 
                  ? 'bg-white/20 text-white' 
                  : 'bg-[var(--cleantech-neutral-100)] text-[var(--cleantech-neutral-500)]'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {ideas.map((idea) => (
            <div 
              key={idea.id} 
              className="group cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
              onClick={() => handleIdeaClick(idea.id)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <ImageWithFallback
                  src={idea.image}
                  alt={idea.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[var(--cleantech-primary)] px-3 py-1.5 rounded-full text-xs font-medium">
                    {idea.category}
                  </span>
                </div>

                {/* Hover Overlay with minimal info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-medium mb-2 text-sm">
                      {idea.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs opacity-90">
                        <Heart className="w-3 h-3" />
                        <span>{idea.likes}</span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-[var(--cleantech-neutral-50)] to-white rounded-2xl p-8">
          <div className="max-w-2xl mx-auto">
            <Sparkles className="w-12 h-12 text-[var(--cleantech-accent)] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[var(--cleantech-primary)] mb-4">
              Inspire-se e Transforme seu Espaço
            </h3>
            <p className="text-[var(--cleantech-neutral-600)] mb-6">
              Descubra mais ambientes incríveis e encontre os produtos ideais para criar o seu espaço dos sonhos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                className="px-8 py-3 bg-gradient-to-r from-[var(--cleantech-primary)] to-[var(--cleantech-secondary)] text-white rounded-xl font-medium hover:shadow-lg hover:shadow-[var(--cleantech-primary)]/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                onClick={() => (window as any).navigateToCategories?.()}
              >
                <ShoppingBag className="w-5 h-5" />
                Ver Produtos
              </button>
              
              <button 
                className="px-8 py-3 border-2 border-[var(--cleantech-primary)] text-[var(--cleantech-primary)] rounded-xl font-medium hover:bg-[var(--cleantech-primary)] hover:text-white transition-all duration-300 flex items-center gap-2"
                onClick={() => (window as any).navigateToGallery?.()}
              >
                <Sparkles className="w-5 h-5" />
                Galeria Completa
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}