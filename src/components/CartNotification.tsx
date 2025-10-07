import { useEffect, useState } from "react";
import { Check, ShoppingCart, X } from "lucide-react";
import { Button } from "./ui/button";

interface CartNotificationProps {
  isVisible: boolean;
  onClose: () => void;
  productName: string;
  quantity: number;
}

export function CartNotification({ isVisible, onClose, productName, quantity }: CartNotificationProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
    }
  }, [isVisible, onClose]);

  if (!isVisible && !isAnimating) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className="bg-white border border-[var(--cleantech-neutral-200)] rounded-lg shadow-lg p-4 max-w-sm">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Check className="w-5 h-5 text-green-600" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-[var(--cleantech-neutral-900)] mb-1">
              Produto adicionado!
            </h4>
            <p className="text-sm text-[var(--cleantech-neutral-600)] mb-3">
              {quantity}x {productName} foi adicionado ao seu carrinho.
            </p>
            
            <div className="flex space-x-2">
              <Button
                size="sm"
                className="bg-[var(--cleantech-primary)] hover:bg-[var(--cleantech-blue-navy)] text-white text-xs"
              >
                <ShoppingCart className="w-3 h-3 mr-1" />
                Ver Carrinho
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-xs"
                onClick={onClose}
              >
                Continuar
              </Button>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="text-[var(--cleantech-neutral-400)] hover:text-[var(--cleantech-neutral-600)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}