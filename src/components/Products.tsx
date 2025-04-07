import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const products = [
  {
    id: 'fruit-mix',
    name: 'Dry-Fruit Mix Laddu',
    description: 'A delightful blend of premium dried fruits',
    features: ['High in Fiber', 'Natural Sweetness', 'No Added Sugar'],
    image:
      'https://static.vecteezy.com/system/resources/previews/045/595/418/large_2x/healthy-energy-balls-made-of-dried-fruits-and-nuts-healthy-food-photo.jpg',
    price: 299,
    originalPrice: 349,
    weight: '250g',
    ingredients: 'Almonds, Dates, Pumpkin Seeds, Flax Seeds, more...',
    nutritionalInfo: {
      calories: '120 kcal',
      protein: '2g',
      fiber: '4g',
      sugar: '18g (natural)',
    },
  },
  {
    id: 'nut-medley',
    name: 'Roasted Mix Seeds',
    description: 'Carefully selected mix of nutritious seeds & nuts',
    features: ['Rich in Protein', 'Heart Healthy', 'Omega-3 Rich'],
    image:
      'https://imgmedia.lbb.in/media/2021/08/610c0dddbf1229243d8a5843_1628179933562.jpg',
    price: 449,
    originalPrice: 549,
    weight: '200g',
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
    name: 'Energy Bits Laddu',
    description: 'Natural energy boosters for active lifestyles',
    features: ['Plant Based', 'Raw ingredients', 'Protein Rich'],
    image:
      'https://img.freepik.com/premium-photo/indian-sweet-healthy-dry-fruit-laddu-laddoo_466689-97123.jpg?w=2000',
    price: 349,
    originalPrice: 449,
    weight: '180g',
    ingredients: 'Dates, Almonds, Cocoa, Chia Seeds',
    nutritionalInfo: {
      calories: '140 kcal',
      protein: '4g',
      fiber: '3g',
      sugar: '12g (natural)',
    },
  },
];

export default function Products() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Featured Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
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
                <ul className="space-y-2 mb-6">
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
                <Link
                  to={`/shop/${product.id}`}
                  className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
