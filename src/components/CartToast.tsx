import { useState, useEffect } from "react";
import { Check, ShoppingBag, X } from "lucide-react";
import { Button } from "./ui/button";

interface CartToastProps {
  isVisible: boolean;
  onClose: () => void;
  productName?: string;
}

export function CartToast({ isVisible, onClose, productName }: CartToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000); // Auto hide após 4 segundos

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-24 right-4 z-50 animate-in slide-in-from-right duration-300">
      <div className="bg-white border border-[var(--cleantech-neutral-200)] rounded-lg shadow-lg p-4 max-w-sm">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Check className="w-5 h-5 text-green-600" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-[var(--cleantech-neutral-900)] mb-1">
              Produto adicionado ao carrinho!
            </div>
            {productName && (
              <div className="text-xs text-[var(--cleantech-neutral-600)] mb-3 line-clamp-2">
                {productName}
              </div>
            )}
            
            <div className="flex space-x-2">
              <Button
                size="sm"
                onClick={() => {
                  if ((window as any).openCart) {
                    (window as any).openCart();
                  }
                  onClose();
                }}
                className="text-xs bg-[var(--cleantech-primary)] hover:bg-[var(--cleantech-blue-dark)] text-white px-3 py-1 h-auto"
              >
                <ShoppingBag className="w-3 h-3 mr-1" />
                Ver Carrinho
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-xs text-[var(--cleantech-neutral-600)] hover:text-[var(--cleantech-neutral-900)] px-2 py-1 h-auto"
              >
                Continuar
              </Button>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-1 h-auto text-[var(--cleantech-neutral-400)] hover:text-[var(--cleantech-neutral-600)]"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}