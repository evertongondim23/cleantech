import { useState } from "react";
import { Search, Star, ShoppingCart, Filter, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: 'BESTSELLER' | 'NOVO' | 'SALE';
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Mop Microfibra Premium",
    price: 89.90,
    originalPrice: 129.90,
    image: "https://images.unsplash.com/photo-1652572036885-b5e9205dd847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHByb2R1Y3RzJTIwbW9wJTIwYnVja2V0fGVufDF8fHx8MTc1ODkxNzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    reviews: 124,
    badge: 'BESTSELLER',
    category: 'mops'
  },
  {
    id: 2,
    name: "Kit Limpeza Multiuso",
    price: 59.90,
    image: "https://images.unsplash.com/photo-1550963295-019d8a8a61c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHN1cHBsaWVzJTIwYm90dGxlc3xlbnwxfHx8fDE3NTg5MTc3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    reviews: 89,
    badge: 'NOVO',
    category: 'produtos'
  },
  {
    id: 3,
    name: "Panos Microfibra (5un)",
    price: 24.90,
    image: "https://images.unsplash.com/photo-1714058948946-8fc9c3fa6a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb2ZpYmVyJTIwY2xvdGglMjBjbGVhbmluZ3xlbnwxfHx8fDE3NTg5MTc3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    reviews: 156,
    category: 'panos'
  },
  {
    id: 4,
    name: "Aspirador Profissional",
    price: 349.90,
    image: "https://images.unsplash.com/photo-1758273238947-7eb530b408e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWN1dW0lMjBjbGVhbmVyJTIwbW9kZXJufGVufDF8fHx8MTc1ODkxNzcxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6,
    reviews: 67,
    category: 'aspiradores'
  },
  {
    id: 5,
    name: "Escovas Multiuso (3un)",
    price: 19.90,
    image: "https://images.unsplash.com/photo-1630325459372-36f3f86281cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMGJydXNoZXMlMjB0b29sc3xlbnwxfHx8fDE3NTg5MTc3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.5,
    reviews: 98,
    category: 'escovas'
  },
  {
    id: 6,
    name: "Spray Limpa Vidros",
    price: 14.90,
    originalPrice: 19.90,
    image: "https://images.unsplash.com/photo-1596263373300-e7a529358242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGNsZWFuZXIlMjBzcHJheXxlbnwxfHx8fDE3NTg5MTc3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    reviews: 201,
    badge: 'SALE',
    category: 'produtos'
  },
];

const categories = [
  { id: 'todos', name: 'Todos', count: products.length },
  { id: 'mops', name: 'Mops', count: products.filter(p => p.category === 'mops').length },
  { id: 'produtos', name: 'Produtos', count: products.filter(p => p.category === 'produtos').length },
  { id: 'panos', name: 'Panos', count: products.filter(p => p.category === 'panos').length },
  { id: 'aspiradores', name: 'Aspiradores', count: products.filter(p => p.category === 'aspiradores').length },
  { id: 'escovas', name: 'Escovas', count: products.filter(p => p.category === 'escovas').length },
];

