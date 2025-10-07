import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Newsletter() {
  return (
    <section className="py-16 bg-[var(--cleantech-cyan-light)] text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-4">
            NEWSLETTER
          </h2>
          <p className="mb-8 opacity-90">
            Receba novidades, dicas e ofertas especiais dos produtos CleanTech
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20 focus:border-white/40"
            />
            <Button 
              className="bg-white text-[var(--cleantech-cyan-light)] hover:bg-gray-100 px-8 font-medium uppercase tracking-wide"
            >
              ASSINAR
            </Button>
          </div>

          <small className="mt-4 opacity-70">
            Ao assinar você concorda com nossa política de privacidade
          </small>
        </div>
      </div>
    </section>
  );
}