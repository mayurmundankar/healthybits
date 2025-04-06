import { useState, useEffect } from 'react';

//https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80
const slides = [
  {
    image:
      'https://static.vecteezy.com/system/resources/previews/045/595/418/large_2x/healthy-energy-balls-made-of-dried-fruits-and-nuts-healthy-food-photo.jpg',
    title: 'Natural & Healthy Snacks',
    subtitle: "For Your Family's Wellness",
  },
  {
    image:
      'https://img.freepik.com/premium-photo/indian-sweet-healthy-dry-fruit-laddu-laddoo_466689-97123.jpg?w=2000',
    title: 'Handcrafted with Love',
    subtitle: 'Pure Ingredients, Perfect Taste',
  },
  {
    image:
      'https://imgmedia.lbb.in/media/2021/08/610c0dddbf1229243d8a5843_1628179933562.jpg',
    title: 'Wholesome Goodness',
    subtitle: 'In Every Bite',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
