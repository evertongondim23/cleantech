import { useState, useEffect } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Checkbox } from "./ui/checkbox";

export function RegisterDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptNewsletter, setAcceptNewsletter] = useState(false);

  // Configurar funções globais do drawer
  useEffect(() => {
    (window as any).openRegisterDrawer = () => {
      setIsOpen(true);
      setIsAnimating(true);
    };

    (window as any).closeRegisterDrawer = () => {
      setIsAnimating(false);
      setTimeout(() => setIsOpen(false), 300);
    };

    return () => {
      delete (window as any).openRegisterDrawer;
      delete (window as any).closeRegisterDrawer;
    };
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRegister = () => {
    // Validações básicas
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    if (!acceptTerms) {
      alert("É necessário aceitar os termos e condições.");
      return;
    }

    console.log("Registrando usuário:", formData);
    console.log("Newsletter:", acceptNewsletter);
    alert("Conta criada com sucesso!");
    (window as any).closeRegisterDrawer();
  };

  const handleBackToLogin = () => {
    if ((window as any).openProfileDrawer) {
      (window as any).openProfileDrawer();
      (window as any).closeRegisterDrawer();
    }
  };

  const isFormValid = () => {
    return formData.firstName && 
           formData.lastName && 
           formData.email && 
           formData.password && 
           formData.confirmPassword &&
           formData.password === formData.confirmPassword &&
           acceptTerms;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => (window as any).closeRegisterDrawer()}
      />
      
      {/* Drawer */}
      <div 
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isAnimating ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--cleantech-neutral-200)]">
          <h2 className="text-xl font-light tracking-[0.2em] uppercase text-[var(--cleantech-neutral-700)]">
            CADASTRO
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => (window as any).closeRegisterDrawer()}
            className="p-2 hover:bg-[var(--cleantech-neutral-100)] rounded-full"
          >
            <X className="w-5 h-5 text-[var(--cleantech-neutral-600)]" />
          </Button>
        </div>

        {/* Content */}
        <div className="h-[calc(100vh-80px)] overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Subtitle */}
            <div className="text-center">
              <p className="text-[var(--cleantech-neutral-600)] mb-6">
                Crie sua conta CleanTech
              </p>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {/* Nome e Sobrenome */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Input
                    type="text"
                    placeholder="Nome"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full py-3 px-4 border-b-2 border-t-0 border-l-0 border-r-0 border-[var(--cleantech-neutral-300)] rounded-none bg-transparent focus:border-[var(--cleantech-primary)] focus:ring-0 placeholder:text-[var(--cleantech-neutral-500)]"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Sobrenome"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full py-3 px-4 border-b-2 border-t-0 border-l-0 border-r-0 border-[var(--cleantech-neutral-300)] rounded-none bg-transparent focus:border-[var(--cleantech-primary)] focus:ring-0 placeholder:text-[var(--cleantech-neutral-500)]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full py-3 px-4 border-b-2 border-t-0 border-l-0 border-r-0 border-[var(--cleantech-neutral-300)] rounded-none bg-transparent focus:border-[var(--cleantech-primary)] focus:ring-0 placeholder:text-[var(--cleantech-neutral-500)]"
                />
              </div>

              {/* Telefone */}
              <div>
                <Input
                  type="tel"
                  placeholder="Telefone (opcional)"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full py-3 px-4 border-b-2 border-t-0 border-l-0 border-r-0 border-[var(--cleantech-neutral-300)] rounded-none bg-transparent focus:border-[var(--cleantech-primary)] focus:ring-0 placeholder:text-[var(--cleantech-neutral-500)]"
                />
              </div>

              {/* Senha */}
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full py-3 px-4 pr-12 border-b-2 border-t-0 border-l-0 border-r-0 border-[var(--cleantech-neutral-300)] rounded-none bg-transparent focus:border-[var(--cleantech-primary)] focus:ring-0 placeholder:text-[var(--cleantech-neutral-500)]"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 text-[var(--cleantech-neutral-500)]" />
                  ) : (
                    <Eye className="w-4 h-4 text-[var(--cleantech-neutral-500)]" />
                  )}
                </Button>
              </div>

              {/* Confirmar Senha */}
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirmar Senha"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="w-full py-3 px-4 pr-12 border-b-2 border-t-0 border-l-0 border-r-0 border-[var(--cleantech-neutral-300)] rounded-none bg-transparent focus:border-[var(--cleantech-primary)] focus:ring-0 placeholder:text-[var(--cleantech-neutral-500)]"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-4 h-4 text-[var(--cleantech-neutral-500)]" />
                  ) : (
                    <Eye className="w-4 h-4 text-[var(--cleantech-neutral-500)]" />
                  )}
                </Button>
              </div>

              {/* Senha não confere */}
              {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="text-sm text-red-500">
                  As senhas não coincidem
                </p>
              )}
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                  className="mt-0.5"
                />
                <label htmlFor="terms" className="text-sm text-[var(--cleantech-neutral-700)] leading-relaxed">
                  Aceito os{" "}
                  <a href="#" className="text-[var(--cleantech-primary)] hover:underline">
                    termos de uso
                  </a>{" "}
                  e{" "}
                  <a href="#" className="text-[var(--cleantech-primary)] hover:underline">
                    política de privacidade
                  </a>
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="newsletter"
                  checked={acceptNewsletter}
                  onCheckedChange={(checked) => setAcceptNewsletter(checked as boolean)}
                  className="mt-0.5"
                />
                <label htmlFor="newsletter" className="text-sm text-[var(--cleantech-neutral-700)]">
                  Quero receber ofertas e novidades por e-mail
                </label>
              </div>
            </div>

            {/* Register Button */}
            <Button
              onClick={handleRegister}
              disabled={!isFormValid()}
              className="w-full py-3 bg-[var(--cleantech-primary)] hover:bg-[var(--cleantech-blue-dark)] text-white uppercase tracking-[0.1em] text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Criar Conta
            </Button>

            <Separator className="my-6" />

            {/* Back to Login */}
            <div className="text-center">
              <p className="text-[var(--cleantech-neutral-600)]">
                Já tem uma conta?{" "}
                <button
                  onClick={handleBackToLogin}
                  className="text-[var(--cleantech-primary)] hover:text-[var(--cleantech-blue-dark)] underline font-medium transition-colors"
                >
                  Fazer Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}