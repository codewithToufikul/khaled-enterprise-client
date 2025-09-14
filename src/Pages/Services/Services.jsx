import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Fish, 
  Shirt,
  Users, 
  Truck, 
  FileText, 
  Shield, 
  Clock, 
  Award,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import StayConnected from '../../Components/StayConnected';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Fish,
      title: 'Seafood Export',
      description: 'We specialize in sourcing and exporting the freshest, sustainably caught seafood from Bangladesh. Our commitment to quality ensures that every shipment meets international standards and arrives in perfect condition. We handle everything from quality control to timely delivery, making sure you get the best seafood available.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      image: 'https://i.ibb.co.com/PGBPGd2Q/lothar-boris-piltz-r-Yt-UMxs-Bq-BE-unsplash-1.jpg',
      features: ['Sustainably Caught', 'International Standards', 'Quality Control', 'Timely Delivery']
    },
    {
      id: 2,
      icon: Shirt,
      title: 'Garment Export',
      description: 'Our garment export service focuses on high-quality, ethically produced clothing that aligns with the latest fashion trends and international standards. We work closely with reputable manufacturers to ensure that each piece reflects excellence in craftsmanship and ethical production.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      image: 'https://i.ibb.co.com/jZqD5wwK/45-1.jpg',
      features: ['High Quality', 'Ethical Production', 'Fashion Trends', 'Excellence in Craftsmanship']
    },
    {
      id: 3,
      icon: Users,
      title: 'Product Sourcing Agent',
      description: 'As your dedicated product sourcing partner, we connect you with the best suppliers and manufacturers worldwide. Whether you need raw materials, finished goods, or niche products, we leverage our extensive global network and industry expertise to find the perfect solutions tailored to your business needs.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Global Network', 'Best Suppliers', 'Industry Expertise', 'Tailored Solutions']
    }
  ];

  const trustPoints = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Consistency and quality are at the core of everything we do',
      color: 'text-teal-600'
    },
    {
      icon: Award,
      title: 'Global Network',
      description: 'We have strong connections worldwide, ensuring the best sourcing and export solutions',
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      title: 'Customized Service',
      description: 'We adapt to your unique business requirements, providing tailored solutions that help you succeed',
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
            At Khaled Enterprise, we offer a diverse range of services designed to meet your business needs with the utmost quality and reliability.
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
              Our comprehensive range of services designed to meet your international business needs
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content Side */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className={`w-5 h-5 ${service.color} flex-shrink-0`} />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-105"
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Floating Badge */}
                    <div className={`absolute top-6 left-6 ${service.bgColor} backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-white/20`}>
                      <div className="flex items-center space-x-2">
                        <service.icon className={`w-5 h-5 ${service.color}`} />
                        <span className="font-semibold text-gray-800">{service.title}</span>
                      </div>
                    </div>

                    {/* Bottom Badge */}
                    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                      <div className="text-center">
                        <div className={`text-lg font-bold ${service.color}`}>✓</div>
                        <div className="text-xs text-gray-700 font-medium">Premium Service</div>
                      </div>
                    </div>
                  </div>
                </div>
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
              Why Choose <span className="text-teal-600">Khaled Enterprise?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in the global trade industry
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
              <div className="text-3xl font-bold text-teal-600 mb-2">100+</div>
              <div className="text-gray-600 text-sm">Quality Products</div>
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
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Contact us today to learn more about how our services can benefit your business and help you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <FileText className="w-5 h-5 mr-2" />
              Contact Us Today
            </Link>
            
          </div>
        </div>
      </section>
      <StayConnected/>
    </div>
  );
};

export default Services;