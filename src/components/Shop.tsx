import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Minus, Plus, Tag, ShoppingCart } from 'lucide-react';
import { products } from './Products';

export default function Shop() {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div className="container mx-auto px-4 py-16">Product not found</div>;
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const applyCoupon = () => {
    // Simple coupon logic - HEALTHY20 for 20% off
    if (couponCode.toUpperCase() === 'HEALTHY20') {
      setDiscount(20);
    } else {
      setDiscount(0);
      alert('Invalid coupon code');
    }
  };

  const subtotal = product.price * quantity;
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  const handleCheckout = () => {
    // Initialize Razorpay payment
    const options = {
      key: 'NxxPgQ4vz4EhfjM1lGiNOH5f', // Replace with actual key
      amount: total * 100, // Razorpay expects amount in paise
      currency: 'INR',
      name: 'HealthyBits',
      description: `Purchase of ${product.name}`,
      image: 'https://your-logo-url.com',
      handler: function(response: any) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      theme: {
        color: '#f97316'
      }
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Price */}
          <div className="mb-6">
            <span className="text-3xl font-bold text-orange-500">₹{product.price}</span>
            <span className="ml-2 text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
            <span className="ml-2 text-green-600">
              ({Math.round((1 - product.price/product.originalPrice) * 100)}% off)
            </span>
          </div>

          {/* Product Information */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-2">Product Details:</h3>
            <p className="mb-2">Weight: {product.weight}</p>
            <p className="mb-4">Ingredients: {product.ingredients}</p>
            
            <h3 className="font-bold text-lg mb-2">Nutritional Information:</h3>
            <ul className="space-y-1">
              {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                <li key={key} className="text-gray-600">
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                </li>
              ))}
            </ul>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Quantity:</label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="p-2 rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200"
              >
                <Minus size={20} />
              </button>
              <span className="text-xl font-bold">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="p-2 rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>

          {/* Coupon Code */}
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Have a coupon?</label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter coupon code"
                className="flex-1 p-2 border rounded-md"
              />
              <button
                onClick={applyCoupon}
                className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 flex items-center gap-2"
              >
                <Tag size={20} />
                Apply
              </button>
            </div>
          </div>

          {/* Price Summary */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>₹{subtotal}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between mb-2 text-green-600">
                <span>Discount ({discount}%):</span>
                <span>-₹{discountAmount}</span>
              </div>
            )}
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>
          </div>

          {/* Add to Cart & Checkout Buttons */}
          <div className="space-y-4">
            <button className="w-full bg-gray-800 text-white py-3 px-4 rounded-md hover:bg-gray-700 flex items-center justify-center gap-2">
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            <button
              onClick={handleCheckout}
              className="w-full bg-orange-500 text-white py-3 px-4 rounded-md hover:bg-orange-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
