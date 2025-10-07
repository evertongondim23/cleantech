import { useState } from "react";
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  Star, 
  Plus, 
  Minus, 
  ShoppingCart, 
  Truck, 
  Shield, 
  RotateCcw,
  Check,
  ChevronRight,
  Zap,
  Award,
  MessageCircle,
  ZoomIn
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ImageZoom } from "./ImageZoom";
import { CartNotification } from "./CartNotification";
import { ShippingCalculator } from "./ShippingCalculator";
import removedorPelos from 'figma:asset/79c7a7efb690810a3c54d6f5a97eb07e52d6605e.png';

export function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("azul");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedTab, setSelectedTab] = useState("description");
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [showCartNotification, setShowCartNotification] = useState(false);

  const product = {
    id: 2,
    name: "REMOVEDOR DE PELOS PORTÁTIL CLEANTECH",
    shortName: "Removedor de Pelos Portátil",
    price: 159.90,
    originalPrice: 199.90,
    discount: 20,
    rating: 4.8,
    reviewCount: 247,
    inStock: true,
    sku: "CT-RP-001",
    brand: "CleanTech",
    category: "Limpeza Doméstica",
    images: [
      removedorPelos,
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwaGVsZCUyMHZhY3V1bXxlbnwxfHx8fDE3NTgwMzM4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1586735683116-6e86b5ae1682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMGRldmljZXxlbnwxfHx8fDE3NTgwMzM4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1520105072000-f44fc083e508?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMGRldmljZXxlbnwxfHx8fDE3NTgwMzM4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    colors: [
      { name: "azul", label: "Azul CleanTech", color: "#05588e" },
      { name: "branco", label: "Branco Premium", color: "#ffffff" },
      { name: "cinza", label: "Cinza Elegante", color: "#64748b" }
    ],
    features: [
      "Tecnologia de sucção avançada",
      "Bateria de longa duração (45min)",
      "Design ergonômico e portátil",
      "Filtro HEPA lavável",
      "Modo turbo para pelos de animais",
      "Carregamento rápido USB-C"
    ],
    specifications: {
      "Potência": "120W",
      "Autonomia": "45 minutos",
      "Tempo de carga": "2 horas",
      "Capacidade": "150ml",
      "Peso": "680g",
      "Garantia": "2 anos",
      "Voltagem": "Bivolt automático"
    }
  };

  const relatedProducts = [
    {
      id: 3,
      name: "ROLO REMOVEDOR REFIL",
      price: 45.90,
      image: "https://images.unsplash.com/photo-1625951086318-97d6a9e651c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHJvbGxlcnxlbnwxfHx8fDE3NTgwMzM4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.6
    },
    {
      id: 4,
      name: "TAPETE FELPUDO PREMIUM",
      price: 124.90,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXQlMjBjbGVhbmluZ3xlbnwxfHx8fDE3NTgwMzM4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7
    },
    {
      id: 5,
      name: "LIMPA VIDRO MAGNÉTICO",
      price: 189.90,
      image: "https://images.unsplash.com/photo-1607196138121-85e8b4e0d6bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kb3clMjBjbGVhbmluZ3xlbnwxfHx8fDE3NTgwMzM4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.9
    }
  ];

  const reviews = [
    {
      id: 1,
      author: "Maria Silva",
      rating: 5,
      date: "2024-01-15",
      comment: "Excelente produto! Remove pelos de gato com facilidade. A bateria dura bastante e é muito silencioso.",
      verified: true
    },
    {
      id: 2,
      author: "João Santos",
      rating: 4,
      date: "2024-01-10",
      comment: "Muito bom para limpeza rápida. O design é moderno e funciona bem em tecidos. Recomendo!",
      verified: true
    },
    {
      id: 3,
      author: "Ana Costa",
      rating: 5,
      date: "2024-01-05",
      comment: "Superou minhas expectativas. Uso no sofá e nas roupas. Indispensável para quem tem pets.",
      verified: true
    }
  ];

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      originalPrice: product.originalPrice
    };

    // Adicionar ao carrinho usando função global
    if ((window as any).addToCart) {
      for (let i = 0; i < quantity; i++) {
        (window as any).addToCart(cartItem);
      }
    }

    // Atualizar contador no header
    if ((window as any).updateCartCount) {
      (window as any).updateCartCount();
    }
    
    // Mostrar notificação toast
    if ((window as any).showCartToast) {
      (window as any).showCartToast(product.name);
    }
    
    // Mostrar notificação local (manter compatibilidade)
    setShowCartNotification(true);
    
    console.log("Produto adicionado ao carrinho:", {
      product: product.id,
      color: selectedColor,
      quantity
    });
  };

  const renderStars = (rating: number, size: "sm" | "md" = "md") => {
    return (
      <div className={`flex ${size === "sm" ? "gap-0.5" : "gap-1"}`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size === "sm" ? "w-3 h-3" : "w-4 h-4"} ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-[var(--cleantech-neutral-300)]"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-[var(--cleantech-neutral-50)] border-b border-[var(--cleantech-neutral-200)] pt-14">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-[var(--cleantech-neutral-600)]">
            <button 
              onClick={() => {
                if ((window as any).navigateToHome) {
                  (window as any).navigateToHome();
                } else {
                  window.history.back();
                }
              }}
              className="flex items-center hover:text-[var(--cleantech-primary)] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Voltar
            </button>
            <ChevronRight className="w-4 h-4" />
            <span>Limpeza</span>
            <ChevronRight className="w-4 h-4" />
            <span>Aspiradores</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[var(--cleantech-primary)]">{product.shortName}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div 
              className="relative bg-[var(--cleantech-neutral-50)] rounded-lg overflow-hidden group cursor-zoom-in"
              onClick={() => setIsZoomOpen(true)}
            >
              <ImageWithFallback
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-[var(--cleantech-primary)]" />
                </div>
              </div>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 space-y-2">
                <Badge className="bg-red-500 text-white">
                  -{product.discount}%
                </Badge>
                <Badge className="bg-green-500 text-white">
                  <Check className="w-3 h-3 mr-1" />
                  Em Estoque
                </Badge>
              </div>

              {/* Wishlist & Share */}
              <div className="absolute top-4 right-4 space-y-2">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isWishlisted
                      ? "bg-red-500 text-white"
                      : "bg-white/90 text-[var(--cleantech-neutral-600)] hover:bg-white"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/90 text-[var(--cleantech-neutral-600)] hover:bg-white flex items-center justify-center transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? "border-[var(--cleantech-primary)]"
                      : "border-[var(--cleantech-neutral-200)] hover:border-[var(--cleantech-neutral-300)]"
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="outline" className="text-[var(--cleantech-primary)]">
                  {product.brand}
                </Badge>
                <Badge variant="outline">
                  <Award className="w-3 h-3 mr-1" />
                  Premium
                </Badge>
              </div>
              
              <h1 className="text-2xl lg:text-3xl font-light tracking-[0.1em] text-[var(--cleantech-neutral-900)] mb-4">
                {product.name}
              </h1>
              
              {/* Indicador de navegação funcionando */}
              <div className="mb-4 p-2 bg-green-100 border border-green-300 rounded text-sm text-green-800">
                ✅ Navegação funcionando! Você chegou até aqui clicando em "Ver Mais"
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-3 mb-4">
                {renderStars(product.rating)}
                <span className="text-sm text-[var(--cleantech-neutral-600)]">
                  {product.rating} ({product.reviewCount} avaliações)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-medium text-[var(--cleantech-primary)]">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-lg text-[var(--cleantech-neutral-500)] line-through">
                  R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                </span>
                <Badge className="bg-green-100 text-green-800">
                  Economize R$ {(product.originalPrice - product.price).toFixed(2).replace('.', ',')}
                </Badge>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium tracking-[0.1em] text-[var(--cleantech-primary)] uppercase">
                Principais Características
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {product.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Zap className="w-4 h-4 text-[var(--cleantech-cyan-light)] flex-shrink-0" />
                    <span className="text-sm text-[var(--cleantech-neutral-700)]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium tracking-[0.1em] text-[var(--cleantech-primary)] uppercase">
                Cor: {product.colors.find(c => c.name === selectedColor)?.label}
              </h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-12 h-12 rounded-full border-2 transition-all ${
                      selectedColor === color.name
                        ? "border-[var(--cleantech-primary)] scale-110"
                        : "border-[var(--cleantech-neutral-300)] hover:border-[var(--cleantech-neutral-400)]"
                    }`}
                    style={{ backgroundColor: color.color }}
                    title={color.label}
                  >
                    {color.color === "#ffffff" && (
                      <div className="w-full h-full rounded-full border border-[var(--cleantech-neutral-200)]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div>
                  <label className="text-sm font-medium tracking-[0.1em] text-[var(--cleantech-primary)] uppercase block mb-2">
                    Quantidade
                  </label>
                  <div className="flex items-center border border-[var(--cleantech-neutral-300)] rounded-md">
                    <button
                      onClick={() => handleQuantityChange('decrease')}
                      className="p-2 hover:bg-[var(--cleantech-neutral-50)] transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 text-center min-w-[60px]">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange('increase')}
                      className="p-2 hover:bg-[var(--cleantech-neutral-50)] transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-[var(--cleantech-primary)] hover:bg-[var(--cleantech-blue-navy)] text-white py-4 text-lg tracking-[0.1em] uppercase transition-all duration-300 hover:scale-[1.02]"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Adicionar ao Carrinho
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full border-[var(--cleantech-primary)] text-[var(--cleantech-primary)] hover:bg-[var(--cleantech-primary)] hover:text-white py-4 text-lg tracking-[0.1em] uppercase"
                >
                  Comprar Agora
                </Button>
              </div>
            </div>

            {/* Shipping Calculator */}
            <div className="border border-[var(--cleantech-neutral-200)] rounded-lg p-4">
              <ShippingCalculator />
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-[var(--cleantech-neutral-50)] rounded-lg">
                <Truck className="w-6 h-6 text-[var(--cleantech-primary)]" />
                <div>
                  <div className="text-sm font-medium">Frete Grátis</div>
                  <div className="text-xs text-[var(--cleantech-neutral-600)]">Acima de R$ 150</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-[var(--cleantech-neutral-50)] rounded-lg">
                <Shield className="w-6 h-6 text-[var(--cleantech-primary)]" />
                <div>
                  <div className="text-sm font-medium">2 Anos</div>
                  <div className="text-xs text-[var(--cleantech-neutral-600)]">Garantia</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-[var(--cleantech-neutral-50)] rounded-lg">
                <RotateCcw className="w-6 h-6 text-[var(--cleantech-primary)]" />
                <div>
                  <div className="text-sm font-medium">30 Dias</div>
                  <div className="text-xs text-[var(--cleantech-neutral-600)]">Para troca</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Descrição</TabsTrigger>
              <TabsTrigger value="specifications">Especificações</TabsTrigger>
              <TabsTrigger value="reviews">Avaliações ({product.reviewCount})</TabsTrigger>
              <TabsTrigger value="shipping">Entrega</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-8">
              <div className="prose max-w-none">
                <h3>Removedor de Pelos Portátil CleanTech</h3>
                <p>
                  O Removedor de Pelos Portátil CleanTech representa o que há de mais avançado em tecnologia 
                  de limpeza doméstica. Desenvolvido especificamente para remover pelos de animais de estimação 
                  e fiapos de tecidos, este dispositivo combina potência, praticidade e design elegante.
                </p>
                
                <h4>Tecnologia Avançada</h4>
                <p>
                  Equipado com motor de alta eficiência e sistema de sucção otimizado, o removedor garante 
                  limpeza profunda em sofás, camas, roupas e qualquer superfície têxtil. O filtro HEPA 
                  lavável captura até as menores partículas, mantendo o ar limpo durante o uso.
                </p>

                <h4>Design Ergonômico</h4>
                <p>
                  Seu formato compacto e peso reduzido permitem uso prolongado sem fadiga. A empunhadura 
                  antiderrapante proporciona controle total, enquanto o sistema de carregamento USB-C 
                  oferece praticidade moderna.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium mb-4">Especificações Técnicas</h4>
                  <div className="space-y-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-[var(--cleantech-neutral-200)]">
                        <span className="text-[var(--cleantech-neutral-600)]">{key}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-4">Informações Adicionais</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-[var(--cleantech-neutral-200)]">
                      <span className="text-[var(--cleantech-neutral-600)]">SKU</span>
                      <span className="font-medium">{product.sku}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[var(--cleantech-neutral-200)]">
                      <span className="text-[var(--cleantech-neutral-600)]">Categoria</span>
                      <span className="font-medium">{product.category}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[var(--cleantech-neutral-200)]">
                      <span className="text-[var(--cleantech-neutral-600)]">Origem</span>
                      <span className="font-medium">Nacional</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                {/* Review Summary */}
                <div className="flex items-center space-x-8 p-6 bg-[var(--cleantech-neutral-50)] rounded-lg">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[var(--cleantech-primary)]">{product.rating}</div>
                    <div>{renderStars(product.rating)}</div>
                    <div className="text-sm text-[var(--cleantech-neutral-600)]">{product.reviewCount} avaliações</div>
                  </div>
                  
                  <div className="flex-1">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center space-x-3 mb-2">
                        <span className="text-sm w-8">{stars}★</span>
                        <div className="flex-1 bg-[var(--cleantech-neutral-200)] rounded-full h-2">
                          <div 
                            className="bg-[var(--cleantech-primary)] h-2 rounded-full"
                            style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : 10}%` }}
                          />
                        </div>
                        <span className="text-sm text-[var(--cleantech-neutral-600)] w-8">
                          {stars === 5 ? 173 : stars === 4 ? 49 : stars === 3 ? 15 : stars === 2 ? 7 : 3}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-[var(--cleantech-neutral-200)] pb-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="font-medium">{review.author}</span>
                            {review.verified && (
                              <Badge className="bg-green-100 text-green-800 text-xs">
                                <Check className="w-3 h-3 mr-1" />
                                Compra verificada
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            {renderStars(review.rating, "sm")}
                            <span className="text-sm text-[var(--cleantech-neutral-600)]">
                              {new Date(review.date).toLocaleDateString('pt-BR')}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-[var(--cleantech-neutral-700)]">{review.comment}</p>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Escrever Avaliação
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="shipping" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium mb-4">Opções de Entrega</h4>
                  <div className="space-y-4">
                    <div className="p-4 border border-[var(--cleantech-neutral-200)] rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Frete Grátis</span>
                        <span className="text-green-600">R$ 0,00</span>
                      </div>
                      <p className="text-sm text-[var(--cleantech-neutral-600)]">
                        5-7 dias úteis • Para compras acima de R$ 150,00
                      </p>
                    </div>
                    
                    <div className="p-4 border border-[var(--cleantech-neutral-200)] rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Entrega Expressa</span>
                        <span className="text-[var(--cleantech-primary)]">R$ 19,90</span>
                      </div>
                      <p className="text-sm text-[var(--cleantech-neutral-600)]">
                        1-2 dias úteis • Disponível para SP capital
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-4">Políticas</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-[var(--cleantech-primary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium">Garantia de 2 Anos</div>
                        <p className="text-sm text-[var(--cleantech-neutral-600)]">
                          Cobertura completa contra defeitos de fabricação
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <RotateCcw className="w-5 h-5 text-[var(--cleantech-primary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium">Troca em 30 Dias</div>
                        <p className="text-sm text-[var(--cleantech-neutral-600)]">
                          Devolução gratuita se não ficar satisfeito
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h3 className="text-2xl font-light tracking-[0.1em] text-[var(--cleantech-neutral-900)] mb-8 text-center">
            Produtos Relacionados
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="bg-white border border-[var(--cleantech-neutral-200)] hover:border-[var(--cleantech-cyan-light)] transition-all duration-300 hover:shadow-lg rounded-lg overflow-hidden">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-4 text-center">
                    <h4 className="text-sm font-normal tracking-[0.1em] text-[var(--cleantech-neutral-700)] uppercase mb-2">
                      {product.name}
                    </h4>
                    <div className="flex justify-center mb-2">
                      {renderStars(product.rating, "sm")}
                    </div>
                    <p className="text-lg text-[var(--cleantech-primary)] font-medium mb-3">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </p>
                    <Button
                      size="sm"
                      className="w-full bg-[var(--cleantech-primary)] hover:bg-[var(--cleantech-blue-navy)] text-white"
                    >
                      Ver Produto
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      <ImageZoom
        images={product.images}
        currentIndex={selectedImage}
        isOpen={isZoomOpen}
        onClose={() => setIsZoomOpen(false)}
        productName={product.name}
      />

      {/* Cart Notification */}
      <CartNotification
        isVisible={showCartNotification}
        onClose={() => setShowCartNotification(false)}
        productName={product.shortName}
        quantity={quantity}
      />
    </div>
  );
}