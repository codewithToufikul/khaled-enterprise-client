import React, { useState, useRef, useEffect } from 'react';

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'general',
    message: '',
    preferredContact: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeOffice, setActiveOffice] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showOfficeDetails, setShowOfficeDetails] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Get detailed responses within 24 hours',
      contact: 'export@aquaexport.com',
      action: 'Send Email',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Speak directly with our export team',
      contact: '+880-1234-567890',
      action: 'Call Now',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      description: 'Quick responses for urgent inquiries',
      contact: '+880-1234-567890',
      action: 'Chat Now',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      description: 'Schedule a facility tour and meeting',
      contact: 'Dhaka, Bangladesh',
      action: 'Get Directions',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50'
    }
  ];

  const offices = [
    {
      name: 'Head Office',
      location: 'Dhaka, Bangladesh',
      address: '123 Export Plaza, Gulshan-2, Dhaka 1212, Bangladesh',
      phone: '+880-2-8812345',
      email: 'dhaka@aquaexport.com',
      hours: 'Sun-Thu: 9:00 AM - 6:00 PM',
      type: 'headquarters',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Chittagong Port Office',
      location: 'Chittagong, Bangladesh',
      address: '456 Port Road, Chittagong 4000, Bangladesh',
      phone: '+880-31-123456',
      email: 'chittagong@aquaexport.com',
      hours: 'Sun-Thu: 8:00 AM - 5:00 PM',
      type: 'port',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Processing Facility',
      location: 'Cox\'s Bazar, Bangladesh',
      address: '789 Coastal Highway, Cox\'s Bazar 4700, Bangladesh',
      phone: '+880-341-12345',
      email: 'processing@aquaexport.com',
      hours: '24/7 Operations',
      type: 'facility',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'quote', label: 'Request for Quotation' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'quality', label: 'Quality & Certification' },
    { value: 'logistics', label: 'Shipping & Logistics' },
    { value: 'complaint', label: 'Complaint/Issue' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: 'general',
        message: '',
        preferredContact: 'email'
      });
      setSubmitStatus(null);
    }, 3000);
  };

  const handleOfficeSelect = (index) => {
    setActiveOffice(index);
    setShowOfficeDetails(true);
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl"></div>
        <svg className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-32 sm:h-32 text-teal-300" fill="currentColor" viewBox="0 0 100 100">
          <circle cx="20" cy="20" r="2"/>
          <circle cx="50" cy="20" r="2"/>
          <circle cx="80" cy="20" r="2"/>
          <circle cx="20" cy="50" r="2"/>
          <circle cx="50" cy="50" r="3"/>
          <circle cx="80" cy="50" r="2"/>
          <circle cx="20" cy="80" r="2"/>
          <circle cx="50" cy="80" r="2"/>
          <circle cx="80" cy="80" r="2"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-teal-100 mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-teal-700">We're Here to Help</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">Touch</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to start your seafood export journey? Contact our experienced team for personalized solutions, competitive quotes, and expert guidance.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 px-2 sm:px-0">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-xl sm:text-2xl text-white shadow-lg mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {method.icon}
              </div>
              
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{method.description}</p>
              
              <div className="text-teal-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base break-all">{method.contact}</div>
              
              <button className={`w-full py-2 px-3 sm:px-4 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 bg-gradient-to-r ${method.color} text-white hover:opacity-90 transform group-hover:scale-105`}>
                {method.action}
              </button>
            </div>
          ))}
        </div>

        {/* Main Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12 border border-gray-100">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Send us a Message</h3>
                <p className="text-gray-600 text-sm sm:text-base">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    >
                      {subjectOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <select
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone Call</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Please provide details about your requirements, quantity needed, destination country, and any specific questions..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2 sm:pt-4">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-white text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : submitStatus === 'success'
                        ? 'bg-emerald-500 hover:bg-emerald-600'
                        : 'bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </div>
                    ) : submitStatus === 'success' ? (
                      <div className="flex items-center justify-center">
                        <span className="mr-2">✅</span>
                        Message Sent Successfully!
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <span className="mr-2">📧</span>
                        Send Message
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Office Information */}
          <div className="space-y-6 sm:space-y-8 px-2 sm:px-0">
            {/* Office Selector */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Our Offices</h3>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {offices.map((office, index) => (
                  <button
                    key={index}
                    onClick={() => handleOfficeSelect(index)}
                    className={`w-full text-left p-2.5 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 ${
                      activeOffice === index
                        ? 'bg-teal-50 border-2 border-teal-200'
                        : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                    }`}
                  >
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{office.name}</div>
                    <div className="text-xs sm:text-sm text-teal-600">{office.location}</div>
                  </button>
                ))}
              </div>

              {/* Active Office Details */}
              <div className={`border-t border-gray-200 pt-4 sm:pt-6 ${showOfficeDetails ? 'block' : 'hidden lg:block'}`}>
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl mb-3 sm:mb-4">
                  <img
                    src={offices[activeOffice].image}
                    alt={offices[activeOffice].name}
                    className="w-full h-24 sm:h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 sm:left-3 text-white font-semibold text-xs sm:text-sm">
                    {offices[activeOffice].name}
                  </div>
                </div>

                <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start">
                    <span className="text-teal-600 mr-2 text-sm">📍</span>
                    <span className="text-gray-700 leading-relaxed">{offices[activeOffice].address}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-teal-600 mr-2 text-sm">📞</span>
                    <span className="text-gray-700">{offices[activeOffice].phone}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-teal-600 mr-2 text-sm">📧</span>
                    <span className="text-gray-700 break-all">{offices[activeOffice].email}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-teal-600 mr-2 text-sm">🕒</span>
                    <span className="text-gray-700">{offices[activeOffice].hours}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 sm:mt-16 text-center px-2 sm:px-0">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Looking for Something Specific?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div
                className="p-4 sm:p-6 bg-teal-50 rounded-lg sm:rounded-xl border border-teal-200 hover:bg-teal-100 transition-all duration-300 group cursor-pointer"
                onClick={() => window.location.href = '/rfq'}
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📋</div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Request Quote</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Get detailed pricing for your specific requirements</p>
              </div>
              
              <div
                className="p-4 sm:p-6 bg-emerald-50 rounded-lg sm:rounded-xl border border-emerald-200 hover:bg-emerald-100 transition-all duration-300 group cursor-pointer"
                onClick={() => window.location.href = '/quality-certificates'}
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🏆</div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Quality Docs</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Access certificates and quality documentation</p>
              </div>
              
              <div
                className="p-4 sm:p-6 bg-cyan-50 rounded-lg sm:rounded-xl border border-cyan-200 hover:bg-cyan-100 transition-all duration-300 group cursor-pointer"
                onClick={() => window.location.href = '/careers'}
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">💼</div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Join Our Team</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Explore career opportunities with us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;