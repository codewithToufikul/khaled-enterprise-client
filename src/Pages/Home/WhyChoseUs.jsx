import React from 'react';
import { Shield, Globe, Settings, CheckCircle, Award, Clock, Users } from 'lucide-react';

const WhyChoseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We are committed to delivering consistent quality and timely shipments.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Consistent Quality', 'Timely Delivery', 'Reliable Partnership']
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Our extensive network allows us to source products from any country, ensuring that you get the best value and quality.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      image: 'https://i.ibb.co.com/q6m3DBr/qj-barayuga-n81-G2-UVKo-4-unsplash-1.jpg',
      features: ['Worldwide Sourcing', 'Best Value', 'Quality Assurance']
    },
    {
      icon: Settings,
      title: 'Customized Solutions',
      description: 'We understand that every client is unique, and we tailor our services to meet your specific requirements.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Tailored Services', 'Unique Solutions', 'Client-Focused']
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '99%', label: 'On-Time Delivery', icon: Clock }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-teal-100 mb-6">
            <Award className="w-4 h-4 text-teal-600 mr-2" />
            <span className="text-sm font-medium text-teal-700">Our Advantages</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">Khaled Enterprise?</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what sets us apart in the global trade industry and why leading companies trust us with their sourcing and export needs.
          </p>
        </div>

        {/* Main Reasons */}
        <div className="space-y-16 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content Side */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className={`w-16 h-16 ${reason.bgColor} rounded-2xl flex items-center justify-center`}>
                  <reason.icon className={`w-8 h-8 ${reason.color}`} />
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {reason.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {reason.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className={`w-5 h-5 ${reason.color} flex-shrink-0`} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className={`absolute top-6 left-6 ${reason.bgColor} backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-white/20`}>
                    <div className="flex items-center space-x-2">
                      <reason.icon className={`w-5 h-5 ${reason.color}`} />
                      <span className="font-semibold text-gray-800">{reason.title}</span>
                    </div>
                  </div>

                  {/* Bottom Badge */}
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                    <div className="text-center">
                      <div className={`text-lg font-bold ${reason.color}`}>✓</div>
                      <div className="text-xs text-gray-700 font-medium">Verified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Track <span className="text-teal-600">Record</span>
            </h3>
            <p className="text-lg text-gray-600">
              Numbers that speak for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Khaled Enterprise for their global trade needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Get Started Today
            </button>
            <button className="px-8 py-4 bg-teal-700 text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-teal-800 transition-all duration-300">
              Contact Us
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
            <div className="space-y-2">
              <div className="text-2xl">🏆</div>
              <div className="font-semibold">Award Winning</div>
              <div className="text-sm opacity-90">Industry recognition</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🤝</div>
              <div className="font-semibold">Trusted Partner</div>
              <div className="text-sm opacity-90">Long-term relationships</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">⚡</div>
              <div className="font-semibold">Quick Response</div>
              <div className="text-sm opacity-90">24/7 support available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoseUs;