import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  const subtotal = cartTotal;
  const tax = subtotal * 0.1;
  const shipping = 0; // Free shipping
  const total = subtotal + tax + shipping;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <main className="flex-1 py-6 sm:py-8 md:py-12">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 sm:py-16 md:py-20"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Your cart is empty</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6">
                Add some products to get started!
              </p>
              <Button size="lg" asChild className="text-sm sm:text-base">
                <Link to="/products">
                  Browse Products
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-6 sm:gap-8">
              {/* Cart Items */}
              <div className="space-y-3 sm:space-y-4">
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <CartItem
                      {...item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeFromCart}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Order Summary */}
              <div>
                <Card className="sticky top-20 sm:top-24">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-muted-foreground">Tax (10%)</span>
                      <span className="font-semibold">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-semibold">Free</span>
                    </div>
                    <div className="border-t pt-3 sm:pt-4">
                      <div className="flex justify-between text-base sm:text-lg">
                        <span className="font-bold">Total</span>
                        <span className="font-bold text-primary">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex-col gap-2 sm:gap-3 p-4 sm:p-6 pt-0">
                    <Button size="lg" className="w-full text-sm sm:text-base" asChild>
                      <Link to="/checkout">
                        Proceed to Checkout
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="w-full text-sm sm:text-base" asChild>
                      <Link to="/products">Continue Shopping</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
