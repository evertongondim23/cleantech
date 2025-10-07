import { useState, useEffect } from "react";
import { 
  Clock, 
  Star, 
  ShoppingCart, 
  Filter, 
  Heart,
  GitCompare,
  X,
  Eye,
  Zap,
  Flame,
  TrendingDown,
  Package,
  Timer,
  ArrowUpDown,
  Percent,
  Gift,
  ShoppingBag
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Separator } from "./ui/separator";
import { Progress } from "./ui/progress";

interface OfferProduct {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  discount: number;
  category: string;
  brand: string;
  freeShipping: boolean;
  description: string;
  features: string[];
  saleType: 'flash' | 'liquidacao' | 'combo' | 'clearance';
  timeLeft?: number; // em horas
  stockLeft?: number;
  sold?: number;
  isHot?: boolean;
  isLimited?: boolean;
}

const saleProducts: OfferProduct[] = [
  {
    id: 1,
    name: "Kit Limpeza Profissional Completo",
    price: 149.90,
    originalPrice: 249.90,
    image: "https://images.unsplash.com/photo-1610678751888-31d8e64aefc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMGVxdWlwbWVudCUyMHNhbGV8ZW58MXx8fHwxNzU5MDIzOTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    reviews: 847,
    discount: 40,
    category: 'kits',
    brand: 'CleanTech',
    freeShipping: true,
    description: "Kit completo com tudo que você precisa para limpeza profissional",
    features: ["15 itens inclusos", "Mala organizadora", "Garantia 2 anos", "Manual técnico"],
    saleType: 'flash',
    timeLeft: 23,
    stockLeft: 7,
    sold: 143,
    isHot: true,
    isLimited: true
  },
  {
    id: 2,
    name: "Aspirador Vapor Steam Pro",
    price: 899.90,
    originalPrice: 1299.90,
    image: "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhbSUyMGNsZWFuZXIlMjB2YWN1dW18ZW58MXx8fHwxNzU5MDIzOTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    reviews: 234,
    discount: 31,
    category: 'aspiradores',
    brand: 'CleanTech',
    freeShipping: true,
    description: "Aspirador com função vapor para limpeza profunda",
    features: ["Vapor 100°C", "HEPA Filter", "5L capacidade", "Acessórios inclusos"],
    saleType: 'liquidacao',
    stockLeft: 12,
    sold: 89,
    isHot: true
  },
  {
    id: 3,
    name: "Combo Panos Microfibra Premium (50un)",
    price: 79.90,
    originalPrice: 129.90,
    image: "https://images.unsplash.com/photo-1692576855758-318a1fa8ff6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhjbGVhbmluZyUyMHN1cHBsaWVzJTIwZGlzY291bnQlMjBidW5kbGV8ZW58MXx8fHwxNzU5MDIzOTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    reviews: 592,
    discount: 38,
    category: 'panos',
    brand: 'CleanTech',
    freeShipping: true,
    description: "50 panos de microfibra premium em cores sortidas",
    features: ["50 unidades", "5 cores diferentes", "Ultra absorvente", "Lavável 500x"],
    saleType: 'combo',
    sold: 267,
    isHot: true
  },
  {
    id: 4,
    name: "Organizador Limpeza Mobile",
    price: 34.90,
    originalPrice: 59.90,
    image: "https://images.unsplash.com/photo-1604501997347-025aeb7d4479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMGNhZGR5JTIwb3JnYW5pemVyfGVufDF8fHx8MTc1OTAyMzk2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6,
    reviews: 178,
    discount: 42,
    category: 'organizadores',
    brand: 'CleanTech',
    freeShipping: false,
    description: "Caddy organizador portátil para produtos de limpeza",
    features: ["10 compartimentos", "Alça ergonômica", "Plástico resistente", "Design compacto"],
    saleType: 'clearance',
    stockLeft: 23,
    sold: 45
  },
  {
    id: 5,
    name: "Carrinho Limpeza Profissional",
    price: 299.90,
    originalPrice: 449.90,
    image: "https://images.unsplash.com/photo-1644368844525-047c3c5554d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZyUyMGNhcnR8ZW58MXx8fHwxNzU5MDIzOTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    reviews: 67,
    discount: 33,
    category: 'carrinhos',
    brand: 'CleanTech',
    freeShipping: true,
    description: "Carrinho profissional com múltiplos compartimentos",
    features: ["Rodas 360°", "3 prateleiras", "Suporte balde", "Estrutura metal"],
    saleType: 'liquidacao',
    stockLeft: 8,
    sold: 23,
    isLimited: true
  },
  {
    id: 6,
    name: "Rodo Vidros Profissional Set",
    price: 89.90,
    originalPrice: 134.90,
    image: "https://images.unsplash.com/photo-1696142856174-f96fd19952f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kb3clMjBzcXVlZWdlZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTkwMjM5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    reviews: 312,
    discount: 33,
    category: 'rodos',
    brand: 'CleanTech',
    freeShipping: true,
    description: "Set completo para limpeza profissional de vidros",
    features: ["Rodo 35cm", "Aplicador", "Cabo telescópico", "Borracha premium"],
    saleType: 'flash',
    timeLeft: 11,
    stockLeft: 15,
    sold: 78,
    isHot: true
  },
  {
    id: 7,
    name: "Kit Escovas Multi-uso (12un)",
    price: 39.90,
    originalPrice: 69.90,
    image: "https://images.unsplash.com/photo-1630325459372-36f3f86281cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMGJydXNoJTIwc2V0fGVufDF8fHx8MTc1OTAyMzk3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.5,
    reviews: 189,
    discount: 43,
    category: 'escovas',
    brand: 'EcoClean',
    freeShipping: false,
    description: "12 escovas especializadas para diferentes superfícies",
    features: ["12 modelos diferentes", "Cerdas especiais", "Cabo ergonômico", "Multiuso"],
    saleType: 'combo',
    sold: 156
  },
  {
    id: 8,
    name: "Detergente Concentrado 5L + Borrifador",
    price: 49.90,
    originalPrice: 79.90,
    image: "https://images.unsplash.com/photo-1707143598173-944230c2de24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJheSUyMGJvdHRsZSUyMGNsZWFuaW5nfGVufDF8fHx8MTc1OTAyMzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6,
    reviews: 423,
    discount: 38,
    category: 'produtos',
    brand: 'CleanTech',
    freeShipping: true,
    description: "Detergente concentrado com borrifador profissional",
    features: ["5L concentrado", "Borrifador incluído", "Rende 50L", "Biodegradável"],
    saleType: 'combo',
    sold: 234,
    isHot: true
  }
];

