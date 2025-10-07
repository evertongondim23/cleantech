import { useState } from "react";
import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  HelpCircle, 
  ChevronDown, 
  ThumbsUp, 
  ThumbsDown, 
  Send, 
  FileText,
  Headphones,
  Package,
  CreditCard,
  Settings,
  Shield,
  Users,
  Monitor,
  ShoppingCart,
  Star,
  Activity,
  X,
  Download,
  Video
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  helpful: number;
  notHelpful: number;
}

interface SupportCategory {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: string;
  articles: number;
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'Como rastrear meu pedido?',
    answer: 'Para rastrear seu pedido, acesse sua conta CleanTech e vá até "Meus Pedidos". Lá você encontrará o código de rastreamento e poderá acompanhar a entrega em tempo real.',
    category: 'pedidos',
    helpful: 324,
    notHelpful: 12
  },
  {
    id: '2',
    question: 'Qual o prazo de entrega?',
    answer: 'O prazo varia conforme sua localização: Sul e Sudeste: 2-4 dias úteis. Nordeste: 5-7 dias úteis. Norte e Centro-Oeste: 7-10 dias úteis.',
    category: 'entrega',
    helpful: 298,
    notHelpful: 8
  },
  {
    id: '3',
    question: 'Como trocar ou devolver um produto?',
    answer: 'Você tem até 30 dias para solicitar troca ou devolução. Acesse "Meus Pedidos" e clique em "Solicitar Troca/Devolução". Nosso time agendará a coleta gratuitamente.',
    category: 'trocas',
    helpful: 187,
    notHelpful: 15
  },
  {
    id: '4',
    question: 'Quais formas de pagamento vocês aceitam?',
    answer: 'Aceitamos: Cartão de crédito (Visa, Mastercard, Elo, Amex), Cartão de débito, PIX, Boleto bancário, Financiamento em até 12x sem juros.',
    category: 'pagamento',
    helpful: 267,
    notHelpful: 5
  }
];

const supportCategories: SupportCategory[] = [
  {
    id: 'pedidos',
    name: 'Pedidos & Entregas',
    description: 'Rastreamento, prazos e informações de entrega',
    icon: Package,
    color: 'text-blue-600 bg-blue-100',
    articles: 24
  },
  {
    id: 'produtos',
    name: 'Produtos',
    description: 'Especificações técnicas e uso adequado',
    icon: Settings,
    color: 'text-green-600 bg-green-100',
    articles: 18
  },
  {
    id: 'conta',
    name: 'Minha Conta',
    description: 'Login, cadastro e dados pessoais',
    icon: Users,
    color: 'text-purple-600 bg-purple-100',
    articles: 12
  },
  {
    id: 'pagamento',
    name: 'Pagamentos',
    description: 'Formas de pagamento e faturamento',
    icon: CreditCard,
    color: 'text-orange-600 bg-orange-100',
    articles: 15
  }
];

