// 2nd code
import { Mail, Phone } from 'lucide-react';
import React from 'react';

export default function TopStrip() {
  return (
    <div className="bg-orange-400 text-white py-2 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="font-medium w-full text-center md:text-left mb-2 md:mb-0">Get 10% off on your first order! Use code: HEALTHY10</p>
        <div className="flex gap-6">
          <a
            href="mailto:info@healthybits.in"
            className="flex items-center gap-2 hover:text-orange-200"
          >
            <Mail size={16} />
            info@healthybits.in
          </a>
          <a
            href="tel:9370060963"
            className="flex items-center gap-2 hover:text-orange-200"
          >
            <Phone size={16} />
            9370060963
          </a>
        </div>
      </div>
    </div>
  );
}



// 1st code
// import { Mail, Phone } from 'lucide-react';
// import React from 'react';

// export default function TopStrip() {
//   return (
//     <div className="bg-orange-400 text-white py-2 px-4">
//       <div className="container mx-auto flex justify-between items-center text-sm">
//         <p className="font-medium">Get 10% off on your first order!</p>
//         <div className="flex gap-6">
//           <a
//             href="mailto:info@healthybits.in"
//             className="flex items-center gap-2 hover:text-orange-200"
//           >
//             <Mail size={16} />
//             info@healthybits.in
//           </a>
//           <a
//             href="tel:9370060963"
//             className="flex items-center gap-2 hover:text-orange-200"
//           >
//             <Phone size={16} />
//             +91-9370060963
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
