import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  Globe,
  Clock,
  Send,
  MessageCircle,
  User,
  FileText,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const ContactUsSection = () => {
  const [activeOffice, setActiveOffice] = useState("bangladesh");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const offices = [
    {
      id: "bangladesh",
      country: "Bangladesh",
      flag: "🇧🇩",
      type: "Operations Office",
      address: "55/A, Purana Paltan (Siddique Mansion)",
      addressLine2: "5th Floor, Dhaka-1000",
      phone: "+88 01609 291 789",
      email: "nagive83@gmail.com",
      hours: "Sun-Thu: 9:00 AM - 6:00 PM",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.898463177847!2d90.4101160147707!3d23.752776593424567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f5ac5e6c13%3A0x7a5a5c1e7c8b9e0f!2sPurana%20Paltan%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1635786420000!5m2!1sen!2sus",
    },
    {
      id: "uk",
      country: "United Kingdom",
      flag: "🇬🇧",
      type: "Head Office",
      address: "79, Abbotswood way, Hayes",
      addressLine2: "London, UB3 3PF",
      phone: "+44 7507292161",
      email: "nagive83@gmail.com",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.8!2d-0.41234!3d51.52371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487679c3f6d4c7e5%3A0x5f4a6b8c9d1e2f3a!2sAbbotswood%20Way%2C%20Hayes%2C%20UK!5e0!3m2!1sen!2suk!4v1633786420000!5m2!1sen!2suk",
    },
  ];

  const activeOfficeData = offices.find((office) => office.id === activeOffice);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Contact form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const isFormValid =
    formData.name && formData.email && formData.subject && formData.message;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-teal-100 mb-6">
            <MessageCircle className="w-4 h-4 text-teal-600 mr-2" />
            <span className="text-sm font-medium text-teal-700">
              Get in Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
              Us
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reach out to our team at either of our global offices. We're here to
            help you with all your export and sourcing needs.
          </p>
        </div>

        {/* Office Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            {offices.map((office) => (
              <button
                key={office.id}
                onClick={() => setActiveOffice(office.id)}
                className={`flex items-center space-x-3 px-6 w-full py-3 rounded-xl transition-all duration-300 ${
                  activeOffice === office.id
                    ? `bg-gradient-to-r ${office.color} text-white shadow-lg transform scale-105`
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="text-2xl">{office.flag}</span>
                <div className="text-left">
                  <div className="font-semibold">{office.country}</div>
                  <div className="text-xs opacity-90">{office.type}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Active Office Details */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`w-12 h-12 ${activeOfficeData.bgColor} rounded-xl flex items-center justify-center`}
                >
                  <Building2
                    className={`w-6 h-6 ${activeOfficeData.textColor}`}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {activeOfficeData.country} Office
                  </h3>
                  <p className={`${activeOfficeData.textColor} font-semibold`}>
                    {activeOfficeData.type}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <MapPin
                    className={`w-5 h-5 ${activeOfficeData.textColor} mt-1 flex-shrink-0`}
                  />
                  <div>
                    <p className="text-gray-900 font-medium">
                      {activeOfficeData.address}
                    </p>
                    <p className="text-gray-600">
                      {activeOfficeData.addressLine2}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Phone
                    className={`w-5 h-5 ${activeOfficeData.textColor} flex-shrink-0`}
                  />
                  <a
                    href={`tel:${activeOfficeData.phone}`}
                    className="text-gray-900 hover:text-teal-600 transition-colors font-medium group"
                  >
                    {activeOfficeData.phone}
                    <ArrowRight className="w-4 h-4 inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Mail
                    className={`w-5 h-5 ${activeOfficeData.textColor} flex-shrink-0`}
                  />
                  <a
                    href={`mailto:${activeOfficeData.email}`}
                    className="text-gray-900 hover:text-teal-600 transition-colors font-medium group"
                  >
                    {activeOfficeData.email}
                    <ArrowRight className="w-4 h-4 inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Clock
                    className={`w-5 h-5 ${activeOfficeData.textColor} flex-shrink-0`}
                  />
                  <p className="text-gray-900 font-medium">
                    {activeOfficeData.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                <iframe
                  src={activeOfficeData.mapEmbed}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>

                {/* Location Pin */}
                <div className="absolute top-1/2  mt-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={`w-8 h-8 bg-gradient-to-r ${activeOfficeData.color} rounded-full flex items-center justify-center shadow-lg animate-pulse`}
                  >
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-4 pt-7 bg-gray-50 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    📍 {activeOfficeData.country} Office
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-600">
                We'll get back to you within 24 hours
              </p>
            </div>

            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-green-800 font-medium">
                    Message sent successfully!
                  </p>
                  <p className="text-green-600 text-sm">
                    We'll get back to you soon.
                  </p>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors bg-gray-50 hover:bg-white"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors bg-gray-50 hover:bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors bg-gray-50 hover:bg-white"
                    placeholder="How can we help you?"
                  />
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
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors bg-gray-50 hover:bg-white resize-none"
                  placeholder="Tell us about your requirements, questions, or how we can assist you..."
                ></textarea>
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isFormValid && !isSubmitting
                    ? "bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 shadow-lg hover:shadow-xl transform hover:scale-105"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                By sending this message, you agree to our terms of service and
                privacy policy.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-teal-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Call Us</h4>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Speak directly with our team
            </p>
            <p className="text-teal-600 font-medium">
              Available during business hours
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Email Support</h4>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Get detailed assistance via email
            </p>
            <p className="text-blue-600 font-medium">
              Response within 24 hours
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Live Chat</h4>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Chat with our support team
            </p>
            <p className="text-green-600 font-medium">Online now</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;

// import React, { useState } from 'react';
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Building2,
//   Globe,
//   Clock,
//   Send,
//   MessageCircle,
//   User,
//   FileText,
//   CheckCircle,
//   ArrowRight
// } from 'lucide-react';

// const ContactUsSection = () => {
//   const [activeOffice, setActiveOffice] = useState('bangladesh');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const offices = [
//     {
//       id: 'bangladesh',
//       country: 'Bangladesh',
//       flag: '🇧🇩',
//       type: 'Operations Office',
//       address: '55/A, Purana Paltan (Siddique Mansion)',
//       addressLine2: '5th Floor, Dhaka-1000',
//       phone: '+88 01609 291 789',
//       email: 'nagive83@gmail.com',
//       hours: 'Sun-Thu: 9:00 AM - 6:00 PM',
//       color: 'from-green-500 to-emerald-600',
//       bgColor: 'bg-green-50',
//       textColor: 'text-green-600',
//       mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.898463177847!2d90.4101160147707!3d23.752776593424567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f5ac5e6c13%3A0x7a5a5c1e7c8b9e0f!2sPurana%20Paltan%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1635786420000!5m2!1sen!2sus'
//     },
//     {
//       id: 'uk',
//       country: 'United Kingdom',
//       flag: '🇬🇧',
//       type: 'Head Office',
//       address: '79, Abbotswood way, Hayes',
//       addressLine2: 'London, UB3 3PF',
//       phone: '+44 7507292161',
//       email: 'nagive83@gmail.com',
//       hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
//       color: 'from-blue-500 to-indigo-600',
//       bgColor: 'bg-blue-50',
//       textColor: 'text-blue-600',
//       mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.8!2d-0.41234!3d51.52371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487679c3f6d4c7e5%3A0x5f4a6b8c9d1e2f3a!2sAbbotswood%20Way%2C%20Hayes%2C%20UK!5e0!3m2!1sen!2suk!4v1633786420000!5m2!1sen!2suk'
//     }
//   ];

//   const activeOfficeData = offices.find(office => office.id === activeOffice);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     setTimeout(() => {
//       console.log('Contact form submitted:', formData);
//       setIsSubmitting(false);
//       setIsSubmitted(true);
//       setFormData({ name: '', email: '', subject: '', message: '' });
//       setTimeout(() => {
//         setIsSubmitted(false);
//       }, 5000);
//     }, 1500);
//   };

//   const isFormValid = formData.name && formData.email && formData.subject && formData.message;

//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-teal-100 mb-6">
//             <MessageCircle className="w-4 h-4 text-teal-600 mr-2" />
//             <span className="text-sm font-medium text-teal-700">Get in Touch</span>
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">Us</span>
//           </h2>

//           <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Reach out to our team at either of our global offices. We're here to help you with all your export and sourcing needs.
//           </p>
//         </div>

//         {/* Office Selector */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
//             {offices.map((office) => (
//               <button
//                 key={office.id}
//                 onClick={() => setActiveOffice(office.id)}
//                 className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
//                   activeOffice === office.id
//                     ? `bg-gradient-to-r ${office.color} text-white shadow-lg transform scale-105`
//                     : 'text-gray-600 hover:bg-gray-50'
//                 }`}
//               >
//                 <span className="text-2xl">{office.flag}</span>
//                 <div className="text-left">
//                   <div className="font-semibold">{office.country}</div>
//                   <div className="text-xs opacity-90">{office.type}</div>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

//           {/* Contact Information & Map */}
//           <div className="space-y-8">

//             {/* Active Office Details */}
//             <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
//               <div className="flex items-center space-x-4 mb-6">
//                 <div className={`w-12 h-12 ${activeOfficeData.bgColor} rounded-xl flex items-center justify-center`}>
//                   <Building2 className={`w-6 h-6 ${activeOfficeData.textColor}`} />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-900">{activeOfficeData.country} Office</h3>
//                   <p className={`${activeOfficeData.textColor} font-semibold`}>{activeOfficeData.type}</p>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
//                   <MapPin className={`w-5 h-5 ${activeOfficeData.textColor} mt-1 flex-shrink-0`} />
//                   <div>
//                     <p className="text-gray-900 font-medium">{activeOfficeData.address}</p>
//                     <p className="text-gray-600">{activeOfficeData.addressLine2}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
//                   <Phone className={`w-5 h-5 ${activeOfficeData.textColor} flex-shrink-0`} />
//                   <a
//                     href={`tel:${activeOfficeData.phone}`}
//                     className="text-gray-900 hover:text-teal-600 transition-colors font-medium group"
//                   >
//                     {activeOfficeData.phone}
//                     <ArrowRight className="w-4 h-4 inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                   </a>
//                 </div>

//                 <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
//                   <Mail className={`w-5 h-5 ${activeOfficeData.textColor} flex-shrink-0`} />
//                   <a
//                     href={`mailto:${activeOfficeData.email}`}
//                     className="text-gray-900 hover:text-teal-600 transition-colors font-medium group"
//                   >
//                     {activeOfficeData.email}
//                     <ArrowRight className="w-4 h-4 inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                   </a>
//                 </div>

//                 <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
//                   <Clock className={`w-5 h-5 ${activeOfficeData.textColor} flex-shrink-0`} />
//                   <p className="text-gray-900 font-medium">{activeOfficeData.hours}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Map Embed */}
//             <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
//               <iframe
//                 src={activeOfficeData.mapEmbed}
//                 width="100%"
//                 height="300"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="rounded-2xl"
//               ></iframe>
//             </div>
//           </div>

//           {/* Contact Form */}
//           {/* তোমার আগের form 그대로 রাখা হলো */}
//           {/* ... */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUsSection;
