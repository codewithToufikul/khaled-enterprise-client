import React, { useState, useRef, useEffect } from 'react';
import StayConnected from '../../Components/StayConnected';

const ContactUs = () => {
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
  const [formErrors, setFormErrors] = useState({});
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
      contact: 'nagive83@gmail.com',
      action: 'Send Email',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      href: 'mailto:nagive83@gmail.com'
    },
    {
      icon: '📞',
      title: 'Call Bangladesh',
      description: 'Direct line to our Dhaka office',
      contact: '+88 01609 291 789',
      action: 'Call Now',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      href: 'tel:+8801609291789'
    },
    {
      icon: '📱',
      title: 'Call UK',
      description: 'Direct line to our London office',
      contact: '+44 7507292161',
      action: 'Call Now',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      href: 'tel:+447507292161'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      description: 'Quick responses for urgent inquiries',
      contact: '+88 01609 291 789',
      action: 'Chat Now',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      href: 'https://wa.me/8801609291789'
    }
  ];

  const offices = [
    {
      name: 'Bangladesh Head Office',
      location: 'Dhaka, Bangladesh',
      address: '55/A, Purana Paltan (Siddique Mansion), 5th Floor, Dhaka-1000, Bangladesh',
      phone: '+88 01609 291 789',
      email: 'nagive83@gmail.com',
      hours: 'Sun-Thu: 9:00 AM - 6:00 PM',
      type: 'headquarters',
      image: 'https://i.ibb.co.com/nshz3fd9/AZ-Mor-paltan-1ca6ee37ea-3.webp',
      timezone: 'Bangladesh Standard Time (BST)',
      services: ['Export Operations', 'Quality Control', 'Documentation', 'Customer Service']
    },
    {
      name: 'UK Representative Office',
      location: 'London, United Kingdom',
      address: '79, Abbotswood Way, Hayes, London, UB3 3PF, United Kingdom',
      phone: '+44 7507292161',
      email: 'nagive83@gmail.com',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
      type: 'representative',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      timezone: 'Greenwich Mean Time (GMT)',
      services: ['European Market Support', 'Client Relations', 'Business Development', 'Logistics Coordination']
    }
  ];

  const subjectOptions = [
    { value: 'general', label: '🔍 General Inquiry' },
    { value: 'quote', label: '💰 Request for Quotation' },
    { value: 'partnership', label: '🤝 Partnership Opportunity' },
    { value: 'quality', label: '🏆 Quality & Certification' },
    { value: 'logistics', label: '🚢 Shipping & Logistics' },
    { value: 'bulk_order', label: '📦 Bulk Order Inquiry' },
    { value: 'technical', label: '⚙️ Technical Support' },
    { value: 'complaint', label: '⚠️ Complaint/Issue' },
    { value: 'other', label: '📋 Other' }
  ];

  // Form validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (formData.phone && !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
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
      setFormErrors({});
    }, 3000);
  };

  const handleOfficeSelect = (index) => {
    setActiveOffice(index);
    setShowOfficeDetails(true);
  };

  const handleContactMethodClick = (method) => {
    if (method.href) {
      window.open(method.href, '_blank');
    }
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-teal-50 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <svg className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-32 sm:h-32 text-teal-300 animate-spin" style={{animationDuration: '20s'}} fill="currentColor" viewBox="0 0 100 100">
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
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-teal-100 mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-teal-700">24/7 Customer Support Available</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Let's Connect & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">Grow Together</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Ready to elevate your seafood business? Our expert team spanning across Bangladesh and UK is here to provide personalized solutions, competitive quotes, and seamless export services tailored to your needs.
          </p>
        </div>

        {/* Enhanced Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 px-2 sm:px-0">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              onClick={() => handleContactMethodClick(method)}
              className={`group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 cursor-pointer ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-xl sm:text-2xl text-white shadow-lg mb-3 sm:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                {method.icon}
              </div>
              
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{method.description}</p>
              
              <div className="text-teal-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base break-all">{method.contact}</div>
              
              <button className={`w-full py-2.5 px-3 sm:px-4 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 bg-gradient-to-r ${method.color} text-white hover:opacity-90 transform group-hover:scale-105 shadow-md hover:shadow-lg`}>
                {method.action}
              </button>
            </div>
          ))}
        </div>

        {/* Main Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12 border border-gray-100">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Send us a Message 📩
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Fill out the form below and we'll get back to you within 24 hours. For urgent inquiries, please call us directly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                        formErrors.name ? 'border-red-300 bg-red-50' : 'border-gray-200'
                      }`}
                      placeholder="Your full name"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-xs text-red-600">{formErrors.name}</p>
                    )}
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
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                        formErrors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'
                      }`}
                      placeholder="your.email@company.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-xs text-red-600">{formErrors.email}</p>
                    )}
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
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                        formErrors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200'
                      }`}
                      placeholder="+88 01609 291 789"
                    />
                    {formErrors.phone && (
                      <p className="mt-1 text-xs text-red-600">{formErrors.phone}</p>
                    )}
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
                      <option value="email">📧 Email</option>
                      <option value="phone">📞 Phone Call</option>
                      <option value="whatsapp">💬 WhatsApp</option>
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
                    rows="5"
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none ${
                      formErrors.message ? 'border-red-300 bg-red-50' : 'border-gray-200'
                    }`}
                    placeholder="Please provide details about your requirements, quantity needed, destination country, preferred specifications, and any specific questions. The more details you provide, the better we can assist you."
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-xs text-red-600">{formErrors.message}</p>
                  )}
                  <div className="mt-1 text-xs text-gray-500">
                    {formData.message.length}/500 characters
                  </div>
                </div>

                {/* Enhanced Submit Button */}
                <div className="pt-2 sm:pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-white text-sm sm:text-base transition-all duration-500 transform hover:scale-105 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : submitStatus === 'success'
                        ? 'bg-emerald-500 hover:bg-emerald-600'
                        : 'bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 shadow-lg hover:shadow-2xl'
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
                        <span className="mr-2">🚀</span>
                        Send Message
                      </div>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Enhanced Office Information */}
          <div className="space-y-6 sm:space-y-8 px-2 sm:px-0">
            {/* Office Selector */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                <span className="mr-2">🏢</span>
                Our Global Offices
              </h3>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {offices.map((office, index) => (
                  <button
                    key={index}
                    onClick={() => handleOfficeSelect(index)}
                    className={`w-full text-left p-2.5 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 ${
                      activeOffice === index
                        ? 'bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-300 shadow-md'
                        : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100 hover:shadow-sm'
                    }`}
                  >
                    <div className="font-semibold text-gray-900 text-sm sm:text-base flex items-center">
                      <span className="mr-2">{office.type === 'headquarters' ? '🏛️' : '🏢'}</span>
                      {office.name}
                    </div>
                    <div className="text-xs sm:text-sm text-teal-600 ml-6">{office.location}</div>
                    <div className="text-xs text-gray-500 ml-6 mt-1">{office.timezone}</div>
                  </button>
                ))}
              </div>

              {/* Enhanced Active Office Details */}
              <div className={`border-t border-gray-200 pt-4 sm:pt-6 ${showOfficeDetails ? 'block' : 'hidden lg:block'}`}>
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl mb-4 group">
                  <img
                    src={offices[activeOffice].image}
                    alt={offices[activeOffice].name}
                    className="w-full h-32 sm:h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-2 left-3 text-white">
                    <div className="font-bold text-sm sm:text-base">{offices[activeOffice].name}</div>
                    <div className="text-xs opacity-90">{offices[activeOffice].type === 'headquarters' ? 'Main Operations' : 'Representative Office'}</div>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm mb-4">
                  <div className="flex items-start">
                    <span className="text-teal-600 mr-2 text-sm mt-0.5">📍</span>
                    <span className="text-gray-700 leading-relaxed">{offices[activeOffice].address}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-teal-600 mr-2 text-sm">📞</span>
                    <a href={`tel:${offices[activeOffice].phone.replace(/\s/g, '')}`} className="text-gray-700 hover:text-teal-600 transition-colors">
                      {offices[activeOffice].phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-teal-600 mr-2 text-sm">📧</span>
                    <a href={`mailto:${offices[activeOffice].email}`} className="text-gray-700 hover:text-teal-600 transition-colors break-all">
                      {offices[activeOffice].email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-teal-600 mr-2 text-sm">🕒</span>
                    <span className="text-gray-700">{offices[activeOffice].hours}</span>
                  </div>
                </div>

                {/* Office Services */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">Services Available:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {offices[activeOffice].services.map((service, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></span>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
              <h4 className="font-bold text-lg mb-2 flex items-center">
                <span className="mr-2">⚡</span>
                Quick Response Promise
              </h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Email responses within 24 hours
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Phone support during business hours
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  WhatsApp for urgent inquiries
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Dedicated account manager
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enhanced Additional Information */}
        <div className="mt-12 sm:mt-16 text-center px-2 sm:px-0">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">


            {/* FAQ Section */}
            <div className=" border-gray-200 pt-6 sm:pt-8">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                💡 Frequently Asked Questions
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">What is your minimum order quantity?</h5>
                  <p className="text-xs sm:text-sm text-gray-600">Our MOQ varies by product type. Contact us for specific requirements - we work with businesses of all sizes.</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">How long does shipping take?</h5>
                  <p className="text-xs sm:text-sm text-gray-600">Delivery times depend on destination and shipping method. Typically 15-25 days by sea, 3-7 days by air.</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Do you provide quality certificates?</h5>
                  <p className="text-xs sm:text-sm text-gray-600">Yes, we provide all necessary certificates including HACCP, FDA, EU approval, and country-specific certifications.</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Can you handle custom packaging?</h5>
                  <p className="text-xs sm:text-sm text-gray-600">Absolutely! We offer custom packaging solutions including private labeling and brand-specific requirements.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Banner */}
          <div className="mt-8 sm:mt-12 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white text-center shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              🌟 Ready to Start Your Seafood Export Journey?
            </h3>
            <p className="text-sm sm:text-base opacity-90 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied customers worldwide who trust us for premium quality seafood exports. 
              Get your personalized quote today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a 
                href="tel:+8801609291789" 
                className="bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                📞 Call Bangladesh: +88 01609 291 789
              </a>
              <a 
                href="tel:+447507292161" 
                className="bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                📞 Call UK: +44 7507292161
              </a>
            </div>
            <div className="mt-4">
              <a 
                href="https://wa.me/8801609291789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="mr-2">💬</span>
                WhatsApp Us Now
              </a>
            </div>
          </div>

          <StayConnected/>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;