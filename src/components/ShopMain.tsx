import { ShoppingCart, Clock } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Current Products data from your reference code
export const products = [
  {
    id: 'seeds-mix-laddu',
    name: 'Super Seeds Mix Laddu',
    description: 'A delightful blend of premium healthy seeds',
    features: ['High in Fiber', 'Natural Sweetness', 'No Added Sugar'],
    image:
      'https://static.vecteezy.com/system/resources/previews/045/595/418/large_2x/healthy-energy-balls-made-of-dried-fruits-and-nuts-healthy-food-photo.jpg',
    weightOptions: [
      { weight: '200g', price: 219, originalPrice: 275 },
      { weight: '400g', price: 419, originalPrice: 525 }
    ],
    ingredients: 'Almonds, Dates, Pumpkin Seeds, Flax Seeds, more...',
    nutritionalInfo: {
      calories: '120 kcal',
      protein: '2g',
      fiber: '4g',
      sugar: '18g (natural)',
    },
  },
  {
    id: 'seeds-mix',
    name: 'Super Roasted Seeds Mix',
    description: 'Carefully selected mix of nutritious seeds',
    features: ['Rich in Protein', 'Heart Healthy', 'Omega-3 Rich'],
    image:
      'https://imgmedia.lbb.in/media/2021/08/610c0dddbf1229243d8a5843_1628179933562.jpg',
    weightOptions: [
      { weight: '100g', price: 99, originalPrice: 123 },
      { weight: '200g', price: 179, originalPrice: 225 }
    ],
    ingredients: 'Pumpkin Seeds, Chia Seeds, Flax Seeds, Nuts',
    nutritionalInfo: {
      calories: '160 kcal',
      protein: '6g',
      fiber: '3g',
      fats: '14g (healthy fats)',
    },
  },
  {
    id: 'energy-bites',
    name: 'Super Dry Fruits Laddu',
    description: 'Natural energy boosters for active lifestyles',
    features: ['0% Added Sugar', 'Raw ingredients', 'Protein Rich'],
    image:
      'https://img.freepik.com/premium-photo/indian-sweet-healthy-dry-fruit-laddu-laddoo_466689-97123.jpg?w=2000',
    weightOptions: [
      { weight: '200g', price: 219, originalPrice: 275 },
      { weight: '400g', price: 419, originalPrice: 525 }
    ],
    ingredients: 'Almonds, Walnut, Cashew, Dates, Honey',
    nutritionalInfo: {
      calories: '140 kcal',
      protein: '4g',
      fiber: '3g',
      sugar: '12g (natural)',
    },
  },
];

// New upcoming products
export const upcomingProducts = [
  {
    id: 'protein-bars',
    name: 'Super Protein Bars',
    description: 'Protein-packed bars for fitness enthusiasts',
    features: ['20g Protein', 'Gluten-Free', 'Vegan'],
    image: '/api/placeholder/400/320',
    comingSoon: '2 weeks',
    ingredients: 'Pea Protein, Dates, Cocoa, Nuts, Plant Extracts',
  },
  {
    id: 'nut-butter',
    name: 'Creamy Nut Butter Blend',
    description: 'Smooth and nutritious spread for breakfast or snacks',
    features: ['No Palm Oil', 'Stone-Ground', 'Pure Ingredients'],
    image: '/api/placeholder/400/320',
    comingSoon: '4 weeks',
    ingredients: 'Almonds, Cashews, Himalayan Salt',
  },
  {
    id: 'trail-mix',
    name: 'Adventure Trail Mix',
    description: 'Perfect snack for hiking and outdoor activities',
    features: ['Energy Boosting', 'Balanced Nutrition', 'Travel Friendly'],
    image: '/api/placeholder/400/320',
    comingSoon: '6 weeks',
    ingredients: 'Nuts, Dried Fruits, Dark Chocolate Chips, Seeds',
  }
];

