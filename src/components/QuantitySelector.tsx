import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantitySelector = ({ quantity, onIncrease, onDecrease }: QuantitySelectorProps) => {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <Button
        variant="outline"
        size="icon"
        className="h-7 w-7 sm:h-8 sm:w-8"
        onClick={onDecrease}
      >
        <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </Button>
      <span className="w-6 sm:w-8 text-center font-semibold text-sm sm:text-base">{quantity}</span>
      <Button
        variant="outline"
        size="icon"
        className="h-7 w-7 sm:h-8 sm:w-8"
        onClick={onIncrease}
      >
        <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </Button>
    </div>
  );
};

export default QuantitySelector;
