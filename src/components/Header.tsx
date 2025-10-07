import { useState, useEffect } from "react";
import { Search, ShoppingBag, User, Menu } from "lucide-react";
import { Button } from "./ui/button";
import cleanTechLogo from 'figma:asset/0295f7098a8015e049a144b22c39ab5908461e3a.png';


export function Header() {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    // Configurar função para atualizar contador do carrinho
    (window as any).updateCartCount = () => {
      if ((window as any).getCartItemsCount) {
        setCartItemsCount((window as any).getCartItemsCount());
      }
    };

    // Atualizar contador inicial
    const updateCount = () => {
      if ((window as any).getCartItemsCount) {
        setCartItemsCount((window as any).getCartItemsCount());
      }
    };

    // Verificar contador periodicamente (fallback)
    const interval = setInterval(updateCount, 1000);
    
    return () => {
      clearInterval(interval);
      delete (window as any).updateCartCount;
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between py-3 sm:py-4">
          
          {/* Logo - Esquerda */}
          <div className="flex items-center">
            <button 
              onClick={() => (window as any).navigateToHome && (window as any).navigateToHome()}
              className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={cleanTechLogo} 
                alt="CleanTech" 
                className="w-auto h-22 sm:h-20 md:h-22 drop-shadow-lg"
              />
            </button>
          </div>

          {/* Navigation - Centro */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a 
              href="#" 
              onClick={(e) => {e.preventDefault(); (window as any).navigateToHome && (window as any).navigateToHome();}}
              className="text-xs font-medium  uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105 text-[var(--cleantech-neutral-900)] hover:text-[var(--cleantech-primary)] font-bold"
            >
              INÍCIO
            </a>
            
            <a 
              href="#" 
              onClick={(e) => {e.preventDefault(); (window as any).navigateToOffers && (window as any).navigateToOffers();}}
              className="text-xs font-medium  uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105 relative text-red-600 hover:text-red-700 font-bold"
            >
              🔥 OFERTAS
            
            </a>

            <a 
              href="#" 
              onClick={(e) => {e.preventDefault(); (window as any).navigateToAbout && (window as any).navigateToAbout();}}
              className="text-xs font-medium  uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105 text-[var(--cleantech-neutral-700)] hover:text-[var(--cleantech-primary)] font-bold"
            >
              QUEM SOMOS
            </a>
            
            <a 
              href="#" 
              onClick={(e) => {e.preventDefault(); (window as any).navigateToSupport && (window as any).navigateToSupport();}}
              className="text-xs font-medium  uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105 text-[var(--cleantech-neutral-700)] hover:text-[var(--cleantech-primary)] font-bold"
            >
              CENTRAL DE AJUDA
            </a>
          </nav>

          {/* Actions - Direita */}
          <div className="flex items-center space-x-1">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden md:flex p-2 hover:bg-gray-100 transition-colors duration-300"
            >
              <Search className="w-4 h-4 text-[var(--cleantech-neutral-600)]" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => (window as any).openProfileDrawer && (window as any).openProfileDrawer()}
              className="hidden md:flex p-2 hover:bg-gray-100 transition-colors duration-300"
            >
              <User className="w-4 h-4 text-[var(--cleantech-neutral-600)]" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => (window as any).openCart && (window as any).openCart()}
              className="p-2.5 sm:p-2 hover:bg-gray-100 transition-colors duration-300 relative"
            >
              <ShoppingBag className="w-5 h-5 sm:w-4 sm:h-4 text-[var(--cleantech-neutral-600)]" />
              {/* Badge indicando itens no carrinho */}
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[var(--cleantech-cyan-vibrant)] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px] animate-pulse">
                  {cartItemsCount > 99 ? '99+' : cartItemsCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-2.5 sm:p-2 hover:bg-gray-100 transition-colors duration-300"
            >
              <Menu className="w-5 h-5 sm:w-4 sm:h-4 text-[var(--cleantech-neutral-600)]" />
            </Button>
            
            {/* Mobile Profile Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => (window as any).openProfileDrawer && (window as any).openProfileDrawer()}
              className="md:hidden p-2.5 sm:p-2 hover:bg-gray-100 transition-colors duration-300"
            >
              <User className="w-5 h-5 sm:w-4 sm:h-4 text-[var(--cleantech-neutral-600)]" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40">
          <nav className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
            <div className="space-y-3 sm:space-y-4">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault(); 
                  setShowMobileMenu(false);
                  (window as any).navigateToHome && (window as any).navigateToHome();
                }}
                className="block text-base sm:text-sm font-light tracking-wide uppercase text-[var(--cleantech-neutral-700)] hover:text-[var(--cleantech-primary)] transition-colors py-1"
              >
                INÍCIO
              </a>
              
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault(); 
                  setShowMobileMenu(false);
                  (window as any).navigateToOffers && (window as any).navigateToOffers();
                }}
                className="block text-base sm:text-sm font-light tracking-wide uppercase text-red-600 hover:text-red-700 transition-colors py-1"
              >
                🔥 OFERTAS
              </a>
              
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault(); 
                  setShowMobileMenu(false);
                  (window as any).navigateToAbout && (window as any).navigateToAbout();
                }}
                className="block text-base sm:text-sm font-light tracking-wide uppercase text-[var(--cleantech-neutral-700)] hover:text-[var(--cleantech-primary)] transition-colors py-1"
              >
                QUEM SOMOS
              </a>
              
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault(); 
                  setShowMobileMenu(false); 
                  (window as any).navigateToSupport && (window as any).navigateToSupport();
                }}
                className="block text-base sm:text-sm font-light tracking-wide uppercase text-[var(--cleantech-neutral-700)] hover:text-[var(--cleantech-primary)] transition-colors py-1"
              >
                CENTRAL DE AJUDA
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}