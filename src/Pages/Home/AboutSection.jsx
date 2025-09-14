import React from 'react';
import { 
  Globe, 
  Award, 
  Users, 
  Handshake, 
  MapPin, 
  Building2,
  CheckCircle,
  Star,
  TrendingUp,
  Shield
} from 'lucide-react';

const AboutSection = () => {
  const keyFeatures = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'UK headquarters with worldwide operations',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Highest standards in seafood and garments',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: Handshake,
      title: 'Trusted Partnership',
      description: 'British-Bangladeshi joint venture excellence',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every product meets international standards',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    }
  ];

  const locations = [
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      role: 'Headquarters',
      description: 'Strategic oversight and business excellence',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      country: 'Bangladesh',
      flag: '🇧🇩',
      role: 'Operations Hub',
      description: 'High-quality production and craftsmanship',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience', icon: TrendingUp },
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Quality Rating', icon: Star }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-teal-100 mb-6">
            <Building2 className="w-4 h-4 text-teal-600 mr-2" />
            <span className="text-sm font-medium text-teal-700">Our Story</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">Khaled Enterprise</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Content Side */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Khaled Enterprise is a <span className="font-semibold text-teal-600">trusted name in global trade</span>, 
                with headquarters in the UK and operations in Bangladesh. Our joint venture combines the best of 
                British business standards with the rich, high-quality craftsmanship of Bangladesh.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We export premium <span className="font-semibold">seafood and garments</span> to clients worldwide, 
                ensuring that every product meets the highest standards of quality and reliability. Our British 
                ownership ensures a commitment to <span className="font-semibold text-teal-600">excellence and trust</span> in every partnership.
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Side */}
          <div className="space-y-8">
            
            {/* Locations */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Global Presence</h3>
              
              {locations.map((location, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-2xl p-8 text-white bg-gradient-to-r ${location.color} shadow-xl`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{location.flag}</div>
                      <div>
                        <h4 className="text-xl font-bold">{location.country}</h4>
                        <p className="text-sm opacity-90">{location.role}</p>
                      </div>
                    </div>
                    <MapPin className="w-8 h-8 opacity-60" />
                  </div>
                  <p className="mt-4 text-sm opacity-90">{location.description}</p>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 -translate-x-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-teal-600">Achievements</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and global impact
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

        {/* Values Section */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Our Core Values</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold">Excellence</h4>
              <p className="text-sm text-teal-100">
                Committed to delivering the highest quality products and services
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <Handshake className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold">Trust</h4>
              <p className="text-sm text-teal-100">
                Building lasting partnerships based on reliability and transparency
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold">Global Vision</h4>
              <p className="text-sm text-teal-100">
                Connecting markets worldwide with premium quality products
              </p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-xl font-medium">
              "Bridging British Excellence with Bangladeshi Craftsmanship"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;