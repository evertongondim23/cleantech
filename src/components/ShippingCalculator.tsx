import { useState } from "react";
import { Truck, Calculator, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface ShippingOption {
  id: string;
  name: string;
  price: number;
  days: string;
  description: string;
}

export function ShippingCalculator() {
  const [zipCode, setZipCode] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([]);
  const [hasCalculated, setHasCalculated] = useState(false);

  const formatZipCode = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 5) {
      return numbers;
    }
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`;
  };

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatZipCode(e.target.value);
    setZipCode(formatted);
  };

  const calculateShipping = async () => {
    if (zipCode.length < 8) return;
    
    setIsCalculating(true);
    
    // Simular API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simular diferentes opções baseadas no CEP
    const options: ShippingOption[] = [
      {
        id: "standard",
        name: "Entrega Padrão",
        price: 0,
        days: "5-7 dias úteis",
        description: "Frete grátis para compras acima de R$ 150"
      },
      {
        id: "express",
        name: "Entrega Expressa",
        price: 19.90,
        days: "2-3 dias úteis",
        description: "Entrega rápida via transportadora"
      }
    ];

    // Para CEPs de SP capital, adicionar entrega no mesmo dia
    if (zipCode.startsWith("01") || zipCode.startsWith("04")) {
      options.unshift({
        id: "same-day",
        name: "Entrega Hoje",
        price: 29.90,
        days: "Até 18h",
        description: "Disponível para pedidos até 14h"
      });
    }
    
    setShippingOptions(options);
    setHasCalculated(true);
    setIsCalculating(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 mb-3">
        <Calculator className="w-4 h-4 text-[var(--cleantech-primary)]" />
        <span className="text-sm font-medium tracking-[0.1em] text-[var(--cleantech-primary)] uppercase">
          Calcular Frete
        </span>
      </div>

      <div className="flex space-x-2">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="00000-000"
            value={zipCode}
            onChange={handleZipCodeChange}
            maxLength={9}
            className="text-center"
          />
        </div>
        <Button
          onClick={calculateShipping}
          disabled={zipCode.length < 8 || isCalculating}
          className="bg-[var(--cleantech-primary)] hover:bg-[var(--cleantech-blue-navy)] text-white px-6"
        >
          {isCalculating ? "..." : "OK"}
        </Button>
      </div>

      {hasCalculated && (
        <div className="space-y-3 mt-4">
          {shippingOptions.map((option) => (
            <div
              key={option.id}
              className="flex items-center justify-between p-3 border border-[var(--cleantech-neutral-200)] rounded-lg hover:border-[var(--cleantech-primary)] transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <Truck className="w-4 h-4 text-[var(--cleantech-primary)]" />
                <div>
                  <div className="font-medium text-sm">{option.name}</div>
                  <div className="text-xs text-[var(--cleantech-neutral-600)]">
                    {option.description}
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="font-medium text-[var(--cleantech-primary)]">
                  {option.price === 0 ? "Grátis" : `R$ ${option.price.toFixed(2).replace('.', ',')}`}
                </div>
                <div className="text-xs text-[var(--cleantech-neutral-600)]">
                  {option.days}
                </div>
              </div>
            </div>
          ))}
          
          <div className="text-xs text-[var(--cleantech-neutral-600)] flex items-center space-x-1">
            <MapPin className="w-3 h-3" />
            <span>CEP: {zipCode}</span>
            <button 
              onClick={() => setHasCalculated(false)}
              className="text-[var(--cleantech-primary)] hover:underline ml-2"
            >
              Alterar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}