export function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [sortBy, setSortBy] = useState("relevancia");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'preco-menor':
        return a.price - b.price;
      case 'preco-maior':
        return b.price - a.price;
      case 'avaliacao':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const handleAddToCart = (product: Product) => {
    if ((window as any).showCartToast) {
      (window as any).showCartToast(product.name);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'BESTSELLER':
        return 'bg-[var(--cleantech-primary)] text-white';
      case 'NOVO':
        return 'bg-green-500 text-white';
      case 'SALE':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 pt-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <button 
                  onClick={() => (window as any).navigateToHome && (window as any).navigateToHome()}
                  className="text-gray-500 hover:text-[var(--cleantech-primary)]"
                >
                  Início
                </button>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-[var(--cleantech-primary)] font-medium">Categorias</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-gradient-to-br from-[var(--cleantech-blue-dark)] to-[var(--cleantech-primary)]"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 88, 142, 0.8), rgba(5, 88, 142, 0.8)), url('${products[0].image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-light text-white mb-8 uppercase text-[36px]">
            PRODUTOS DE LIMPEZA
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Mops, acessórios, panos, rodos e produtos perfeitos para sua limpeza impecável
          </p>
        </div>
      </section>

      {/* Filtros e Busca */}
      <section className="py-6 lg:py-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          
          {/* Container Principal dos Filtros */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
            
            {/* Mobile: Busca + Filtro Toggle */}
            <div className="lg:hidden mb-4">
              <div className="flex gap-3">
                {/* Busca Mobile */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Buscar produtos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-gray-50 border-gray-200 rounded-xl h-11"
                  />
                </div>
                {/* Filtro Toggle */}
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-xl px-4 h-11"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
              </div>
            </div>

            {/* Desktop: Layout em Grid */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-center">
              
              {/* Busca Desktop */}
              <div className="col-span-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Buscar produtos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 bg-gray-50 border-gray-200 rounded-xl h-12 text-sm"
                  />
                </div>
              </div>

              {/* Categorias Desktop */}
              <div className="col-span-6">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-[var(--cleantech-primary)] hover:bg-[var(--cleantech-blue-dark)] text-white shadow-md'
                          : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {category.name}
                      <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-xs ${
                        selectedCategory === category.id 
                          ? 'bg-white/20 text-white' 
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {category.count}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Ordenação Desktop */}
              <div className="col-span-2">
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--cleantech-primary)] focus:border-transparent transition-all duration-200"
                  >
                    <option value="relevancia">Relevância</option>
                    <option value="preco-menor">Menor preço</option>
                    <option value="preco-maior">Maior preço</option>
                    <option value="avaliacao">Melhor avaliado</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mobile: Categorias (sempre visível por enquanto) */}
            <div className="lg:hidden">
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Categorias</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-[var(--cleantech-primary)] hover:bg-[var(--cleantech-blue-dark)] text-white'
                          : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      {category.name}
                      <span className={`ml-1 px-1.5 py-0.5 rounded-full text-xs ${
                        selectedCategory === category.id 
                          ? 'bg-white/20 text-white' 
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {category.count}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Ordenação Mobile */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-sm font-medium text-gray-700">Ordenar por:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--cleantech-primary)] focus:border-transparent"
                  >
                    <option value="relevancia">Relevância</option>
                    <option value="preco-menor">Menor preço</option>
                    <option value="preco-maior">Maior preço</option>
                    <option value="avaliacao">Melhor avaliado</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

          </div>

          {/* Resultado da busca + Filtros Ativos */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            
            {/* Contador de Resultados */}
            <div className="text-sm text-gray-600">
              <span className="font-medium">{sortedProducts.length}</span> produto{sortedProducts.length !== 1 ? 's' : ''} encontrado{sortedProducts.length !== 1 ? 's' : ''}
              {searchTerm && (
                <span className="ml-1">
                  para <span className="font-medium text-[var(--cleantech-primary)]">"{searchTerm}"</span>
                </span>
              )}
            </div>

            {/* Filtros Ativos */}
            {(selectedCategory !== 'todos' || searchTerm) && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Filtros ativos:</span>
                <div className="flex gap-1.5">
                  {selectedCategory !== 'todos' && (
                    <Badge 
                      variant="secondary" 
                      className="bg-[var(--cleantech-primary)]/10 text-[var(--cleantech-primary)] hover:bg-[var(--cleantech-primary)]/20 cursor-pointer text-xs px-2 py-1"
                      onClick={() => setSelectedCategory('todos')}
                    >
                      {categories.find(c => c.id === selectedCategory)?.name} ✕
                    </Badge>
                  )}
                  {searchTerm && (
                    <Badge 
                      variant="secondary" 
                      className="bg-orange-100 text-orange-700 hover:bg-orange-200 cursor-pointer text-xs px-2 py-1"
                      onClick={() => setSearchTerm('')}
                    >
                      "{searchTerm}" ✕
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Grid de Produtos */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute z-10 top-4 left-4">
                    <Badge className={`text-xs px-2 py-1 ${getBadgeVariant(product.badge)}`}>
                      {product.badge}
                    </Badge>
                  </div>
                )}

                {/* Imagem do Produto */}
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Informações do Produto */}
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex items-center">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Preço */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-semibold text-[var(--cleantech-primary)]">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                    )}
                  </div>

                  {/* Botão Adicionar ao Carrinho */}
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-[var(--cleantech-secondary)] hover:bg-[var(--cleantech-primary)] text-white transition-colors duration-200"
                    size="sm"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Paginação Placeholder */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Anterior
              </Button>
              <Button variant="default" size="sm" className="bg-[var(--cleantech-primary)]">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Próximo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}