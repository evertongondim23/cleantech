import { Shield, Users, Lightbulb, Award, Sparkles, Home, Scissors } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import empresarialImage from 'figma:asset/51506c9e773fb4c5e767684cc9fef545930c2cf4.png';

export function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "QUALIDADE GARANTIDA",
      description: "Produtos testados e aprovados pelos nossos especialistas em limpeza"
    },
    {
      icon: Users,
      title: "ATENDIMENTO ESPECIALIZADO", 
      description: "Equipe qualificada para orientar na escolha ideal dos produtos"
    },
    {
      icon: Lightbulb,
      title: "INOVAÇÃO CONSTANTE",
      description: "Sempre em busca de novas tecnologias para soluções mais eficazes"
    },
    {
      icon: Award,
      title: "COMPROMISSO SUSTENTÁVEL",
      description: "Desenvolvimento de produtos com responsabilidade ambiental"
    }
  ];

  const productLines = [
    {
      title: "LIMPEZA",
      description: "Produtos profissionais para limpeza residencial e comercial com máxima eficiência",
      image: "https://images.unsplash.com/photo-1596263373300-e7a529358242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHByb2R1Y3RzJTIwc3ByYXklMjBib3R0bGV8ZW58MXx8fHwxNzU4OTE0MDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Sparkles,
      color: "from-[var(--cleantech-cyan-light)] to-[var(--cleantech-cyan-vibrant)]"
    },
    {
      title: "TAPETES",
      description: "Soluções especializadas para limpeza e manutenção de tapetes e carpetes",
      image: "https://images.unsplash.com/photo-1580256081112-e49377338b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZXQlMjBjbGVhbmluZyUyMHNlcnZpY2V8ZW58MXx8fHwxNzU4OTE0ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Home,
      color: "from-[var(--cleantech-blue-dark)] to-[var(--cleantech-blue-navy)]"
    },
    {
      title: "CORTINAS",
      description: "Produtos especiais para limpeza delicada de cortinas e tecidos finos",
      image: "https://images.unsplash.com/photo-1610389473058-fd68ad1d8bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJ0YWluJTIwY2xlYW5pbmclMjBkcmFwZXN8ZW58MXx8fHwxNzU4OTE0ODc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Scissors,
      color: "from-[var(--cleantech-cyan-medium)] to-[var(--cleantech-cyan-light)]"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 pt-14">
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
              <li className="text-[var(--cleantech-primary)] font-medium">Quem Somos</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-gradient-to-br from-[var(--cleantech-blue-dark)] to-[var(--cleantech-primary)]"
      >
        
        {/* Conteúdo */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-light text-white mb-8 uppercase text-[36px]">
            QUEM SOMOS
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
            Dedicados a proporcionar ambientes mais limpos e saudáveis desde 2022, com uma 
            ampla gama de produtos e acessórios que transformam espaços.
          </p>

        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-light text-[36px] text-[var(--cleantech-primary)] uppercase mb-6">
                NOSSA HISTÓRIA
              </h2>
              <p className="text-[var(--cleantech-neutral-700)] leading-relaxed mb-6">
                Fundada em 2018, nossa empresa nasceu da visão de oferecer ao mercado 
                brasileiro produtos de limpeza que combinassem alta eficiência, 
                responsabilidade ambiental e tecnologia de ponta.
              </p>
              <p className="text-[var(--cleantech-neutral-700)] leading-relaxed mb-6">
                Nossa equipe combinou anos de experiência no segmento de limpeza 
                profissional com a paixão pela inovação, resultando em soluções 
                que transformam a maneira como as pessoas cuidam de seus ambientes.
              </p>
              <p className="text-[var(--cleantech-neutral-700)] leading-relaxed mb-8">
                Hoje, somos referência em produtos de alta qualidade para 
                limpeza residencial e comercial, sempre mantendo nosso compromisso 
                com a sustentabilidade e a satisfação dos nossos clientes.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-light text-[var(--cleantech-primary)] mb-1">2018</div>
                  <div className="text-sm text-[var(--cleantech-neutral-500)] uppercase tracking-wide">Fundação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-[var(--cleantech-primary)] mb-1">50K+</div>
                  <div className="text-sm text-[var(--cleantech-neutral-500)] uppercase tracking-wide">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-[var(--cleantech-primary)] mb-1">100+</div>
                  <div className="text-sm text-[var(--cleantech-neutral-500)] uppercase tracking-wide">Produtos</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[var(--cleantech-cyan-light)] to-[var(--cleantech-primary)] p-1 rounded-2xl">
                <ImageWithFallback
                  src={empresarialImage}
                  alt="Ambiente CleanTech - Quarto Moderno"
                  className="w-full h-[600px] object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--cleantech-cyan-light)] to-[var(--cleantech-primary)] rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-[var(--cleantech-primary)]">Qualidade Certificada</div>
                    <div className="text-sm text-[var(--cleantech-neutral-500)]">ISO 9001 - 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-[var(--cleantech-light-bg)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-light text-[36px] text-[var(--cleantech-primary)] uppercase mb-6">
              NOSSOS VALORES
            </h2>
            <p className="text-xl text-[var(--cleantech-neutral-600)] max-w-3xl mx-auto">
              Valores que orientam cada ação do nosso dia a dia e definem nosso compromisso com você
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl text-center group hover:shadow-xl transition-all duration-300 border border-[var(--cleantech-neutral-100)]"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--cleantech-cyan-light)] to-[var(--cleantech-primary)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-medium text-[var(--cleantech-primary)] mb-4 uppercase tracking-wide text-sm">
                    {value.title}
                  </h3>
                  <p className="text-[var(--cleantech-neutral-600)] leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Linha de Produtos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-light text-[36px] text-[var(--cleantech-primary)] uppercase mb-6">
              LINHA DE PRODUTOS
            </h2>
            <p className="text-xl text-[var(--cleantech-neutral-600)] max-w-3xl mx-auto">
              Três áreas especializadas que atendem todas as necessidades de limpeza
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {productLines.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-[var(--cleantech-primary)] mb-3 uppercase tracking-wide text-center">
                    {product.title}
                  </h3>
                  <p className="text-[var(--cleantech-neutral-600)] leading-relaxed text-center">
                    {product.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-gradient-to-br from-[var(--cleantech-cyan-light)] to-[var(--cleantech-primary)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-white mb-6 uppercase tracking-wide">
            PRONTO PARA TRANSFORMAR SEU AMBIENTE?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Descubra nossa linha completa de produtos e encontre a solução ideal para suas necessidades
          </p>
          <button 
            onClick={() => (window as any).navigateToHome && (window as any).navigateToHome()}
            className="px-10 py-4 bg-white text-[var(--cleantech-primary)] font-medium tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[var(--cleantech-neutral-100)] rounded-sm shadow-lg"
          >
            EXPLORAR PRODUTOS
          </button>
        </div>
      </section>
    </div>
  );
}