export default function ShopMain() {
  // This will store the selected weight for each product
  const [selectedWeights, setSelectedWeights] = useState({});
  const [activeTab, setActiveTab] = useState('current');

  // Initialize with default selections (first weight option for each product)
  useEffect(() => {
    const initialWeights = {};
    products.forEach(product => {
      initialWeights[product.id] = product.weightOptions[0].weight;
    });
    setSelectedWeights(initialWeights);
  }, []);

  // Handle weight selection
  const handleWeightChange = (productId, weight) => {
    setSelectedWeights(prev => ({
      ...prev,
      [productId]: weight
    }));
  };

  // Get current price info based on selected weight
  const getCurrentPriceInfo = (product) => {
    const selectedWeight = selectedWeights[product.id];
    if (!selectedWeight) return product.weightOptions[0];
    
    const option = product.weightOptions.find(opt => opt.weight === selectedWeight);
    return option || product.weightOptions[0];
  };

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-6 text-gray-800">
          Our Products
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our range of healthy, natural snacks made with premium ingredients. 
          From energy-boosting laddus to nutritious seed mixes, we have something for everyone.
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm bg-white p-1">
            <button
              className={`px-6 py-3 rounded-md font-medium text-sm ${
                activeTab === 'current'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-700 hover:bg-orange-100'
              } transition-colors duration-200`}
              onClick={() => setActiveTab('current')}
            >
              Current Products
            </button>
            <button
              className={`px-6 py-3 rounded-md font-medium text-sm ${
                activeTab === 'upcoming'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-700 hover:bg-orange-100'
              } transition-colors duration-200`}
              onClick={() => setActiveTab('upcoming')}
            >
              Coming Soon
            </button>
          </div>
        </div>

        {/* Current Products */}
        {activeTab === 'current' && (
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => {
              const currentPriceInfo = getCurrentPriceInfo(product);
              
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <ul className="space-y-2 mb-4">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-gray-600"
                        >
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Weight Selection Buttons */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2 font-medium">Select Weight:</p>
                      <div className="flex gap-2">
                        {product.weightOptions.map((option) => (
                          <button
                            key={option.weight}
                            type="button"
                            onClick={() => handleWeightChange(product.id, option.weight)}
                            className={`px-3 py-2 rounded-md border ${
                              selectedWeights[product.id] === option.weight
                                ? 'bg-orange-500 text-white border-orange-500'
                                : 'bg-white text-gray-700 border-gray-300 hover:border-orange-300'
                            } text-sm font-medium transition-colors duration-200`}
                          >
                            {option.weight}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Price Display */}
                    <div className="flex items-center mb-4">
                      <span className="text-xl font-bold text-orange-600">
                        ₹{currentPriceInfo.price}
                      </span>
                      <span className="ml-2 text-gray-500 line-through text-sm">
                        ₹{currentPriceInfo.originalPrice}
                      </span>
                      <span className="ml-2 text-green-600 text-sm">
                        {Math.round((1 - currentPriceInfo.price / currentPriceInfo.originalPrice) * 100)}% off
                      </span>
                    </div>
                    
                    <Link
                      to={`/shop/${product.id}?weight=${selectedWeights[product.id] || product.weightOptions[0].weight}`}
                      className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={20} />
                      Buy Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Upcoming Products */}
        {activeTab === 'upcoming' && (
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-orange-600 text-white px-4 py-2 rounded-full flex items-center">
                      <Clock size={18} className="mr-2" />
                      <span>Coming in {product.comingSoon}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-600"
                      >
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2 font-medium">Main Ingredients:</p>
                    <p className="text-gray-600 text-sm">{product.ingredients}</p>
                  </div>
                  
                  <button
                    className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-300 flex items-center justify-center gap-2 cursor-not-allowed"
                    disabled
                  >
                    <Clock size={20} />
                    Notify Me
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Newsletter for product updates */}
        <div className="mt-16 bg-orange-100 p-8 rounded-lg shadow-md">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Stay Updated on New Products
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to be the first to know about new product launches, 
              special offers, and exclusive discounts.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-l-md border-t border-b border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 text-white px-6 py-2 rounded-r-md hover:bg-orange-600 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}