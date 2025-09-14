import React from 'react';
import { Facebook, MessageCircle, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const StayConnected = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/yourpage',
      color: 'hover:bg-blue-500 hover:text-white'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/8801609291789',
      color: 'hover:bg-green-500 hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/yourcompany',
      color: 'hover:bg-blue-700 hover:text-white'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/yourprofile',
      color: 'hover:bg-pink-500 hover:text-white'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:nagive83@gmail.com',
      color: 'hover:bg-teal-500 hover:text-white'
    },
    {
      name: 'Call Us',
      icon: Phone,
      url: 'tel:+8801609291789',
      color: 'hover:bg-emerald-500 hover:text-white'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-gray-50 to-teal-50 py-12">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Stay Connected with Us! 🌐
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow us on social media to stay updated on our latest products, services, and news. 
            Connect with us on Facebook, WhatsApp, and more!
          </p>
        </div>
        
        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-md border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                title={social.name}
              >
                <IconComponent size={24} className="text-gray-600 group-hover:text-current transition-colors" />
              </a>
            );
          })}
        </div>

        {/* Quick Contact */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone size={16} className="text-teal-600" />
              <span className="font-medium">Quick Contact:</span>
            </div>
            <a 
              href="https://wa.me/8801609291789" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={16} />
              <span>WhatsApp: +88 01609 291 789</span>
            </a>
            <a 
              href="mailto:nagive83@gmail.com" 
              className="flex items-center space-x-2 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
            >
              <Mail size={16} />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayConnected;