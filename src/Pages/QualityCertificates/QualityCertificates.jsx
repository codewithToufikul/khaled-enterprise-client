import React, { useState } from 'react';
import { Download, Eye, CheckCircle, ArrowRight, Phone, Mail, User, Calendar } from 'lucide-react';

const QualityCertificates = () => {
  const [hoveredCertificate, setHoveredCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      name: 'HACCP Certification',
      fullName: 'Hazard Analysis Critical Control Points',
      issuer: 'Bangladesh Standards and Testing Institution (BSTI)',
      issueDate: 'March 2023',
      expiryDate: 'March 2026',
      icon: '🛡️',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      description: 'Food safety management system certification ensuring safe production',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      name: 'ISO 22000',
      fullName: 'Food Safety Management Systems',
      issuer: 'International Organization for Standardization',
      issueDate: 'January 2023',
      expiryDate: 'January 2026',
      icon: '🏆',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      description: 'International standard for food safety management throughout the food chain',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      name: 'Halal Certification',
      fullName: 'Islamic Dietary Laws Compliance',
      issuer: 'Islamic Foundation Bangladesh',
      issueDate: 'February 2023',
      expiryDate: 'February 2025',
      icon: '☪️',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      description: 'Certified compliance with Islamic dietary requirements',
      thumbnail: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 4,
      name: 'BRC Global Standards',
      fullName: 'British Retail Consortium Food Safety',
      issuer: 'British Retail Consortium',
      issueDate: 'April 2023',
      expiryDate: 'April 2026',
      icon: '🇬🇧',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      description: 'Global food safety standard for retailers and food service',
      thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 5,
      name: 'MSC Chain of Custody',
      fullName: 'Marine Stewardship Council Certification',
      issuer: 'Marine Stewardship Council',
      issueDate: 'June 2023',
      expiryDate: 'June 2026',
      icon: '🌊',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
      description: 'Sustainable seafood certification ensuring responsible fishing',
      thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 6,
      name: 'BAP Certification',
      fullName: 'Best Aquaculture Practices',
      issuer: 'Global Aquaculture Alliance',
      issueDate: 'May 2023',
      expiryDate: 'May 2026',
      icon: '🦐',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      description: 'Comprehensive aquaculture certification for environmental responsibility',
      thumbnail: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    }
  ];

  const processSteps = [
    {
      title: 'Receiving',
      description: 'Raw material inspection and quality check',
      icon: '📦',
      color: 'text-teal-600',
      bgColor: 'bg-teal-100'
    },
    {
      title: 'Processing',
      description: 'Cleaning, cutting, and preparation',
      icon: '⚙️',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-100'
    },
    {
      title: 'Quality Control',
      description: 'Laboratory testing and verification',
      icon: '🔬',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    {
      title: 'Freezing',
      description: 'Rapid freezing and temperature control',
      icon: '❄️',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Packing',
      description: 'Final packaging and labeling',
      icon: '📋',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const handleDownload = (certificateName) => {
    // Simulate PDF download
    console.log(`Downloading ${certificateName} certificate...`);
    // In real implementation, this would trigger actual file download
  };

  const handlePreview = (certificateName) => {
    // Simulate certificate preview
    console.log(`Previewing ${certificateName} certificate...`);
    // In real implementation, this would open a modal or new window
  };

  const handleDownloadAll = () => {
    console.log('Downloading all certificates...');
    // In real implementation, this would download a ZIP file with all certificates
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full shadow-lg border border-white/30 mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Internationally Certified</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Quality Standards & 
              <span className="block text-cyan-200">Certifications</span>
            </h1>
            
            <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto opacity-90">
              Khaled Enterprise follows strict international food safety standards including HACCP, ISO 22000, 
              and Halal certifications to ensure premium quality and customer trust.
            </p>

            {/* Quality Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">6+</div>
                <div className="text-sm opacity-90">Active Certificates</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Compliance Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90">Years Certified</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">QC Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-teal-600">Certifications</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each certificate represents our commitment to maintaining the highest standards of quality, 
              safety, and sustainability in seafood export.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
                onMouseEnter={() => setHoveredCertificate(cert.id)}
                onMouseLeave={() => setHoveredCertificate(null)}
              >
                {/* Certificate Header */}
                <div className={`relative h-48 bg-gradient-to-br ${cert.color} overflow-hidden`}>
                  <img
                    src={cert.thumbnail}
                    alt={cert.name}
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  <div className="absolute top-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl">
                        {cert.icon}
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-xs font-semibold text-gray-800">Active</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{cert.name}</h3>
                    <p className="text-sm opacity-90">{cert.fullName}</p>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Issuing Authority</h4>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-gray-900 mb-1">Issued</h5>
                        <p className="text-sm text-gray-600 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {cert.issueDate}
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-1">Expires</h5>
                        <p className="text-sm text-gray-600 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {cert.expiryDate}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 leading-relaxed">{cert.description}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className={`mt-6 space-y-3 transition-all duration-300 ${
                    hoveredCertificate === cert.id ? 'opacity-100' : 'opacity-75'
                  }`}>
                    <button
                      onClick={() => handleDownload(cert.name)}
                      className={`w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r ${cert.color} text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </button>
                    
                    <button
                      onClick={() => handlePreview(cert.name)}
                      className="w-full flex items-center justify-center space-x-2 py-2 px-4 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors duration-300"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Preview</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Quality <span className="text-teal-600">Process Flow</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every step in our process is monitored and controlled to ensure the highest quality standards
            </p>
          </div>

          {/* Desktop Process Flow */}
          <div className="hidden lg:flex items-center justify-between max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center text-center max-w-xs">
                  <div className={`w-20 h-20 ${step.bgColor} rounded-2xl flex items-center justify-center text-3xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                
                {index < processSteps.length - 1 && (
                  <ArrowRight className="w-8 h-8 text-gray-400 mx-6 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Process Flow */}
          <div className="lg:hidden space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-bold text-gray-500 mr-2">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QA Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quality Assurance <span className="text-teal-600">Contact</span>
              </h2>
              <p className="text-lg text-gray-600">
                Get in touch with our quality assurance team for any certification inquiries
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                  <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mx-auto md:mx-0 mb-6 flex items-center justify-center text-white text-3xl">
                    <User />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Imran Hossain</h3>
                  <p className="text-teal-600 font-semibold mb-6">Head of Quality Assurance</p>
                  
                  <div className="space-y-4">
                    <a
                      href="mailto:qa@khaledenterprise.com"
                      className="flex items-center space-x-3 text-gray-700 hover:text-teal-600 transition-colors duration-300"
                    >
                      <Mail className="w-5 h-5" />
                      <span>qa@khaledenterprise.com</span>
                    </a>
                    
                    <a
                      href="tel:+8801712345678"
                      className="flex items-center space-x-3 text-gray-700 hover:text-teal-600 transition-colors duration-300"
                    >
                      <Phone className="w-5 h-5" />
                      <span>+880-1712-345678</span>
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Quick Support</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-teal-50 rounded-xl border border-teal-200">
                      <span className="font-medium text-gray-800">Certificate Verification</span>
                      <span className="text-teal-600 font-bold">Available 24/7</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-cyan-50 rounded-xl border border-cyan-200">
                      <span className="font-medium text-gray-800">Quality Inquiry Response</span>
                      <span className="text-cyan-600 font-bold">Within 2 hours</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                      <span className="font-medium text-gray-800">Document Processing</span>
                      <span className="text-emerald-600 font-bold">Same day</span>
                    </div>
                  </div>

                  <button className="w-full py-3 px-6 bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                    Schedule QA Meeting
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download All Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Complete Certification Package
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Download our complete certification portfolio including all quality standards, 
              test reports, and compliance documentation.
            </p>
            
            <button
              onClick={handleDownloadAll}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              <span>Download All Certificates</span>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl mb-2">📋</div>
                <div className="font-semibold">Complete Documentation</div>
                <div className="text-sm opacity-90">All certificates in PDF format</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔐</div>
                <div className="font-semibold">Secure Download</div>
                <div className="text-sm opacity-90">Password protected files</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🆕</div>
                <div className="font-semibold">Always Updated</div>
                <div className="text-sm opacity-90">Latest versions available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityCertificates;