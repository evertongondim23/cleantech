import { useState, useEffect, useMemo } from "react";
import { 
  Search, 
  Star, 
  ShoppingCart, 
  Filter, 
  Grid3X3, 
  List, 
  ChevronDown, 
  Heart,
  GitCompare,
  X,
  Eye,
  SlidersHorizontal,
  ArrowUpDown
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { Slider } from "./ui/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Separator } from "./ui/separator";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: 'BESTSELLER' | 'NOVO' | 'SALE' | 'LIMITADO';
  category: string;
  brand: string;
  discount?: number;
  freeShipping: boolean;
  description: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Mop Microfibra Premium Pro",
    price: 89.90,
    originalPrice: 129.90,
    image: "https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtb3AlMjBjbGVhbmluZyUyMGZsb29yfGVufDF8fHx8MTc1OTAyMzUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    reviews: 324,
    badge: 'BESTSELLER',
    category: 'mops',
    brand: 'CleanTech',
    discount: 31,
    freeShipping: true,
    description: "Mop profissional com microfibra premium de alta absorção",
    features: ["Microfibra premium", "360° rotação", "Cabo telescópico", "Extra absorção"]
  },
  {
    id: 2,
    name: "Spray Multiuso Concentrado",
    price: 24.90,
    image: "https://images.unsplash.com/photo-1707143598173-944230c2de24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJheSUyMGJvdHRsZSUyMGNsZWFuaW5nfGVufDF8fHx8MTc1OTAyMzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    reviews: 156,
    badge: 'NOVO',
    category: 'produtos',
    brand: 'CleanTech',
    freeShipping: false,
    description: "Fórmula concentrada para limpeza geral de superfícies",
    features: ["Fórmula concentrada", "Biodegradável", "Fragrância suave", "500ml"]
  },
  {
    id: 3,
    name: "Kit Panos Microfibra (8 unidades)",
    price: 39.90,
    originalPrice: 59.90,
    image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb2ZpYmVyJTIwY2xvdGglMjBjbGVhbmluZyUyMHN1cHBsaWVzfGVufDF8fHx8MTc1OTAyMzUzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    reviews: 498,
    badge: 'SALE',
    category: 'panos',
    brand: 'CleanTech',
    discount: 33,
    freeShipping: true,
    description: "Kit completo com 8 panos de microfibra em cores sortidas",
    features: ["8 panos inclusos", "Cores sortidas", "Lavável", "Anti-risco"]
  },
  {
    id: 4,
    name: "Vassoura Cerdas Macias Premium",
    price: 34.90,
    image: "https://images.unsplash.com/photo-1568584952981-9ab3132c80dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9vbSUyMGNsZWFuaW5nJTIwdG9vbHN8ZW58MXx8fHwxNzU5MDIzNTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6,
    reviews: 127,
    category: 'vassouras',
    brand: 'EcoClean',
    freeShipping: false,
    description: "Vassoura com cerdas macias ideais para pisos delicados",
    features: ["Cerdas macias", "Cabo ergonômico", "120cm altura", "Durável"]
  },
  {
    id: 5,
    name: "Esponjas Dupla Face (12 unidades)",
    price: 18.90,
    image: "https://images.unsplash.com/photo-1722356541555-eeabc38f80a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9uZ2UlMjBjbGVhbmluZyUyMGtpdGNoZW58ZW58MXx8fHwxNzU5MDIzNTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.5,
    reviews: 89,
    badge: 'LIMITADO',
    category: 'esponjas',
    brand: 'SuperClean',
    freeShipping: true,
    description: "Pack com 12 esponjas dupla face para limpeza pesada",
    features: ["12 unidades", "Dupla face", "Antibacteriano", "Resistente"]
  },
  {
    id: 6,
    name: "Luvas Nitrílicas Profissionais",
    price: 16.90,
    image: "https://images.unsplash.com/photo-1620563671147-979557991e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWJiZXIlMjBnbG92ZXMlMjBjbGVhbmluZ3xlbnwxfHx8fDE3NTkwMjM1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    reviews: 203,
    category: 'luvas',
    brand: 'ProtectClean',
    freeShipping: false,
    description: "Luvas nitrílicas resistentes para proteção total",
    features: ["Nitrílico", "Resistente", "Antialérgico", "Tamanho M"]
  },
  {
    id: 7,
    name: "Balde com Espremedor Integrado",
    price: 59.90,
    image: "https://images.unsplash.com/photo-1652572036885-b5e9205dd847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWNrZXQlMjBjbGVhbmluZyUyMHN1cHBsaWVzfGVufDF8fHx8MTc1OTAyMzU0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    reviews: 167,
    category: 'baldes',
    brand: 'CleanTech',
    freeShipping: true,
    description: "Balde com sistema de espremedor integrado para facilitar a limpeza",
    features: ["Espremedor integrado", "15L capacidade", "Alça ergonômica", "Rodízios"]
  },
  {
    id: 8,
    name: "Rodo Profissional 60cm",
    price: 28.90,
    image: "https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vciUyMHNxdWVlZ2VlJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzU5MDIzNTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6,
    reviews: 94,
    category: 'rodos',
    brand: 'CleanTech',
    freeShipping: false,
    description: "Rodo profissional ideal para secagem rápida de pisos",
    features: ["60cm largura", "Borracha premium", "Cabo telescópico", "Profissional"]
  }
];

