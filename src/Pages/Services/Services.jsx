import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Fish, 
  Beef, 
  Apple, 
  Truck, 
  FileText, 
  Shield, 
  Clock, 
  Award,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Fish,
      title: 'Seafood Export',
      description: 'Exporting premium fish, shrimp, and other seafood products globally with complete quality assurance and cold chain management.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      id: 2,
      icon: Beef,
      title: 'Meat & Poultry Export',
      description: 'Supplying high-quality frozen and processed meat products including halal-certified chicken, beef, and mutton to international markets.',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      id: 3,
      icon: Apple,
      title: 'Vegetables & Fruits',
      description: 'Exporting fresh and frozen vegetables, tropical fruits, and agricultural products with proper packaging and temperature control.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 4,
      icon: Truck,
      title: 'Logistics Support',
      description: 'Comprehensive logistics solutions including port handling, documentation, customs clearance, and international shipping coordination.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 5,
      icon: FileText,
      title: 'Custom RFQ Solutions',
      description: 'Tailored quotations and customized export solutions to meet specific client requirements and market demands.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 6,
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Complete quality control with laboratory testing, certifications, and compliance with international food safety standards.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const trustPoints = [
    {
      icon: Award,
      title: 'Certified Quality',
      description: 'Halal, HACCP, ISO certified products',
      color: 'text-teal-600'
    },
    {
      icon: Clock,
      title: 'On-time Global Delivery',
      description: 'Reliable shipping to 25+ countries',
      color: 'text-blue-600'
    },
    {
      icon: Shield,
      title: '15+ Years Experience',
      description: 'Proven track record in export industry',
      color: 'text-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-teal-600">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At Khaled Enterprise, we provide global seafood and food export solutions with 
            reliability, quality, and transparency.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What We <span className="text-teal-600">Offer</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive export services designed to meet your international trade requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-teal-600">Us?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trust and reliability built through years of excellence in export services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <point.icon className={`w-8 h-8 ${point.color}`} />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {point.title}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-teal-600 mb-2">2000+</div>
              <div className="text-gray-600 text-sm">MT Monthly Capacity</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600 text-sm">Export Countries</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner with Khaled Enterprise Today
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Ready to start your export journey? Get a customized quotation tailored to your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/rfq"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <FileText className="w-5 h-5 mr-2" />
              Request a Quotation (RFQ)
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal-700 text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-teal-800 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Need Something Specific?
            </h3>
            <p className="text-gray-600 mb-6">
              We offer customized solutions for unique requirements. Contact our team to discuss your specific export needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to="/products"
                className="flex items-center justify-center px-4 py-3 bg-white text-gray-700 rounded-lg hover:bg-teal-50 hover:text-teal-600 transition-colors duration-300 shadow-sm"
              >
                <Fish className="w-4 h-4 mr-2" />
                View Products
              </Link>
              
              <Link
                to="/quality-certificates"
                className="flex items-center justify-center px-4 py-3 bg-white text-gray-700 rounded-lg hover:bg-teal-50 hover:text-teal-600 transition-colors duration-300 shadow-sm"
              >
                <Award className="w-4 h-4 mr-2" />
                Our Certificates
              </Link>
              
              <Link
                to="/traceability"
                className="flex items-center justify-center px-4 py-3 bg-white text-gray-700 rounded-lg hover:bg-teal-50 hover:text-teal-600 transition-colors duration-300 shadow-sm"
              >
                <Shield className="w-4 h-4 mr-2" />
                Traceability
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;