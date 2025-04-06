import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Are your products really sugar-free?",
    answer: "Yes! We never add any refined sugars to our products. Any sweetness comes naturally from the fruits we use."
  },
  {
    question: "How long do your products stay fresh?",
    answer: "Our products typically stay fresh for 3-4 months when stored in a cool, dry place in an airtight container."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we only ship within India. We're working on expanding our shipping network."
  },
  {
    question: "Are your products suitable for diabetics?",
    answer: "While our products don't contain added sugars, we recommend consulting with your healthcare provider about specific dietary needs."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards, UPI, and net banking through our secure Razorpay payment gateway."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-orange-500" />
                ) : (
                  <ChevronDown className="text-orange-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-orange-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}