const categories = [
  { id: 'todos', name: 'Todos os Produtos', count: products.length },
  { id: 'mops', name: 'Mops', count: products.filter(p => p.category === 'mops').length },
  { id: 'produtos', name: 'Produtos Químicos', count: products.filter(p => p.category === 'produtos').length },
  { id: 'panos', name: 'Panos e Toalhas', count: products.filter(p => p.category === 'panos').length },
  { id: 'vassouras', name: 'Vassouras', count: products.filter(p => p.category === 'vassouras').length },
  { id: 'esponjas', name: 'Esponjas', count: products.filter(p => p.category === 'esponjas').length },
  { id: 'luvas', name: 'Luvas', count: products.filter(p => p.category === 'luvas').length },
  { id: 'baldes', name: 'Baldes', count: products.filter(p => p.category === 'baldes').length },
  { id: 'rodos', name: 'Rodos', count: products.filter(p => p.category === 'rodos').length }
];

const brands = ['CleanTech', 'EcoClean', 'SuperClean', 'ProtectClean'];

export function CategoryPagePro() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("relevancia");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [compareList, setCompareList] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const productsPerPage = 8;

  // Reset current page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedBrands, priceRange, minRating, sortBy]);

  const filteredProducts = useMemo(() => {
    if (!products || products.length === 0) return [];
    
    return products.filter(product => {
      const matchesSearch = product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesRating = product.rating >= minRating;
      
      return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesRating;
    });
  }, [searchTerm, selectedCategory, selectedBrands, priceRange, minRating]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case 'preco-menor':
          return a.price - b.price;
        case 'preco-maior':
          return b.price - a.price;
        case 'avaliacao':
          return b.rating - a.rating;
        case 'desconto':
          return (b.discount || 0) - (a.discount || 0);
        case 'alfabetico':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }, [filteredProducts, sortBy]);

  const paginatedProducts = useMemo(() => {
    return sortedProducts.slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage
    );
  }, [sortedProducts, currentPage, productsPerPage]);

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const handleAddToCart = (product: Product) => {
    if ((window as any).showCartToast) {
      (window as any).showCartToast(product.name);
    }
  };

  const handleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleCompare = (productId: number) => {
    setCompareList(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else if (prev.length < 3) {
        return [...prev, productId];
      }
      return prev;
    });
  };

  const clearFilters = () => {
    setSelectedCategory("todos");
    setSelectedBrands([]);
    setPriceRange([0, 200]);
    setMinRating(0);
    setSearchTerm("");
  };

  const getAppliedFiltersCount = () => {
    let count = 0;
    if (selectedCategory !== 'todos') count++;
    if (selectedBrands.length > 0) count += selectedBrands.length;
    if (priceRange[0] > 0 || priceRange[1] < 200) count++;
    if (minRating > 0) count++;
    return count;
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
      case 'LIMITADO':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label className="text-sm font-medium text-gray-900 mb-2 block">Buscar produtos</label>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Digite aqui..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Categories */}
      <div>
        <label className="text-sm font-medium text-gray-900 mb-3 block">Categorias</label>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={selectedCategory === category.id}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-[var(--cleantech-primary)] focus:ring-[var(--cleantech-primary)]"
              />
              <span className="text-sm text-gray-700">{category.name}</span>
              <span className="text-xs text-gray-500">({category.count})</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Brands */}
      <div>
        <label className="text-sm font-medium text-gray-900 mb-3 block">Marcas</label>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center space-x-2 cursor-pointer">
              <Checkbox
                checked={selectedBrands.includes(brand)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedBrands([...selectedBrands, brand]);
                  } else {
                    setSelectedBrands(selectedBrands.filter(b => b !== brand));
                  }
                }}
              />
              <span className="text-sm text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div>
        <label className="text-sm font-medium text-gray-900 mb-3 block">
          Preço: R$ {priceRange[0]} - R$ {priceRange[1]}
        </label>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={200}
          step={5}
          className="w-full"
        />
      </div>

      <Separator />

      {/* Rating */}
      <div>
        <label className="text-sm font-medium text-gray-900 mb-3 block">Avaliação mínima</label>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={minRating === rating}
                onChange={() => setMinRating(rating)}
                className="text-[var(--cleantech-primary)] focus:ring-[var(--cleantech-primary)]"
              />
              <div className="flex items-center">
                {renderStars(rating)}
                <span className="ml-1 text-sm text-gray-600">& acima</span>
              </div>
            </label>
          ))}
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="rating"
              value={0}
              checked={minRating === 0}
              onChange={() => setMinRating(0)}
              className="text-[var(--cleantech-primary)] focus:ring-[var(--cleantech-primary)]"
            />
            <span className="text-sm text-gray-600">Todas as avaliações</span>
          </label>
        </div>
      </div>

      {/* Clear Filters */}
      <Button
        variant="outline"
        onClick={clearFilters}
        className="w-full"
        disabled={getAppliedFiltersCount() === 0}
      >
        Limpar Filtros ({getAppliedFiltersCount()})
      </Button>
    </div>
  );

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group relative">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 space-y-1">
        {product.badge && (
          <Badge className={`text-xs px-2 py-1 ${getBadgeVariant(product.badge)}`}>
            {product.badge}
          </Badge>
        )}
        {product.freeShipping && (
          <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
            FRETE GRÁTIS
          </Badge>
        )}
      </div>

      {/* Actions */}
      <div className="absolute top-3 right-3 z-10 flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          size="sm"
          variant="secondary"
          className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
          onClick={() => handleFavorite(product.id)}
        >
          <Heart className={`h-4 w-4 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
          onClick={() => setSelectedProduct(product)}
        >
          <Eye className="h-4 w-4 text-gray-600" />
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
          onClick={() => handleCompare(product.id)}
          disabled={compareList.length >= 3 && !compareList.includes(product.id)}
        >
          <GitCompare className={`h-4 w-4 ${compareList.includes(product.id) ? 'text-[var(--cleantech-primary)]' : 'text-gray-600'}`} />
        </Button>
      </div>

      {/* Image */}
      <div className="aspect-square overflow-hidden bg-gray-50">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide">{product.brand}</span>
          <h3 className="font-medium text-gray-900 line-clamp-2 mt-1">
            {product.name}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {renderStars(product.rating)}
          </div>
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-[var(--cleantech-primary)]">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>
          {product.discount && (
            <span className="text-xs text-green-600 font-medium">
              {product.discount}% OFF
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <Button
          onClick={() => handleAddToCart(product)}
          className="w-full bg-[var(--cleantech-secondary)] hover:bg-[var(--cleantech-primary)] text-white"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Adicionar
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
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
              <li className="text-[var(--cleantech-primary)] font-medium">Produtos de Limpeza</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-80 bg-white rounded-lg p-6 h-fit sticky top-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold text-gray-900">Filtros</h2>
              {getAppliedFiltersCount() > 0 && (
                <Badge variant="secondary">{getAppliedFiltersCount()}</Badge>
              )}
            </div>
            <FilterSidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Header */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                    Produtos de Limpeza
                  </h1>
                  <p className="text-gray-600">
                    {sortedProducts.length} produto{sortedProducts.length !== 1 ? 's' : ''} encontrado{sortedProducts.length !== 1 ? 's' : ''}
                    {searchTerm && ` para "${searchTerm}"`}
                  </p>
                </div>

                {/* Mobile Filters Button */}
                <Sheet open={showMobileFilters} onOpenChange={setShowMobileFilters}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Filtros
                      {getAppliedFiltersCount() > 0 && (
                        <Badge variant="secondary" className="ml-2">
                          {getAppliedFiltersCount()}
                        </Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <SheetHeader>
                      <SheetTitle>Filtros</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterSidebar />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <ArrowUpDown className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevancia">Relevância</SelectItem>
                      <SelectItem value="preco-menor">Menor preço</SelectItem>
                      <SelectItem value="preco-maior">Maior preço</SelectItem>
                      <SelectItem value="avaliacao">Melhor avaliado</SelectItem>
                      <SelectItem value="desconto">Maior desconto</SelectItem>
                      <SelectItem value="alfabetico">A-Z</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* View Mode */}
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className={viewMode === 'grid' ? 'bg-[var(--cleantech-primary)]' : ''}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={viewMode === 'list' ? 'bg-[var(--cleantech-primary)]' : ''}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Applied Filters */}
              {(selectedCategory !== 'todos' || selectedBrands.length > 0 || searchTerm) && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedCategory !== 'todos' && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {categories.find(c => c.id === selectedCategory)?.name}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCategory('todos')} />
                    </Badge>
                  )}
                  {selectedBrands.map(brand => (
                    <Badge key={brand} variant="secondary" className="flex items-center gap-1">
                      {brand}
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => setSelectedBrands(selectedBrands.filter(b => b !== brand))} 
                      />
                    </Badge>
                  ))}
                  {searchTerm && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      "{searchTerm}"
                      <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchTerm('')} />
                    </Badge>
                  )}
                </div>
              )}
            </div>

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
              <>
                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4' 
                    : 'grid-cols-1'
                }`}>
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-12">
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                      >
                        Anterior
                      </Button>
                      
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        const page = i + 1;
                        if (totalPages <= 5) {
                          return (
                            <Button
                              key={page}
                              variant={currentPage === page ? "default" : "outline"}
                              size="sm"
                              onClick={() => setCurrentPage(page)}
                              className={currentPage === page ? 'bg-[var(--cleantech-primary)]' : ''}
                            >
                              {page}
                            </Button>
                          );
                        }
                        return null;
                      })}
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                      >
                        Próximo
                      </Button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Empty State */
              <div className="bg-white rounded-lg p-12 text-center">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Nenhum produto encontrado
                </h3>
                <p className="text-gray-600 mb-6">
                  Tente ajustar os filtros ou buscar por outros termos
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Limpar todos os filtros
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Quick View Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProduct.name}</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="aspect-square">
                  <ImageWithFallback
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <div className="mb-4">
                    <Badge className={getBadgeVariant(selectedProduct.badge || '')} className="mb-2">
                      {selectedProduct.brand}
                    </Badge>
                    <p className="text-gray-600">{selectedProduct.description}</p>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(selectedProduct.rating)}
                    <span className="text-sm text-gray-500 ml-1">
                      {selectedProduct.rating} ({selectedProduct.reviews} avaliações)
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-semibold text-[var(--cleantech-primary)]">
                        R$ {selectedProduct.price.toFixed(2).replace('.', ',')}
                      </span>
                      {selectedProduct.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          R$ {selectedProduct.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                      )}
                    </div>
                    {selectedProduct.discount && (
                      <span className="text-sm text-green-600 font-medium">
                        Economize {selectedProduct.discount}%
                      </span>
                    )}
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Características:</h4>
                    <ul className="space-y-1">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-[var(--cleantech-primary)] rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => handleAddToCart(selectedProduct)}
                      className="flex-1 bg-[var(--cleantech-primary)] hover:bg-[var(--cleantech-blue-dark)]"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Adicionar ao Carrinho
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleFavorite(selectedProduct.id)}
                    >
                      <Heart className={`h-4 w-4 ${favorites.includes(selectedProduct.id) ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Compare Bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">
                Comparar ({compareList.length}/3)
              </span>
              <div className="flex gap-2">
                {compareList.map(id => {
                  const product = products.find(p => p.id === id);
                  return product ? (
                    <div key={id} className="flex items-center gap-2 bg-gray-100 rounded px-3 py-1">
                      <span className="text-xs">{product.name.substring(0, 20)}...</span>
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => handleCompare(id)}
                      />
                    </div>
                  ) : null;
                })}
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setCompareList([])}
              >
                Limpar
              </Button>
              <Button 
                size="sm"
                className="bg-[var(--cleantech-primary)]"
                disabled={compareList.length < 2}
              >
                Comparar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}