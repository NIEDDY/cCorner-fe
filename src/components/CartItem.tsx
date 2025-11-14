import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuantitySelector from "./QuantitySelector";

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
    <div className="flex gap-4 p-4 bg-card rounded-lg">
      <img src={image} alt={title} className="w-24 h-24 object-cover rounded-lg" />
      <div className="flex-1">
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm mb-2">${price.toFixed(2)}</p>
        <QuantitySelector
          quantity={quantity}
          onIncrease={() => onUpdateQuantity(id, quantity + 1)}
          onDecrease={() => quantity > 1 && onUpdateQuantity(id, quantity - 1)}
        />
      </div>
      <div className="flex flex-col items-end justify-between">
        <p className="font-bold text-lg">${(price * quantity).toFixed(2)}</p>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onRemove(id)}
          className="text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