export function SupportPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showChat, setShowChat] = useState(false);
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [ticketForm, setTicketForm] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    priority: '',
    description: ''
  });

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    setNewMessage("");
    setShowChat(false);
  };

  const handleSubmitTicket = () => {
    setShowTicketForm(false);
    setTicketForm({
      name: '',
      email: '',
      subject: '',
      category: '',
      priority: '',
      description: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 pt-16">
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
              <li className="text-[var(--cleantech-primary)] font-medium">Suporte</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[var(--cleantech-primary)] to-[var(--cleantech-secondary)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Como podemos ajudar você?</h1>
            <p className="text-xl mb-8 opacity-90">
              Encontre respostas rápidas ou fale diretamente com nossa equipe especializada
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Digite sua dúvida ou palavra-chave..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg bg-white text-gray-900 border-0 rounded-lg shadow-lg"
              />
            </div>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button
                onClick={() => setShowChat(true)}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat Online
              </Button>
              <Button
                onClick={() => setShowTicketForm(true)}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
              >
                <FileText className="w-4 h-4 mr-2" />
                Abrir Ticket
              </Button>
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
                <Phone className="w-4 h-4 mr-2" />
                (11) 3000-1234
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        {/* Status System */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Todos os sistemas operacionais</span>
                </div>
                <Badge variant="outline" className="text-green-700 border-green-200">
                  <Activity className="w-3 h-3 mr-1" />
                  99.9% Uptime
                </Badge>
              </div>
              <Button variant="outline" size="sm">
                Ver Status Completo
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Support Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Centro de Ajuda por Categoria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className={`mx-auto mb-4 p-3 rounded-lg w-fit ${category.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-medium mb-2">{category.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                      <span className="text-xs text-gray-500">{category.articles} artigos</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[var(--cleantech-primary)]" />
                  Perguntas Frequentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <Button
                    variant={selectedCategory === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory('all')}
                    className={selectedCategory === 'all' ? 'bg-[var(--cleantech-primary)]' : ''}
                  >
                    Todas
                  </Button>
                  {supportCategories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className={selectedCategory === category.id ? 'bg-[var(--cleantech-primary)]' : ''}
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>

                {/* FAQ List */}
                <Accordion type="single" collapsible>
                  {filteredFAQs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <p className="text-gray-700">{faq.answer}</p>
                          
                          {/* Helpful/Not Helpful */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                            <span className="text-sm text-gray-600">Esta resposta foi útil?</span>
                            <div className="flex items-center gap-4">
                              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-green-600">
                                <ThumbsUp className="w-4 h-4" />
                                Sim ({faq.helpful})
                              </button>
                              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-600">
                                <ThumbsDown className="w-4 h-4" />
                                Não ({faq.notHelpful})
                              </button>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {filteredFAQs.length === 0 && (
                  <div className="text-center py-8">
                    <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Nenhuma pergunta encontrada para sua busca.</p>
                    <Button
                      onClick={() => setShowTicketForm(true)}
                      className="mt-4 bg-[var(--cleantech-primary)]"
                    >
                      Fazer uma pergunta
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Options */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Precisa de Ajuda?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={() => setShowChat(true)}
                  className="w-full bg-gradient-to-r from-[var(--cleantech-primary)] to-[var(--cleantech-secondary)] text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat Online
                  <Badge className="ml-2 bg-green-500">Online</Badge>
                </Button>
                
                <Button variant="outline" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  (11) 3000-1234
                </Button>
                
                <Button variant="outline" className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  suporte@cleantech.com
                </Button>

                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">Horário de Atendimento</p>
                  <p className="text-sm font-medium">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-sm font-medium">Sábado: 8h às 14h</p>
                </div>
              </CardContent>
            </Card>

            {/* Performance Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Nossa Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Tempo de Resposta</span>
                    <span className="font-medium">&lt; 2min</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Satisfação</span>
                    <span className="font-medium">98%</span>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>4.9/5 avaliação média</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Chat Modal */}
      <Dialog open={showChat} onOpenChange={setShowChat}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Headphones className="w-5 h-5" />
              Chat com Suporte
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-[var(--cleantech-primary)] text-white text-xs">
                    CS
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Suporte CleanTech</span>
              </div>
              <p className="text-sm text-gray-700">
                Olá! Como posso ajudá-lo hoje? Estou aqui para resolver suas dúvidas.
              </p>
            </div>
            <div className="flex gap-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-[var(--cleantech-primary)]"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Ticket Form Modal */}
      <Dialog open={showTicketForm} onOpenChange={setShowTicketForm}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Abrir Ticket de Suporte</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="Nome completo"
                value={ticketForm.name}
                onChange={(e) => setTicketForm(prev => ({ ...prev, name: e.target.value }))}
              />
              <Input
                type="email"
                placeholder="E-mail"
                value={ticketForm.email}
                onChange={(e) => setTicketForm(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            
            <Input
              placeholder="Assunto"
              value={ticketForm.subject}
              onChange={(e) => setTicketForm(prev => ({ ...prev, subject: e.target.value }))}
            />

            <Textarea
              placeholder="Descreva seu problema..."
              value={ticketForm.description}
              onChange={(e) => setTicketForm(prev => ({ ...prev, description: e.target.value }))}
              rows={4}
            />

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowTicketForm(false)}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleSubmitTicket}
                className="flex-1 bg-[var(--cleantech-primary)]"
              >
                Enviar Ticket
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating Chat Button */}
      <Button
        onClick={() => setShowChat(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-[var(--cleantech-primary)] to-[var(--cleantech-secondary)] text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
}