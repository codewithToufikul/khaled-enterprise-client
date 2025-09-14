import React from 'react';
import { Fish, Shirt, Users, CheckCircle, Globe, Award } from 'lucide-react';

const OurServiceSection = () => {
  const services = [
    {
      icon: Fish,
      title: 'Seafood Export',
      description: 'We source and export the finest, sustainably caught seafood from Bangladesh, ensuring top-notch quality and freshness for clients worldwide.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      features: ['Sustainably Caught', 'Premium Quality', 'Global Delivery']
    },
    {
      icon: Shirt,
      title: 'Garment Export',
      description: 'We provide high-quality, ethically produced garments that meet international standards, delivering stylish and durable clothing to customers everywhere.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      features: ['Ethically Produced', 'International Standards', 'Stylish & Durable']
    },
    {
      icon: Users,
      title: 'Product Sourcing Agent',
      description: 'As a UK-owned company with a strong presence in Bangladesh, we bring unparalleled reliability and global expertise to our sourcing services. We connect our clients with the best suppliers and manufacturers worldwide, ensuring that every product meets stringent quality standards.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      features: ['UK-Owned Reliability', 'Global Expertise', 'Quality Standards']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-teal-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Khaled Enterprise, we offer a comprehensive range of services designed to meet 
            the diverse needs of our global clients.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${service.borderColor} hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className={`w-4 h-4 ${service.color}`} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-200">
          <div className="text-center">
            <div className="flex justify-center space-x-8 mb-6">
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-teal-600" />
                <span className="font-semibold text-gray-900">British Heritage</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-6 h-6 text-cyan-600" />
                <span className="font-semibold text-gray-900">Global Expertise</span>
              </div>
            </div>
            <p className="text-lg text-gray-700 font-medium">
              Our British heritage guarantees a commitment to <span className="text-teal-600">excellence, trust, and strong business relationships.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServiceSection;