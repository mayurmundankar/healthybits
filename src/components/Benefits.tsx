import { Leaf, Ban, Wheat, Home } from 'lucide-react';

const benefits = [
  {
    icon: Ban,
    title: "0% Sugar",
    description: "No added sugars, only natural sweetness"
  },
  {
    icon: Leaf,
    title: "No Preservatives",
    description: "100% natural ingredients"
  },
  {
    icon: Wheat,
    title: "Gluten-Free",
    description: "Safe for gluten-sensitive individuals"
  },
  {
    icon: Home,
    title: "Handmade & Homemade",
    description: "Crafted with care in small batches"
  }
];

export default function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Health Benefits</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}