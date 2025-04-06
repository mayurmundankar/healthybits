import { Mail, Phone } from 'lucide-react';

export default function TopStrip() {
  return (
    <div className="bg-orange-400 text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <p className="font-medium">Get 10% off on your first order!</p>
        <div className="flex gap-6">
          <a
            href="mailto:contact@healthybits.com"
            className="flex items-center gap-2 hover:text-orange-200"
          >
            <Mail size={16} />
            contact@healthybits.com
          </a>
          <a
            href="tel:+911234567890"
            className="flex items-center gap-2 hover:text-orange-200"
          >
            <Phone size={16} />
            +91-12345-67890
          </a>
        </div>
      </div>
    </div>
  );
}
// orange-400
