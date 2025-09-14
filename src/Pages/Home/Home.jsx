import React from "react";
import HeroSection from "./HeroSection";
import FeaturesProducts from "./FeaturesProducts";
import ProductTeaserSection from "./ProductTeaserSection";
import CertificationBadged from "./CertificationBadged";
import OurServiceSection from "./OurServiceSection";
import ContactUsSection from "./ContactUsSection";
import AboutSection from "./AboutSection";
import WhyChoseUs from "./WhyChoseUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <FeaturesProducts /> */}
      {/* <ProductTeaserSection /> */}
      {/* <CertificationBadged /> */}
      <AboutSection/>
      <OurServiceSection />
      <WhyChoseUs/>
      <ContactUsSection />
    </div>
  );
};

export default Home;
