import { Mail, Phone, MapPin, Instagram, Facebook, ArrowUp, MessageCircle, Clock, Shield, CreditCard, Star } from "lucide-react";
import { useState } from "react";
import cleanTechLogo from 'figma:asset/0295f7098a8015e049a144b22c39ab5908461e3a.png';
import paymentMethods from 'figma:asset/5476f2445d008519285e62e02dec4e2f4e1075a6.png';
import sslLogo from 'figma:asset/93722b2845a3adb64bcd3c696a20bb8938223b4c.png';
import shopifyLogo from 'figma:asset/8d2366e3219913820506d2c01514a74b372832d2.png';

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    // Simular API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setEmail("");
    setIsSubscribing(false);
    alert("Inscrição realizada com sucesso!");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os produtos CleanTech.", "_blank");
  };

  return (
    <>
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
          aria-label="Fale conosco no WhatsApp"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
            Fale conosco
          </span>
        </button>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50">
        <button
          onClick={scrollToTop}
          className="bg-[var(--cleantech-brown)] hover:bg-[var(--cleantech-dark-gray)] text-white p-2.5 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      <footer 
        className="bg-[var(--cleantech-light-gray)] relative"
        style={{
          borderTop: '2px solid transparent',
          borderBottom: '2px solid transparent',
          backgroundImage: 'linear-gradient(#F8F8F8, #F8F8F8), linear-gradient(90deg, #0c588b, #0cbfde), linear-gradient(#F8F8F8, #F8F8F8), linear-gradient(90deg, #0c588b, #0cbfde)',
          backgroundSize: '100% calc(100% - 4px), 100% 2px, 100% calc(100% - 4px), 100% 2px',
          backgroundPosition: '0 2px, 0 0, 0 0, 0 100%',
          backgroundRepeat: 'no-repeat'
        }}
      >
      {/* Newsletter Section */}


      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <img 
                src={cleanTechLogo} 
                alt="CleanTech" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-sm text-[var(--cleantech-dark-gray)] leading-relaxed max-w-md">
              Tecnologia avançada para limpeza inteligente e sustentável. Transformando a forma como você cuida do seu lar.
            </p>
            
            {/* Avaliações e Certificações */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-[var(--cleantech-dark-gray)]">4.8/5 (2.847 avaliações)</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded">
                  <img src={sslLogo} alt="Certificado SSL" className="h-8 w-auto object-contain" />
                
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 px-3 py-1 rounded">
                  <img src={shopifyLogo} alt="Powered by Shopify" className="w-auto h-8" />
                 
                </div>
                <div className="flex space-x-4 pt-4">
              <Instagram className="w-5 h-5 text-[var(--cleantech-gray)] hover:text-[var(--cleantech-brown)] cursor-pointer transition-colors duration-300" />
              <Facebook className="w-5 h-5 text-[var(--cleantech-gray)] hover:text-[var(--cleantech-brown)] cursor-pointer transition-colors duration-300" />
            </div>
              </div>
            </div>

          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-light tracking-[0.2em] text-[var(--cleantech-brown)] uppercase mb-6">
              PRODUTOS
            </h4>
            <ul className="space-y-3 text-sm text-[var(--cleantech-dark-gray)]">
              <li>
                <a href="#featured-products" 
                   onClick={(e) => {e.preventDefault(); document.querySelector('#featured-products')?.scrollIntoView({behavior: 'smooth'});}}
                   className="hover:text-[var(--cleantech-brown)] transition-colors duration-300 hover:underline">
                  Produtos em Destaque
                </a>
              </li>
              <li>
                <a href="#categories" 
                   onClick={(e) => {e.preventDefault(); document.querySelector('#categories')?.scrollIntoView({behavior: 'smooth'});}}
                   className="hover:text-[var(--cleantech-brown)] transition-colors duration-300 hover:underline">
                  Categorias
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--cleantech-brown)] transition-colors duration-300 hover:underline">
                  Lançamentos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--cleantech-brown)] transition-colors duration-300 hover:underline">
                  Ofertas
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-light tracking-[0.2em] text-[var(--cleantech-brown)] uppercase mb-6">
              SUPORTE
            </h4>
            <ul className="space-y-3 text-sm text-[var(--cleantech-dark-gray)]">
              <li>
                <button 
                  onClick={() => (window as any).navigateToSupport && (window as any).navigateToSupport()}
                  className="hover:text-[var(--cleantech-brown)] transition-colors duration-300 hover:underline text-left"
                >
                  Central de Ajuda
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--cleantech-brown)] transition-colors duration-300 hover:underline">
                  Garantia de 2 Anos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--cleantech-brown)] transition-colors duration-300 hover:underline">
                  Troca em 30 Dias
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--cleantech-brown)] transition-colors duration-300 hover:underline">
                  Minha Conta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--cleantech-brown)] transition-colors duration-300 hover:underline">
                  Rastreamento
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-light tracking-[0.2em] text-[var(--cleantech-brown)] uppercase mb-6">
              CONTATO
            </h4>
            <div className="space-y-4 text-sm text-[var(--cleantech-dark-gray)]">
              <div className="flex items-center space-x-3 hover:text-[var(--cleantech-brown)] transition-colors duration-300 cursor-pointer">
                <Phone className="w-4 h-4 text-[var(--cleantech-brown)]" />
                <span>(11) 3000-0000</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-[var(--cleantech-brown)] transition-colors duration-300 cursor-pointer">
                <Mail className="w-4 h-4 text-[var(--cleantech-brown)]" />
                <span>contato@cleantech.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[var(--cleantech-brown)]" />
                <span>
                  São Paulo - SP<br />
                  Brasil
                </span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-[var(--cleantech-gray)] mt-4">
                <Clock className="w-4 h-4" />
                <div>
                  <div>Seg - Sex: 8h às 18h</div>
                  <div>Sáb: 8h às 14h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="border-t border-[var(--cleantech-neutral-200)] bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h4 className="text-sm font-light tracking-[0.2em] text-[var(--cleantech-primary)] uppercase mb-6">
              FORMAS DE PAGAMENTO
            </h4>
            <div className="flex justify-center items-center">
              <img 
                src={paymentMethods} 
                alt="Formas de pagamento aceitas: Visa, Mastercard, American Express, Diners Club, Elo, Hipercard, Boleto Bancário e PIX" 
                className="h-8 w-auto max-w-full"
              />
            </div>
            <p className="text-xs text-[var(--cleantech-neutral-500)] mt-4 max-w-2xl mx-auto">
              Compre com segurança através de nossos parceiros de pagamento confiáveis. 
              Parcelamento em até 12x sem juros no cartão de crédito.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--cleantech-beige)] bg-[var(--cleantech-cream)]">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-sm text-[var(--cleantech-dark-gray)] text-center lg:text-left">
              <p>
                © 2025 CleanTech. Todos os direitos reservados. | 
                <a 
                  href="https://lobocode.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-1 hover:text-[var(--cleantech-brown)] transition-colors duration-300 underline"
                >
                  Desenvolvido pela Lobocode
                </a>
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--cleantech-dark-gray)]">
              <a href="#" className="hover:text-[var(--cleantech-brown)] transition-colors duration-300 hover:underline">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-[var(--cleantech-brown)] transition-colors duration-300 hover:underline">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-[var(--cleantech-brown)] transition-colors duration-300 hover:underline">
                LGPD
              </a>
            </div>

            {/* Security Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs text-[var(--cleantech-gray)]">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Site Seguro</span>
              </div>
              <div className="text-xs text-[var(--cleantech-gray)] hidden sm:block">
                CNPJ: 00.000.000/0001-00
              </div>
            </div>
          </div>
        </div>
      </div>
      </footer>
    </>
  );
}