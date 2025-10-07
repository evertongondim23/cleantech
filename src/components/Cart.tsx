import { useState, useEffect } from "react";
import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  originalPrice?: number;
}

export function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Configurar funções globais do carrinho
  useEffect(() => {
    (window as any).openCart = () => {
      setIsOpen(true);
      setIsAnimating(true);
    };

    (window as any).closeCart = () => {
      setIsAnimating(false);
      setTimeout(() => setIsOpen(false), 300);
    };

    (window as any).addToCart = (product: Omit<CartItem, 'quantity'>) => {
      setItems(prevItems => {
        const existingItem = prevItems.find(item => item.id === product.id);
        if (existingItem) {
          return prevItems.map(item =>
            item.id === product.id 
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prevItems, { ...product, quantity: 1 }];
      });
      
      // Mostrar notificação toast
      if ((window as any).showCartToast) {
        (window as any).showCartToast(product.name);
      }
    };

    (window as any).getCartItemsCount = () => {
      return items.reduce((total, item) => total + item.quantity, 0);
    };

    return () => {
      delete (window as any).openCart;
      delete (window as any).closeCart;
      delete (window as any).addToCart;
      delete (window as any).getCartItemsCount;
    };
  }, [items]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateShipping = () => {
    const subtotal = calculateSubtotal();
    return subtotal >= 200 ? 0 : 15.90; // Frete grátis acima de R$ 200
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const handleCheckout = () => {
    // Simular processo de checkout
    alert('Redirecionando para o checkout...');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => (window as any).closeCart()}
      />
      
      {/* Cart Sidebar */}
      <div 
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isAnimating ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--cleantech-neutral-200)]">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-6 h-6 text-[var(--cleantech-primary)]" />
            <h2 className="text-xl font-medium text-[var(--cleantech-neutral-900)]">
              Carrinho
            </h2>
            {items.length > 0 && (
              <span className="bg-[var(--cleantech-cyan-light)] text-white text-sm px-2 py-1 rounded-full">
                {items.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => (window as any).closeCart()}
            className="p-2 hover:bg-[var(--cleantech-neutral-100)] rounded-full"
          >
            <X className="w-5 h-5 text-[var(--cleantech-neutral-600)]" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-[calc(100vh-80px)]">
          {items.length === 0 ? (
            /* Empty State */
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-24 h-24 bg-[var(--cleantech-neutral-100)] rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="w-12 h-12 text-[var(--cleantech-neutral-400)]" />
              </div>
              <h3 className="text-lg font-medium text-[var(--cleantech-neutral-900)] mb-2">
                Seu carrinho está vazio
              </h3>
              <p className="text-[var(--cleantech-neutral-600)] mb-6 max-w-sm">
                Adicione produtos incríveis da CleanTech e aproveite nossa tecnologia de limpeza avançada.
              </p>
              <Button
                onClick={() => (window as any).closeCart()}
                className="bg-[var(--cleantech-primary)] hover:bg-[var(--cleantech-blue-dark)] text-white px-6 py-2 rounded-lg"
              >
                Continuar Comprando
              </Button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-start space-x-4 p-4 bg-[var(--cleantech-neutral-50)] rounded-lg">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg border border-[var(--cleantech-neutral-200)]"
                        />
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-[var(--cleantech-neutral-900)] mb-2 line-clamp-2">
                          {item.name}
                        </h4>
                        
                        {/* Price */}
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="text-lg font-semibold text-[var(--cleantech-primary)]">
                            {formatPrice(item.price)}
                          </span>
                          {item.originalPrice && item.originalPrice > item.price && (
                            <span className="text-sm text-[var(--cleantech-neutral-500)] line-through">
                              {formatPrice(item.originalPrice)}
                            </span>
                          )}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-[var(--cleantech-neutral-300)] rounded-lg">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 h-8 w-8 hover:bg-[var(--cleantech-neutral-100)]"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 h-8 w-8 hover:bg-[var(--cleantech-neutral-100)]"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary & Checkout */}
              <div className="border-t border-[var(--cleantech-neutral-200)] p-6 bg-white">
                {/* Order Summary */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--cleantech-neutral-600)]">
                      Subtotal ({items.reduce((total, item) => total + item.quantity, 0)} itens)
                    </span>
                    <span className="font-medium">{formatPrice(calculateSubtotal())}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--cleantech-neutral-600)]">Frete</span>
                    <span className={`font-medium ${calculateShipping() === 0 ? 'text-green-600' : ''}`}>
                      {calculateShipping() === 0 ? 'Grátis' : formatPrice(calculateShipping())}
                    </span>
                  </div>
                  
                  {calculateShipping() > 0 && calculateSubtotal() < 200 && (
                    <div className="text-xs text-[var(--cleantech-cyan-light)] bg-[var(--cleantech-neutral-50)] p-2 rounded">
                      Frete grátis a partir de {formatPrice(200)}! 
                      Faltam {formatPrice(200 - calculateSubtotal())}
                    </div>
                  )}
                  
                  <div className="border-t border-[var(--cleantech-neutral-200)] pt-3">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-[var(--cleantech-primary)]">
                        {formatPrice(calculateTotal())}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-[var(--cleantech-primary)] hover:bg-[var(--cleantech-blue-dark)] text-white py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Finalizar Compra</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="ghost"
                  onClick={() => (window as any).closeCart()}
                  className="w-full mt-3 text-[var(--cleantech-neutral-600)] hover:text-[var(--cleantech-primary)] py-2"
                >
                  Continuar Comprando
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}