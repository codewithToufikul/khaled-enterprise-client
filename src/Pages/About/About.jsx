import { Link } from "react-router-dom";
import StayConnected from "../../Components/StayConnected";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "https://i.ibb.co.com/HZVJ4Nt/mike-bergmann-t-Hj-XXy1kk-Q-unsplash.jpg",
    "https://i.ibb.co.com/Nd2pzZt3/644de57a2a4a53335b31fa89-MAQ6604-Edit-1-1.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-[calc(100vh-100px)] flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Seafood Export Background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-teal-900/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                Khaled Enterprise
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-cyan-200 mb-8">
              Global Seafoods & Garments Export Solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="text-gray-200">
              We are a Bangladesh-based company specializing in exporting fresh
              and frozen seafood worldwide. With over 15 years of experience, we
              have established ourselves as a trusted partner in the global
              seafood industry.
            </p>
            <p className="text-gray-200">
              Our mission is to deliver premium quality fish, shrimp, and other
              food products to international markets with strict quality control
              and sustainable sourcing practices, ensuring the highest standards
              of food safety and environmental responsibility.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What <span className="text-teal-600">We Do</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive range of services designed to meet global market
              demands
            </p>
          </div>

          <div className="space-y-20">
            {/* Seafood Export */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">🐟</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Seafood Export
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We source and export the freshest, sustainably caught seafood,
                  ensuring that every shipment is of the highest quality and
                  meets all regulatory requirements.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    Premium Quality
                  </span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    Sustainable
                  </span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    Fresh Export
                  </span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://i.ibb.co.com/PGBPGd2Q/lothar-boris-piltz-r-Yt-UMxs-Bq-BE-unsplash-1.jpg"
                  alt="Fresh Seafood Export"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold">Premium Seafood</h4>
                  <p className="text-sm opacity-90">
                    Fresh from Bangladesh waters
                  </p>
                </div>
              </div>
            </div>

            {/* Garment Export */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 space-y-6">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">👔</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Garment Export
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our garments are crafted with care, ethically produced, and
                  designed to meet the latest trends and quality standards.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                    Ethical Production
                  </span>
                  <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                    Latest Trends
                  </span>
                  <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                    Quality Standards
                  </span>
                </div>
              </div>
              <div className="lg:order-1 relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://i.ibb.co.com/d04cRkTk/pasquale-farro-7-Eu4-Dug-Ec-Y-unsplash-1.jpg"
                  alt="Quality Garment Export"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold">Quality Garments</h4>
                  <p className="text-sm opacity-90">
                    Ethically crafted apparel
                  </p>
                </div>
              </div>
            </div>

            {/* Product Sourcing Agent */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Product Sourcing Agent
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  As a trusted sourcing partner, we help businesses find and
                  procure top-quality products from around the world. Our global
                  network and industry expertise ensure that we meet your unique
                  needs with efficiency and reliability.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                    Global Network
                  </span>
                  <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                    Trusted Partner
                  </span>
                  <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                    Industry Expertise
                  </span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Global Product Sourcing"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold">Global Sourcing</h4>
                  <p className="text-sm opacity-90">
                    Worldwide product procurement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-teal-600">Us?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence sets us apart in the global trade
              industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Reliability
              </h3>
              <p className="text-gray-600">
                We are committed to consistent quality and timely delivery in
                every shipment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Global Reach
              </h3>
              <p className="text-gray-600">
                Our extensive network allows us to source the best products from
                any country.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Customized Solutions
              </h3>
              <p className="text-gray-600">
                We tailor our services to meet your specific business needs and
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-teal-600">Purpose</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by excellence, guided by sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                "To provide fresh, safe, and sustainably sourced seafood to
                global customers while maintaining the highest standards of
                quality, traceability, and environmental responsibility in
                everything we do."
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🌟</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                "To become the most trusted and sustainable seafood exporter
                from South Asia, setting industry benchmarks for quality,
                innovation, and customer satisfaction across global markets."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl mb-8 opacity-90">
            We invite you to reach out and learn more about how Khaled
            Enterprise can support your business goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us Today
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-teal-700 text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-teal-800 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <StayConnected />
    </div>
  );
};

export default About;
