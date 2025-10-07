import { useState } from "react";
import { ArrowLeft, Grid3X3, Heart, Download, Share2, Tag, Search, Filter, Eye, Maximize2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  image: string;
  likes: number;
  tags: string[];
  description: string;
}

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      title: "Cozinha Moderna Minimalista",
      category: "Cozinha",
      image: "https://images.unsplash.com/photo-1593136573819-c3b57b8caf29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMGtpdGNoZW58ZW58MXx8fHwxNzU5MzM0NDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 234,
      tags: ["cozinha", "moderna", "minimalista", "branca"],
      description: "Cozinha com design clean e funcional, perfeita para rotinas de limpeza eficientes."
    },
    {
      id: 2,
      title: "Banheiro Organizado",
      category: "Banheiro",
      image: "https://images.unsplash.com/photo-1758239873506-82d0e76244f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbml6ZWQlMjBiYXRocm9vbXxlbnwxfHx8fDE3NTkzMzQ0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 189,
      tags: ["banheiro", "organização", "limpo", "moderno"],
      description: "Banheiro impecável com produtos organizados e fácil manutenção."
    },
    {
      id: 3,
      title: "Quarto Minimalista Zen",
      category: "Quarto",
      image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbXxlbnwxfHx8fDE3NTkzMzQ0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 156,
      tags: ["quarto", "minimalista", "zen", "organizado"],
      description: "Ambiente sereno e organizado que facilita a limpeza diária."
    },
    {
      id: 4,
      title: "Sala de Estar Clean",
      category: "Sala",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzU5MzA3MzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 198,
      tags: ["sala", "clean", "aconchegante", "funcional"],
      description: "Sala com design funcional e fácil de manter limpa."
    },
    {
      id: 5,
      title: "Escritório Organizado",
      category: "Escritório",
      image: "https://images.unsplash.com/photo-1712698137596-15ea82027b55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbml6ZWQlMjBvZmZpY2UlMjBzcGFjZXxlbnwxfHx8fDE3NTkzMzQ0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 167,
      tags: ["escritório", "produtividade", "organização", "limpo"],
      description: "Espaço de trabalho organizado que promove produtividade."
    },
    {
      id: 6,
      title: "Limpeza Sustentável",
      category: "Sustentabilidade",
      image: "https://images.unsplash.com/photo-1642505172378-a6f5e5b15580?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGNsZWFuaW5nfGVufDF8fHx8MTc1OTMzNDQ4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 278,
      tags: ["sustentável", "eco-friendly", "natural", "verde"],
      description: "Produtos de limpeza naturais e sustentáveis para um lar eco-friendly."
    },
    // Adicione mais imagens para completar a galeria
    {
      id: 7,
      title: "Cozinha Gourmet",
      category: "Cozinha",
      image: "https://images.unsplash.com/photo-1593136573819-c3b57b8caf29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMGtpdGNoZW58ZW58MXx8fHwxNzU5MzM0NDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 145,
      tags: ["cozinha", "gourmet", "elegante", "funcional"],
      description: "Cozinha gourmet com design sofisticado e fácil manutenção."
    },
    {
      id: 8,
      title: "Lavanderia Prática",
      category: "Lavanderia",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzU5MzA3MzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 123,
      tags: ["lavanderia", "prática", "organizada", "eficiente"],
      description: "Lavanderia bem organizada para máxima eficiência."
    }
  ];

  const categories = [
    { name: "Todas", count: galleryImages.length },
    { name: "Cozinha", count: galleryImages.filter(img => img.category === "Cozinha").length },
    { name: "Banheiro", count: galleryImages.filter(img => img.category === "Banheiro").length },
    { name: "Quarto", count: galleryImages.filter(img => img.category === "Quarto").length },
    { name: "Sala", count: galleryImages.filter(img => img.category === "Sala").length },
    { name: "Escritório", count: galleryImages.filter(img => img.category === "Escritório").length },
    { name: "Sustentabilidade", count: galleryImages.filter(img => img.category === "Sustentabilidade").length }
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === "Todas" || image.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleBackClick = () => {
    if ((window as any).navigateToHome) {
      (window as any).navigateToHome();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[var(--cleantech-neutral-50)]">
      {/* Header */}
      <div className="bg-white border-b border-[var(--cleantech-neutral-200)] sticky top-24 z-40">
        <div className="container mx-auto px-3 sm:px-4 max-w-7xl py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-4 sm:mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={handleBackClick}
                className="flex items-center gap-2 text-[var(--cleantech-primary)] hover:text-[var(--cleantech-secondary)] transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Voltar</span>
              </button>
              
              <div className="h-6 w-px bg-[var(--cleantech-neutral-300)]" />
              
              <h1 className="text-2xl font-light text-[var(--cleantech-primary)] uppercase tracking-wider">
                Galeria de Inspirações
              </h1>
            </div>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[var(--cleantech-neutral-400)]" />
                <input
                  type="text"
                  placeholder="Buscar inspirações..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-[var(--cleantech-neutral-200)] rounded-lg focus:ring-2 focus:ring-[var(--cleantech-primary)]/20 focus:border-[var(--cleantech-primary)] transition-all duration-300 w-64"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-[var(--cleantech-neutral-100)] rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-white text-[var(--cleantech-primary)] shadow-sm' 
                      : 'text-[var(--cleantech-neutral-500)] hover:text-[var(--cleantech-primary)]'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'masonry' 
                      ? 'bg-white text-[var(--cleantech-primary)] shadow-sm' 
                      : 'text-[var(--cleantech-neutral-500)] hover:text-[var(--cleantech-primary)]'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.name
                    ? 'bg-[var(--cleantech-primary)] text-white shadow-lg'
                    : 'bg-white text-[var(--cleantech-neutral-600)] border border-[var(--cleantech-neutral-200)] hover:border-[var(--cleantech-primary)] hover:text-[var(--cleantech-primary)]'
                }`}
              >
                <Tag className="w-3 h-3" />
                <span className="text-sm font-medium">{category.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedCategory === category.name
                    ? 'bg-white/20 text-white' 
                    : 'bg-[var(--cleantech-neutral-100)] text-[var(--cleantech-neutral-500)]'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 max-w-7xl py-8">
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}>
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
              onClick={() => handleImageClick(image)}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={image.image}
                    alt={image.title}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                      viewMode === 'masonry' ? 'h-auto' : 'h-64'
                    }`}
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[var(--cleantech-primary)] px-3 py-1 rounded-full text-xs font-medium">
                      {image.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                      {/* Top Actions */}
                      <div className="flex justify-between items-start">
                        <div className="flex gap-2">
                          <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-300">
                            <Heart className="w-4 h-4" />
                          </button>
                          <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-300">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                        <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-300">
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Bottom Info */}
                      <div>
                        <h3 className="font-semibold mb-2">{image.title}</h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm opacity-90">
                            <Heart className="w-3 h-3" />
                            <span>{image.likes}</span>
                            <Eye className="w-3 h-3 ml-2" />
                            <span>Ver mais</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-[var(--cleantech-primary)] mb-2">{image.title}</h3>
                  <p className="text-sm text-[var(--cleantech-neutral-600)] mb-3 line-clamp-2">
                    {image.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {image.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-[var(--cleantech-neutral-100)] text-[var(--cleantech-neutral-600)] px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-[var(--cleantech-neutral-500)]">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{image.likes} curtidas</span>
                    </div>
                    <button className="text-[var(--cleantech-primary)] hover:text-[var(--cleantech-secondary)] font-medium transition-colors duration-300">
                      Ver detalhes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-[var(--cleantech-neutral-300)] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[var(--cleantech-primary)] mb-2">
              Nenhuma imagem encontrada
            </h3>
            <p className="text-[var(--cleantech-neutral-600)] mb-4">
              Tente ajustar os filtros ou termos de busca
            </p>
            <button
              onClick={() => {
                setSelectedCategory("Todas");
                setSearchTerm("");
              }}
              className="px-6 py-2 bg-[var(--cleantech-primary)] text-white rounded-lg hover:bg-[var(--cleantech-secondary)] transition-colors duration-300"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-300 z-10"
            >
              <ArrowLeft className="w-5 h-5 rotate-45" />
            </button>
            
            <ImageWithFallback
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[60vh] object-cover"
            />
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-[var(--cleantech-primary)] mb-2">
                    {selectedImage.title}
                  </h2>
                  <span className="bg-[var(--cleantech-neutral-100)] text-[var(--cleantech-primary)] px-3 py-1 rounded-full text-sm font-medium">
                    {selectedImage.category}
                  </span>
                </div>
                
                <div className="flex gap-2">
                  <button className="p-2 border border-[var(--cleantech-neutral-200)] rounded-lg hover:border-[var(--cleantech-primary)] hover:text-[var(--cleantech-primary)] transition-colors duration-300">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 border border-[var(--cleantech-neutral-200)] rounded-lg hover:border-[var(--cleantech-primary)] hover:text-[var(--cleantech-primary)] transition-colors duration-300">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 border border-[var(--cleantech-neutral-200)] rounded-lg hover:border-[var(--cleantech-primary)] hover:text-[var(--cleantech-primary)] transition-colors duration-300">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <p className="text-[var(--cleantech-neutral-600)] mb-4">
                {selectedImage.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedImage.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-sm bg-[var(--cleantech-neutral-100)] text-[var(--cleantech-neutral-600)] px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 text-sm text-[var(--cleantech-neutral-500)]">
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>{selectedImage.likes} curtidas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}