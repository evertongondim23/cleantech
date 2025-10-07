import { useState } from "react";
import { X, Eye, EyeOff, Mail, Facebook } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister?: () => void;
}

export function ProfileModal({ isOpen, onClose, onOpenRegister }: ProfileModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);

  if (!isOpen) return null;

  const handleEmailCodeAccess = () => {
    if (!email) {
      alert("Por favor, insira seu e-mail primeiro.");
      return;
    }
    // Implementar lógica de código por email
    console.log("Enviando código de acesso por email para:", email);
    alert(`Código de acesso enviado para: ${email}`);
  };

  const handleFacebookLogin = () => {
    // Implementar login com Facebook
    console.log("Login com Facebook");
  };

  const handleGoogleLogin = () => {
    // Implementar login com Google
    console.log("Login com Google");
  };

  const handleEmailLogin = () => {
    if (!email || !password) {
      alert("Por favor, preencha e-mail e senha.");
      return;
    }
    // Implementar login com email/senha
    console.log("Login com email/senha:", { email, password });
    alert("Login realizado com sucesso!");
    onClose();
  };

  const handleRegister = () => {
    if (onOpenRegister) {
      onOpenRegister();
      onClose();
    }
  };

  const handleForgotPassword = () => {
    if (!email) {
      alert("Por favor, insira seu e-mail primeiro.");
      return;
    }
    // Implementar recuperação de senha
    console.log("Esqueci minha senha para:", email);
    alert(`Instruções de recuperação enviadas para: ${email}`);
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div 
          className="bg-white rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--cleantech-neutral-200)]">
            <h2 className="text-xl font-light tracking-[0.2em] uppercase text-[var(--cleantech-neutral-700)]">
              ACESSO
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="p-2 hover:bg-[var(--cleantech-neutral-100)] rounded-full"
            >
              <X className="w-5 h-5 text-[var(--cleantech-neutral-600)]" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Subtitle */}
            <div className="text-center">
              <p className="text-[var(--cleantech-neutral-600)] mb-6">
                Escolha uma opção para entrar
              </p>
            </div>

            {/* Email Code Access */}
            <Button
              variant="outline"
              className="w-full py-3 border-[var(--cleantech-neutral-400)] text-[var(--cleantech-neutral-700)] hover:bg-[var(--cleantech-neutral-50)] uppercase tracking-[0.1em] text-sm"
              onClick={handleEmailCodeAccess}
            >
              <Mail className="w-4 h-4 mr-2" />
              Receber código de acesso por e-mail
            </Button>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <Button
                className="w-full py-3 bg-[var(--cleantech-neutral-700)] hover:bg-[var(--cleantech-neutral-800)] text-white uppercase tracking-[0.1em] text-sm"
                onClick={handleFacebookLogin}
              >
                <Facebook className="w-4 h-4 mr-2" />
                Entrar com o Facebook
              </Button>

              <Button
                className="w-full py-3 bg-[var(--cleantech-neutral-700)] hover:bg-[var(--cleantech-neutral-800)] text-white uppercase tracking-[0.1em] text-sm"
                onClick={handleGoogleLogin}
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Entrar com uma conta Google
              </Button>
            </div>

            <Separator className="my-6" />

            {/* Email/Password Login */}
            <div className="space-y-4">
              <h3 className="text-[var(--cleantech-neutral-700)] font-medium tracking-[0.1em] text-center">
                Entrar com e-mail e senha
              </h3>

              <div className="space-y-4">
                {/* Email Input */}
                <div>
                  <Input
                    type="email"
                    placeholder="Ex.: exemplo@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-3 px-4 border-b-2 border-t-0 border-l-0 border-r-0 border-[var(--cleantech-neutral-300)] rounded-none bg-transparent focus:border-[var(--cleantech-primary)] focus:ring-0 placeholder:text-[var(--cleantech-neutral-500)]"
                  />
                </div>

                {/* Password Input */}
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

                {/* Forgot Password Link */}
                <div className="text-center">
                  <button
                    onClick={handleForgotPassword}
                    className="text-sm text-red-500 hover:text-red-700 underline transition-colors"
                  >
                    Esqueci minha senha
                  </button>
                </div>

                {/* Login Button */}
                <Button
                  onClick={handleEmailLogin}
                  className="w-full py-3 bg-[var(--cleantech-neutral-700)] hover:bg-[var(--cleantech-neutral-800)] text-white uppercase tracking-[0.1em] text-sm"
                  disabled={!email || !password}
                >
                  Entrar
                </Button>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Register Link */}
            <div className="text-center">
              <p className="text-[var(--cleantech-neutral-600)]">
                Não tem uma conta?{" "}
                <button
                  onClick={handleRegister}
                  className="text-[var(--cleantech-primary)] hover:text-[var(--cleantech-blue-dark)] underline font-medium transition-colors"
                >
                  Cadastre-se
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}