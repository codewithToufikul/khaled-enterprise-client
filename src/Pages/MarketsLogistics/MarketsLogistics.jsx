import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  MapPin, 
  Truck, 
  Calendar, 
  FileText, 
  Thermometer, 
  Package, 
  Shield, 
  Plane, 
  Ship, 
  ArrowRight,
  Clock,
  CheckCircle,
  Mail
} from 'lucide-react';

const MarketsLogistics = () => {
  const exportMarkets = [
    { country: 'USA', flag: '🇺🇸', region: 'North America' },
    { country: 'UK', flag: '🇬🇧', region: 'Europe' },
    { country: 'UAE', flag: '🇦🇪', region: 'Middle East' },
    { country: 'Japan', flag: '🇯🇵', region: 'Asia Pacific' },
    { country: 'Germany', flag: '🇩🇪', region: 'Europe' },
    { country: 'Australia', flag: '🇦🇺', region: 'Oceania' },
    { country: 'Spain', flag: '🇪🇸', region: 'Europe' },
    { country: 'Saudi Arabia', flag: '🇸🇦', region: 'Middle East' }
  ];

  const keyPorts = [
    {
      name: 'Chattogram (FOB)',
      icon: Ship,
      leadTime: '7–14 days',
      description: 'Main seaport for container shipments',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Cox\'s Bazar (Regional)',
      icon: MapPin,
      leadTime: '3–10 days',
      description: 'Regional hub for nearby destinations',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Dhaka (Air Export)',
      icon: Plane,
      leadTime: '2–5 days',
      description: 'Air freight for urgent shipments',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const logisticsServices = [
    {
      icon: Thermometer,
      title: 'Cold Chain Management',
      description: 'Temperature-controlled storage & transport',
      color: 'text-cyan-600'
    },
    {
      icon: Package,
      title: 'Packaging & Palletization',
      description: 'Export-grade packing & labeling',
      color: 'text-orange-600'
    },
    {
      icon: FileText,
      title: 'Documentation & Compliance',
      description: 'Certificates, customs paperwork, HS codes',
      color: 'text-indigo-600'
    },
    {
      icon: Truck,
      title: 'Freight Booking & Tracking',
      description: 'Sea/air freight coordination',
      color: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Insurance & Risk Management',
      description: 'Cargo insurance & claims support',
      color: 'text-red-600'
    }
  ];

  const incoterms = ['FOB', 'CFR', 'CIF', 'EXW'];
  const shippingModes = [
    { name: 'Sea Freight (FCL)', icon: Ship, description: 'Full Container Load' },
    { name: 'Sea Freight (LCL)', icon: Ship, description: 'Less-than-Container Load' },
    { name: 'Air Freight', icon: Plane, description: 'Fast air transport' },
    { name: 'Express Courier', icon: Package, description: 'Door-to-door delivery' }
  ];

  const logisticsFlow = [
    { step: 'Order Received', icon: FileText, color: 'text-blue-600' },
    { step: 'Processing', icon: Package, color: 'text-green-600' },
    { step: 'Cold Storage', icon: Thermometer, color: 'text-cyan-600' },
    { step: 'Export Clearance', icon: CheckCircle, color: 'text-purple-600' },
    { step: 'Shipping', icon: Ship, color: 'text-orange-600' },
    { step: 'Delivery', icon: MapPin, color: 'text-teal-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Markets & <span className="text-teal-600">Logistics</span>
          </h1>
          <p className="text-lg md:text-xl text-teal-600 font-medium mb-6">
            Connecting premium seafood to buyers across the globe with reliable logistics and documentation.
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From sourcing to delivery, we handle every aspect of international trade with precision and reliability.
          </p>
        </div>
      </section>

      {/* Export Markets */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-teal-600">Export Markets</span>
            </h2>
            <p className="text-gray-600">Serving 25+ countries worldwide</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
            {exportMarkets.map((market, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-2">{market.flag}</div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{market.country}</h3>
                <p className="text-xs text-gray-500">{market.region}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-teal-50 rounded-full border border-teal-200">
              <Globe className="w-4 h-4 text-teal-600 mr-2" />
              <span className="text-sm font-medium text-teal-800">25+ Countries Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Ports & Lead Times */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key <span className="text-teal-600">Ports & Lead Times</span>
            </h2>
            <p className="text-gray-600">Strategic locations for efficient global shipping</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyPorts.map((port, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 ${port.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <port.icon className={`w-6 h-6 ${port.color}`} />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{port.name}</h3>
                
                <div className="flex items-center mb-3">
                  <Clock className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="font-semibold text-teal-600">{port.leadTime}</span>
                </div>
                
                <p className="text-gray-600 text-sm">{port.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Logistics <span className="text-teal-600">Services</span>
            </h2>
            <p className="text-gray-600">Comprehensive solutions for international trade</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {logisticsServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incoterms & Shipping Options */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Incoterms */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Supported <span className="text-teal-600">Incoterms</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {incoterms.map((term, index) => (
                  <div
                    key={index}
                    className="bg-teal-50 rounded-lg p-4 text-center border border-teal-200"
                  >
                    <div className="font-bold text-teal-800">{term}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Modes */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Shipping <span className="text-teal-600">Options</span>
              </h3>
              <div className="space-y-4">
                {shippingModes.map((mode, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <mode.icon className="w-5 h-5 text-teal-600" />
                    <div>
                      <div className="font-semibold text-gray-900">{mode.name}</div>
                      <div className="text-sm text-gray-600">{mode.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Flow */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Logistics <span className="text-teal-600">Flow</span>
            </h2>
            <p className="text-gray-600">Step-by-step process from order to delivery</p>
          </div>

          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-between max-w-5xl mx-auto">
            {logisticsFlow.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 border border-gray-100">
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <div className="text-sm font-semibold text-gray-900">{step.step}</div>
                </div>
                {index < logisticsFlow.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-4" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-4">
            {logisticsFlow.map((step, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center border border-gray-100 flex-shrink-0">
                  <step.icon className={`w-5 h-5 ${step.color}`} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{step.step}</div>
                  <div className="text-sm text-gray-500">Step {index + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Global <span className="text-teal-600">Network</span>
            </h2>
            <p className="text-gray-600">Our worldwide shipping network</p>
          </div>

          <div className="bg-gray-200 rounded-2xl h-64 md:h-80 flex items-center justify-center border border-gray-300">
            <div className="text-center text-gray-500">
              <Globe className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Interactive World Map</p>
              <p className="text-sm">Shipping routes and destinations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Logistics Plan?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Get tailored shipping solutions and competitive rates for your specific requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/rfq"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <FileText className="w-5 h-5 mr-2" />
              Request RFQ
            </Link>
            
            <a
              href="mailto:logistics@khaledenterprise.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal-700 text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-teal-800 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Logistics Team
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl">🚚</div>
              <div className="font-semibold">Fast Processing</div>
              <div className="text-sm opacity-90">24-48 hour quote turnaround</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🌍</div>
              <div className="font-semibold">Global Reach</div>
              <div className="text-sm opacity-90">Shipping to 25+ countries</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">📋</div>
              <div className="font-semibold">Full Documentation</div>
              <div className="text-sm opacity-90">Complete export paperwork</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketsLogistics;