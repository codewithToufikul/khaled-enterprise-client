import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  FileText, 
  Package, 
  Factory, 
  Shield, 
  Download,
  AlertCircle,
  Clock,
  Thermometer
} from 'lucide-react';

const Traceability = () => {
  const [batchCode, setBatchCode] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');

  // Sample batch data for demonstration
  const sampleBatchData = {
    'KE-2025-BTS-001': {
      productName: 'Black Tiger Shrimp (Premium Grade)',
      productImage: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      origin: 'Cox\'s Bazar Shrimp Farm, Bangladesh',
      harvestDate: '05 September 2025',
      processingPlant: 'Khaled Enterprise Processing Unit, Chattogram',
      processingDate: '06 September 2025',
      qcResults: '✅ Passed – Moisture 6%, Free from contamination',
      packingDate: '07 September 2025',
      certifications: ['Halal', 'HACCP', 'ISO 22000'],
      batchSize: '2.5 MT',
      temperature: '-18°C',
      expiryDate: '07 September 2027',
      destinationPort: 'Chittagong Port, Bangladesh'
    },
    'KE-2025-SAL-002': {
      productName: 'Atlantic Salmon Fillet (Grade A)',
      productImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      origin: 'Norwegian Fish Farm, Bergen',
      harvestDate: '03 September 2025',
      processingPlant: 'Khaled Enterprise Processing Unit, Chattogram',
      processingDate: '04 September 2025',
      qcResults: '✅ Passed – Fat 12%, Omega-3 rich',
      packingDate: '05 September 2025',
      certifications: ['MSC', 'HACCP', 'BRC'],
      batchSize: '1.8 MT',
      temperature: '-20°C',
      expiryDate: '05 September 2027',
      destinationPort: 'Chittagong Port, Bangladesh'
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    setError('');
    setSearchResult(null);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const result = sampleBatchData[batchCode.toUpperCase()];
    
    if (result) {
      setSearchResult({ ...result, batchCode: batchCode.toUpperCase() });
    } else {
      setError('No record found. Please check your batch code.');
    }
    
    setIsSearching(false);
  };

  const handleDownloadReport = (batchCode) => {
    console.log(`Downloading lab report for batch: ${batchCode}`);
    // In real implementation, this would download the actual PDF
  };

  const traceabilityTimeline = searchResult ? [
    {
      step: 'Origin',
      title: 'Harvested',
      date: searchResult.harvestDate,
      location: searchResult.origin,
      icon: MapPin,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      step: 'Processing',
      title: 'Processed',
      date: searchResult.processingDate,
      location: searchResult.processingPlant,
      icon: Factory,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      step: 'Quality Control',
      title: 'Quality Tested',
      date: searchResult.processingDate,
      location: 'QC Laboratory, Chattogram',
      icon: CheckCircle,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200'
    },
    {
      step: 'Packaging',
      title: 'Packed',
      date: searchResult.packingDate,
      location: searchResult.processingPlant,
      icon: Package,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ] : [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Seafood Traceability Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-slate-900/70 to-cyan-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full shadow-lg border border-white/30 mb-6">
              <Search className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Complete Transparency</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                Trace Your Product
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl leading-relaxed opacity-90 mb-8">
              Enter your batch or lot code to see the full journey of your product from origin to delivery. 
              Khaled Enterprise ensures complete transparency and quality control.
            </p>
          </div>

          {/* Sample Batch Codes */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8">
            <p className="text-sm font-medium mb-3 opacity-90">Try these sample batch codes:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setBatchCode('KE-2025-BTS-001')}
                className="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg text-sm font-mono transition-colors duration-300"
              >
                KE-2025-BTS-001
              </button>
              <button
                onClick={() => setBatchCode('KE-2025-SAL-002')}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-sm font-mono transition-colors duration-300"
              >
                KE-2025-SAL-002
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Batch Lookup Section */}
      <section className="py-16 -mt-8 relative z-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Lookup</h2>
                <p className="text-gray-600">Enter your batch or lot code to trace your product</p>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    value={batchCode}
                    onChange={(e) => setBatchCode(e.target.value)}
                    placeholder="Enter Batch/Lot Code (e.g., KE-2025-BTS-001)"
                    className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 font-mono"
                    required
                  />
                  <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                </div>

                <button
                  type="submit"
                  disabled={isSearching || !batchCode.trim()}
                  className="w-full py-4 px-6 bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSearching ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Searching...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      <span>Trace Product</span>
                    </>
                  )}
                </button>
              </div>

              {error && (
                <div className="flex items-center space-x-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-700 font-medium">{error}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Search Results Section */}
      {searchResult && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Traceability Report for <span className="text-teal-600 font-mono">{searchResult.batchCode}</span>
                </h2>
                <p className="text-lg text-gray-600">Complete journey from source to destination</p>
              </div>

              {/* Product Overview Card */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <img
                      src={searchResult.productImage}
                      alt={searchResult.productName}
                      className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{searchResult.productName}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Package className="w-5 h-5 text-teal-600" />
                          <span className="text-gray-600">Batch Size: <strong>{searchResult.batchSize}</strong></span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Thermometer className="w-5 h-5 text-cyan-600" />
                          <span className="text-gray-600">Storage: <strong>{searchResult.temperature}</strong></span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-emerald-600" />
                          <span className="text-gray-600">Expiry: <strong>{searchResult.expiryDate}</strong></span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-blue-600" />
                          <span className="text-gray-600">Port: <strong>{searchResult.destinationPort}</strong></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Traceability Timeline */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Product Journey Timeline</h3>
                
                {/* Desktop Timeline */}
                <div className="hidden lg:flex items-center justify-between max-w-6xl mx-auto">
                  {traceabilityTimeline.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex flex-col items-center text-center max-w-xs">
                        <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-xl mb-4`}>
                          <step.icon className="w-8 h-8" />
                        </div>
                        <div className={`px-3 py-1 ${step.bgColor} ${step.borderColor} border rounded-full text-xs font-semibold mb-2`}>
                          {step.step}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-sm text-gray-600 mb-1">{step.date}</p>
                        <p className="text-xs text-gray-500 text-center">{step.location}</p>
                      </div>
                      
                      {index < traceabilityTimeline.length - 1 && (
                        <div className="w-16 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 mx-4"></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Timeline */}
                <div className="lg:hidden space-y-6">
                  {traceabilityTimeline.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className={`inline-block px-3 py-1 ${step.bgColor} ${step.borderColor} border rounded-full text-xs font-semibold mb-2`}>
                          {step.step}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-sm text-gray-600 mb-1">{step.date}</p>
                        <p className="text-sm text-gray-500">{step.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="w-6 h-6 text-green-600" />
                    <h4 className="text-lg font-bold text-gray-900">Origin</h4>
                  </div>
                  <p className="text-gray-600">{searchResult.origin}</p>
                  <div className="mt-3">
                    <span className="text-sm text-gray-500">Harvest Date:</span>
                    <p className="font-semibold text-gray-900">{searchResult.harvestDate}</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <Factory className="w-6 h-6 text-blue-600" />
                    <h4 className="text-lg font-bold text-gray-900">Processing</h4>
                  </div>
                  <p className="text-gray-600">{searchResult.processingPlant}</p>
                  <div className="mt-3">
                    <span className="text-sm text-gray-500">Processing Date:</span>
                    <p className="font-semibold text-gray-900">{searchResult.processingDate}</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-teal-600" />
                    <h4 className="text-lg font-bold text-gray-900">Quality Control</h4>
                  </div>
                  <p className="text-gray-600">{searchResult.qcResults}</p>
                  <button
                    onClick={() => handleDownloadReport(searchResult.batchCode)}
                    className="mt-3 flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium transition-colors duration-300"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Lab Report</span>
                  </button>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <Package className="w-6 h-6 text-purple-600" />
                    <h4 className="text-lg font-bold text-gray-900">Packaging</h4>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-gray-500">Packing Date:</span>
                      <p className="font-semibold text-gray-900">{searchResult.packingDate}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Batch Size:</span>
                      <p className="font-semibold text-gray-900">{searchResult.batchSize}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="w-6 h-6 text-emerald-600" />
                    <h4 className="text-lg font-bold text-gray-900">Certifications</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {searchResult.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full border border-emerald-200"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                    <h4 className="text-lg font-bold text-gray-900">Storage & Expiry</h4>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-gray-500">Temperature:</span>
                      <p className="font-semibold text-gray-900">{searchResult.temperature}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Best Before:</span>
                      <p className="font-semibold text-gray-900">{searchResult.expiryDate}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Privacy Note */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Public View Notice</h4>
                    <p className="text-blue-800 text-sm">
                      This is a public summary of product traceability data. Some sensitive internal details 
                      are hidden for privacy and security reasons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to Import from Khaled Enterprise?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Experience complete transparency and premium quality with our traceable seafood products.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/rfq"
              className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
            >
              <FileText className="w-5 h-5 mr-2" />
              Request for Quotation (RFQ)
            </Link>
            <Link
              to="/products"
              className="px-8 py-4 bg-teal-700 text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-teal-800 transition-all duration-300 flex items-center justify-center"
            >
              <Package className="w-5 h-5 mr-2" />
              View Our Products
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl">🔍</div>
              <div className="font-semibold">Full Traceability</div>
              <div className="text-sm opacity-90">Complete product journey tracking</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🏆</div>
              <div className="font-semibold">Premium Quality</div>
              <div className="text-sm opacity-90">Multiple international certifications</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🤝</div>
              <div className="font-semibold">Trusted Partner</div>
              <div className="text-sm opacity-90">15+ years of excellence</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Traceability;