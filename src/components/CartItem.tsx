import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuantitySelector from "./QuantitySelector";
import { Card } from "@/components/ui/card";

interface CartItemProps {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem = ({ id, title, price, image, quantity, onUpdateQuantity, onRemove }: CartItemProps) => {
  return (
    <Card className="p-3 sm:p-4 border border-border/50 hover:shadow-md transition-shadow">
      <div className="flex gap-3 sm:gap-4">
        <img 
          src={image} 
          alt={title} 
          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg sm:rounded-xl flex-shrink-0" 
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm sm:text-base mb-1 line-clamp-2">{title}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">${price.toFixed(2)} each</p>
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <QuantitySelector
              quantity={quantity}
              onIncrease={() => onUpdateQuantity(id, quantity + 1)}
              onDecrease={() => quantity > 1 && onUpdateQuantity(id, quantity - 1)}
            />
            <div className="flex items-center gap-2 sm:gap-3">
              <p className="font-bold text-base sm:text-lg">${(price * quantity).toFixed(2)}</p>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onRemove(id)}
                className="text-destructive hover:text-destructive hover:bg-destructive/10 h-8 w-8 sm:h-9 sm:w-9"
              >
                <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
