import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { CreditCard, Lock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart, cartTotal } = useCart();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const subtotal = cartTotal;
  const tax = subtotal * 0.1;
  const shipping = 0; // Free shipping
  const total = subtotal + tax + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.address) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate payment processing
    toast({
      title: "Order Placed!",
      description: "Your order has been successfully placed. You will receive a confirmation email shortly.",
    });

    clearCart();
    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <Navigation />
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Checkout</h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6">Your cart is empty</p>
          <Button onClick={() => navigate("/products")} className="text-sm sm:text-base">Browse Products</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
        <div className="mb-5 sm:mb-6 md:mb-8">
          <Link to="/cart" className="inline-flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-primary mb-3 sm:mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Cart
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Checkout</h1>
        </div>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-6 sm:gap-8">
          {/* Checkout Form */}
          <div className="space-y-4 sm:space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
                <div>
                  <Label htmlFor="email" className="text-sm sm:text-base">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">Shipping Address</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm sm:text-base">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="h-10 sm:h-12 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm sm:text-base">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="h-10 sm:h-12 text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address" className="text-sm sm:text-base">Address *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div>
                    <Label htmlFor="city" className="text-sm sm:text-base">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="h-10 sm:h-12 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-sm sm:text-base">State *</Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="h-10 sm:h-12 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode" className="text-sm sm:text-base">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="h-10 sm:h-12 text-sm sm:text-base"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
                <div>
                  <Label htmlFor="cardNumber" className="text-sm sm:text-base">Card Number *</Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    className="h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="cardName" className="text-sm sm:text-base">Name on Card *</Label>
                  <Input
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    required
                    className="h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <Label htmlFor="expiryDate" className="text-sm sm:text-base">Expiry Date *</Label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                      className="h-10 sm:h-12 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv" className="text-sm sm:text-base">CVV *</Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                      className="h-10 sm:h-12 text-sm sm:text-base"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-20 sm:top-24">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
                <div className="space-y-2">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">
                        {item.title} x {item.quantity}
                      </span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-3 sm:pt-4 space-y-2">
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
                </div>
              </CardContent>
              <CardContent className="p-4 sm:p-6 pt-0">
                <Button type="submit" size="lg" className="w-full text-sm sm:text-base">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Place Order
                </Button>
              </CardContent>
            </Card>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
