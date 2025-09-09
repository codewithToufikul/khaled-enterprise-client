import React, { useState } from 'react';
import { FileText, Upload, CheckCircle, User, Building, Globe, Mail, Phone, Ship, Calendar, Package } from 'lucide-react';

const RFQ = () => {
  const [formData, setFormData] = useState({
    // Buyer Information
    companyName: '',
    contactPerson: '',
    country: '',
    email: '',
    phone: '',
    
    // Shipment Information
    incoterm: 'FOB',
    preferredPort: '',
    deliveryWindow: '',
    
    // Product Information
    productName: '',
    quantity: '',
    unit: 'kg',
    packaging: '',
    preferredShipmentDate: '',
    remarks: '',
    
    // Attachments
    attachments: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const incotermOptions = [
    { value: 'FOB', label: 'FOB (Free on Board)' },
    { value: 'CFR', label: 'CFR (Cost and Freight)' },
    { value: 'CIF', label: 'CIF (Cost, Insurance & Freight)' },
    { value: 'EXW', label: 'EXW (Ex Works)' }
  ];

  const unitOptions = [
    { value: 'kg', label: 'Kilograms (kg)' },
    { value: 'carton', label: 'Carton' },
    { value: 'MT', label: 'Metric Tons (MT)' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact person is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.preferredPort.trim()) newErrors.preferredPort = 'Preferred port is required';
    if (!formData.productName.trim()) newErrors.productName = 'Product name is required';
    if (!formData.quantity) newErrors.quantity = 'Quantity is required';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Quantity validation
    if (formData.quantity && (isNaN(formData.quantity) || parseFloat(formData.quantity) <= 0)) {
      newErrors.quantity = 'Please enter a valid quantity';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Log form data to console
    console.log('RFQ Form Data:', {
      ...formData,
      attachments: formData.attachments ? formData.attachments.name : null,
      submittedAt: new Date().toISOString()
    });

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        companyName: '',
        contactPerson: '',
        country: '',
        email: '',
        phone: '',
        incoterm: 'FOB',
        preferredPort: '',
        deliveryWindow: '',
        productName: '',
        quantity: '',
        unit: 'kg',
        packaging: '',
        preferredShipmentDate: '',
        remarks: '',
        attachments: null
      });
    }, 3000);
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">RFQ Submitted Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Your RFQ has been submitted successfully. Check the console for form data details.
          </p>
          <p className="text-sm text-gray-500">
            Our team will review your request and get back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-teal-50 rounded-full border border-teal-200 mb-4">
            <FileText className="w-4 h-4 text-teal-600 mr-2" />
            <span className="text-sm font-medium text-teal-800">Request Quote</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Request a <span className="text-teal-600">Quotation</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Fill in your details to receive a tailored quotation from Khaled Enterprise.
          </p>
        </div>
      </div>

      {/* RFQ Form */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            
            {/* Buyer Information Section */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                  <User className="w-5 h-5 text-teal-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Buyer Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                        errors.companyName ? 'border-red-300 bg-red-50' : 'border-gray-200'
                      }`}
                      placeholder="Your company name"
                    />
                  </div>
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                        errors.contactPerson ? 'border-red-300 bg-red-50' : 'border-gray-200'
                      }`}
                      placeholder="Full name"
                    />
                  </div>
                  {errors.contactPerson && (
                    <p className="mt-1 text-sm text-red-600">{errors.contactPerson}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Country *
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                        errors.country ? 'border-red-300 bg-red-50' : 'border-gray-200'
                      }`}
                      placeholder="Your country"
                    />
                  </div>
                  {errors.country && (
                    <p className="mt-1 text-sm text-red-600">{errors.country}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'
                      }`}
                      placeholder="your.email@company.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                        errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200'
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Shipment Information Section */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Ship className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Shipment Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Incoterm *
                  </label>
                  <select
                    name="incoterm"
                    value={formData.incoterm}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  >
                    {incotermOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Port *
                  </label>
                  <input
                    type="text"
                    name="preferredPort"
                    value={formData.preferredPort}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                      errors.preferredPort ? 'border-red-300 bg-red-50' : 'border-gray-200'
                    }`}
                    placeholder="e.g., Port of Los Angeles"
                  />
                  {errors.preferredPort && (
                    <p className="mt-1 text-sm text-red-600">{errors.preferredPort}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Delivery Window
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="deliveryWindow"
                      value={formData.deliveryWindow}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="e.g., January 2025 or specific dates"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Information Section */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <Package className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Product Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                      errors.productName ? 'border-red-300 bg-red-50' : 'border-gray-200'
                    }`}
                    placeholder="e.g., Black Tiger Shrimp, Atlantic Salmon"
                  />
                  {errors.productName && (
                    <p className="mt-1 text-sm text-red-600">{errors.productName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quantity *
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${
                      errors.quantity ? 'border-red-300 bg-red-50' : 'border-gray-200'
                    }`}
                    placeholder="0"
                    min="0"
                    step="0.01"
                  />
                  {errors.quantity && (
                    <p className="mt-1 text-sm text-red-600">{errors.quantity}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Unit *
                  </label>
                  <select
                    name="unit"
                    value={formData.unit}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  >
                    {unitOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Packaging
                  </label>
                  <input
                    type="text"
                    name="packaging"
                    value={formData.packaging}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="e.g., Vacuum pack, IQF, Block frozen"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Shipment Date
                  </label>
                  <input
                    type="date"
                    name="preferredShipmentDate"
                    value={formData.preferredShipmentDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Remarks / Special Requirements
                  </label>
                  <textarea
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Any special requirements, quality specifications, or additional information..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Attachments Section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <Upload className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Attachments (Optional)</h2>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-gray-400 transition-colors duration-300">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                <label className="cursor-pointer">
                  <span className="text-teal-600 font-semibold hover:text-teal-700">Upload files</span>
                  <span className="text-gray-600"> or drag and drop</span>
                  <input
                    type="file"
                    name="attachments"
                    onChange={handleInputChange}
                    className="hidden"
                    multiple
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                  />
                </label>
                <p className="text-sm text-gray-500 mt-2">PDF, DOC, XLS, Images up to 10MB</p>
                {formData.attachments && (
                  <p className="text-sm text-teal-600 mt-2 font-medium">
                    Selected: {formData.attachments.name}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto px-12 py-4 font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-teal-600 hover:bg-teal-700 hover:shadow-xl text-white'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting RFQ...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Submit RFQ Request
                  </div>
                )}
              </button>
              
              <p className="text-sm text-gray-500 mt-4">
                We'll get back to you within 24 hours with a detailed quotation.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RFQ;