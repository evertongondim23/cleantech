import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "Dona de Casa",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b932?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "O aspirador inteligente da CleanTech revolucionou a limpeza da minha casa. Simplesmente incrível a tecnologia que eles desenvolveram!",
      product: "Aspirador X1"
    },
    {
      id: 2,
      name: "João Santos",
      role: "Empresário",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Produtos de qualidade excepcional e atendimento impecável. A CleanTech realmente entende de inovação em limpeza.",
      product: "Kit Smart Home"
    },
    {
      id: 3,
      name: "Ana Costa",
      role: "Arquiteta",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Adoro que os produtos são sustentáveis sem perder a eficiência. Perfeito para quem se preocupa com o meio ambiente.",
      product: "Linha Eco"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 uppercase tracking-tight mb-4">
            O QUE NOSSOS CLIENTES DIZEM
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Histórias reais de quem já experimentou a revolução CleanTech
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-center text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Product */}
                <div className="text-center mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                    {testimonial.product}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center justify-center space-x-3">
                  <Avatar className="w-12 h-12 border-2 border-blue-200">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-blue-600 text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <p className="text-sm text-gray-600 uppercase tracking-wide">Satisfação</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
            <p className="text-sm text-gray-600 uppercase tracking-wide">Clientes</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9★</div>
            <p className="text-sm text-gray-600 uppercase tracking-wide">Avaliação</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
            <p className="text-sm text-gray-600 uppercase tracking-wide">Entrega</p>
          </div>
        </div>
      </div>
    </section>
  );
}