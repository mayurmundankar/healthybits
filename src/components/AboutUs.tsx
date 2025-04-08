import { Users, Award, Leaf, Heart } from 'lucide-react';
import React from 'react';

export default function AboutUs() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            At Healthy Bits, we believe that healthy snacking should never compromise on taste. 
            Our journey began with a simple idea: create delicious snacks using only natural ingredients.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To transform snacking habits by providing nutritious, delicious alternatives 
                that support overall well-being without compromising on taste or quality.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To become the leading provider of healthy, natural snacks that people 
                love and trust, making wholesome eating accessible to everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="h-12 w-12 text-orange-500 mx-auto mb-4" />,
                title: 'Natural Ingredients',
                description: 'We use only the finest natural ingredients with no artificial additives.',
              },
              {
                icon: <Heart className="h-12 w-12 text-orange-500 mx-auto mb-4" />,
                title: 'Health Conscious',
                description: 'Every product is designed with your wellbeing in mind.',
              },
              {
                icon: <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />,
                title: 'Quality Assurance',
                description: 'We maintain the highest standards of quality and safety.',
              },
              {
                icon: <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />,
                title: 'Community Focus',
                description: 'Supporting local communities through ethical sourcing practices.',
              },
            ].map((value, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                {value.icon}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & CEO',
                image: '/api/placeholder/300/300',
                bio: 'With a passion for nutrition and healthy living, Sarah founded Healthy Bits to share her love for natural snacks.',
              },
              {
                name: 'David Chen',
                role: 'Head Chef',
                image: '/api/placeholder/300/300',
                bio: 'David brings 15 years of culinary expertise, creating recipes that balance nutrition with amazing flavors.',
              },
              {
                name: 'Priya Patel',
                role: 'Nutritionist',
                image: '/api/placeholder/300/300',
                bio: 'As our nutrition expert, Priya ensures every Healthy Bits product delivers optimal health benefits.',
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-orange-500 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}