const saleCategories = [
  { id: 'flash', name: 'Flash Sale', icon: Zap, color: 'text-yellow-600 bg-yellow-100', count: saleProducts.filter(p => p.saleType === 'flash').length },
  { id: 'liquidacao', name: 'Liquidação', icon: Flame, color: 'text-red-600 bg-red-100', count: saleProducts.filter(p => p.saleType === 'liquidacao').length },
  { id: 'combo', name: 'Combos', icon: Package, color: 'text-blue-600 bg-blue-100', count: saleProducts.filter(p => p.saleType === 'combo').length },
  { id: 'clearance', name: 'Clearance', icon: TrendingDown, color: 'text-purple-600 bg-purple-100', count: saleProducts.filter(p => p.saleType === 'clearance').length }
];

export function OffersPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState("discount");
  const [selectedProduct, setSelectedProduct] = useState<OfferProduct | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [compareList, setCompareList] = useState<number[]>([]);
  const [flashSaleTime, setFlashSaleTime] = useState(86400); // 24 horas em segundos

  // Countdown timer para flash sale
  useEffect(() => {
    const interval = setInterval(() => {
      setFlashSaleTime(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const filteredProducts = saleProducts.filter(product => {
    if (selectedCategory === 'all') return true;
    return product.saleType === selectedCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'discount':
        return b.discount - a.discount;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
        return (b.sold || 0) - (a.sold || 0);
      default:
        return 0;
    }
  });

  const handleAddToCart = (product: OfferProduct) => {
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

  const getSaleTypeInfo = (saleType: string) => {
    switch (saleType) {
      case 'flash':
        return { label: 'FLASH SALE', color: 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white animate-pulse' };
      case 'liquidacao':
        return { label: 'LIQUIDAÇÃO', color: 'bg-gradient-to-r from-red-500 to-red-600 text-white' };
      case 'combo':
        return { label: 'COMBO', color: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' };
      case 'clearance':
        return { label: 'CLEARANCE', color: 'bg-gradient-to-r from-purple-500 to-purple-600 text-white' };
      default:
        return { label: 'OFERTA', color: 'bg-green-500 text-white' };
    }
  };

  const OfferCard = ({ product }: { product: OfferProduct }) => {
    const saleInfo = getSaleTypeInfo(product.saleType);
    const progressValue = product.stockLeft ? Math.max(0, (product.stockLeft / (product.stockLeft + (product.sold || 0))) * 100) : 0;
    
    return (
      <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-[var(--cleantech-primary)]">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-20 space-y-1">
          <Badge className={`text-xs px-2 py-1 font-bold ${saleInfo.color}`}>
            {saleInfo.label}
          </Badge>
          {product.isHot && (
            <Badge className="text-xs px-2 py-1 bg-gradient-to-r from-orange-400 to-red-500 text-white">
              🔥 HOT
            </Badge>
          )}
          {product.isLimited && (
            <Badge className="text-xs px-2 py-1 bg-gray-900 text-white">
              ⏰ LIMITADO
            </Badge>
          )}
        </div>

        {/* Discount Badge */}
        <div className="absolute top-3 right-3 z-20">
          <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
            -{product.discount}%
          </div>
        </div>

        {/* Actions */}
        <div className="absolute top-16 right-3 z-20 flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="sm"
            variant="secondary"
            className="h-8 w-8 p-0 bg-white/90 hover:bg-white shadow-md"
            onClick={() => handleFavorite(product.id)}
          >
            <Heart className={`h-4 w-4 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="h-8 w-8 p-0 bg-white/90 hover:bg-white shadow-md"
            onClick={() => setSelectedProduct(product)}
          >
            <Eye className="h-4 w-4 text-gray-600" />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="h-8 w-8 p-0 bg-white/90 hover:bg-white shadow-md"
            onClick={() => handleCompare(product.id)}
            disabled={compareList.length >= 3 && !compareList.includes(product.id)}
          >
            <GitCompare className={`h-4 w-4 ${compareList.includes(product.id) ? 'text-[var(--cleantech-primary)]' : 'text-gray-600'}`} />
          </Button>
        </div>

        <CardContent className="p-0">
          {/* Image */}
          <div className="aspect-square overflow-hidden bg-gray-50 relative">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Timer for flash sale */}
            {product.saleType === 'flash' && product.timeLeft && (
              <div className="absolute bottom-3 left-3 bg-black/80 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                <Timer className="h-3 w-3" />
                {product.timeLeft}h restantes
              </div>
            )}
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
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl font-bold text-[var(--cleantech-primary)]">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-600 font-medium">
                  Economize R$ {(product.originalPrice - product.price).toFixed(2).replace('.', ',')}
                </span>
                {product.freeShipping && (
                  <Badge variant="outline" className="text-xs text-green-700 border-green-200">
                    FRETE GRÁTIS
                  </Badge>
                )}
              </div>
            </div>

            {/* Stock Progress */}
            {product.stockLeft && product.sold && (
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                  <span>Vendidos: {product.sold}</span>
                  <span>Restam: {product.stockLeft}</span>
                </div>
                <Progress value={100 - progressValue} className="h-2" />
                <p className="text-xs text-orange-600 mt-1">
                  ⚡ {Math.round(100 - progressValue)}% vendido
                </p>
              </div>
            )}

            {/* Add to Cart */}
            <Button
              onClick={() => handleAddToCart(product)}
              className="w-full bg-gradient-to-r from-[var(--cleantech-primary)] to-[var(--cleantech-secondary)] hover:from-[var(--cleantech-blue-dark)] hover:to-[var(--cleantech-primary)] text-white font-medium"
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Comprar Agora
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

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
              <li className="text-[var(--cleantech-primary)] font-medium">Ofertas</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Flame className="h-8 w-8 animate-bounce" />
              <h1 className="text-4xl font-bold">Super Ofertas CleanTech</h1>
              <Flame className="h-8 w-8 animate-bounce" />
            </div>
            <p className="text-xl mb-6 opacity-90">
              Até 50% OFF em produtos selecionados • Frete grátis em compras acima de R$ 99
            </p>
            
            {/* Flash Sale Countdown */}
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span className="font-bold text-yellow-400">FLASH SALE TERMINA EM:</span>
              </div>
              <div className="text-3xl font-mono font-bold tracking-wider">
                {formatTime(flashSaleTime)}
              </div>
              <p className="text-sm opacity-75 mt-2">Não perca! Ofertas por tempo limitado</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        {/* Category Tabs */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex flex-wrap gap-4 mb-6">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className={selectedCategory === 'all' ? 'bg-[var(--cleantech-primary)]' : ''}
            >
              <Gift className="h-4 w-4 mr-2" />
              Todas as Ofertas
              <Badge variant="secondary" className="ml-2">
                {saleProducts.length}
              </Badge>
            </Button>
            
            {saleCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? 'bg-[var(--cleantech-primary)]' : ''}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {category.name}
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              );
            })}
          </div>

          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {sortedProducts.length} produto{sortedProducts.length !== 1 ? 's' : ''} em oferta
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <ArrowUpDown className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="discount">Maior desconto</SelectItem>
                  <SelectItem value="price-low">Menor preço</SelectItem>
                  <SelectItem value="price-high">Maior preço</SelectItem>
                  <SelectItem value="rating">Melhor avaliado</SelectItem>
                  <SelectItem value="popular">Mais vendido</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {sortedProducts.map((product) => (
            <OfferCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-[var(--cleantech-primary)] to-[var(--cleantech-secondary)] text-white">
          <CardContent className="p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Não encontrou o que procurava?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Cadastre-se na nossa newsletter e seja o primeiro a saber sobre novas ofertas e lançamentos
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-white"
                />
                <Button className="bg-white text-[var(--cleantech-primary)] hover:bg-gray-100 font-medium px-6">
                  Cadastrar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick View Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  {selectedProduct.name}
                  <Badge className={getSaleTypeInfo(selectedProduct.saleType).color}>
                    -{selectedProduct.discount}% OFF
                  </Badge>
                </DialogTitle>
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
                    <Badge className="mb-2">
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

                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-bold text-[var(--cleantech-primary)]">
                        R$ {selectedProduct.price.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-xl text-gray-500 line-through">
                        R$ {selectedProduct.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                      <div className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                        -{selectedProduct.discount}% OFF
                      </div>
                    </div>
                    <span className="text-lg text-green-600 font-medium">
                      Economize R$ {(selectedProduct.originalPrice - selectedProduct.price).toFixed(2).replace('.', ',')}
                    </span>
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
                      className="flex-1 bg-gradient-to-r from-[var(--cleantech-primary)] to-[var(--cleantech-secondary)] hover:from-[var(--cleantech-blue-dark)] hover:to-[var(--cleantech-primary)] text-white font-medium"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Comprar Agora
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleFavorite(selectedProduct.id)}
                    >
                      <Heart className={`h-4 w-4 ${favorites.includes(selectedProduct.id) ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>
                  </div>

                  {/* Urgency indicators */}
                  {(selectedProduct.stockLeft || selectedProduct.timeLeft) && (
                    <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                      {selectedProduct.timeLeft && (
                        <p className="text-sm text-orange-800 flex items-center gap-1">
                          <Timer className="h-4 w-4" />
                          Oferta termina em {selectedProduct.timeLeft} horas
                        </p>
                      )}
                      {selectedProduct.stockLeft && (
                        <p className="text-sm text-orange-800 flex items-center gap-1">
                          <Package className="h-4 w-4" />
                          Apenas {selectedProduct.stockLeft} unidades restantes
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Compare Bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">
                Comparar ({compareList.length}/3)
              </span>
              <div className="flex gap-2">
                {compareList.map(id => {
                  const product = saleProducts.find(p => p.id === id);
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