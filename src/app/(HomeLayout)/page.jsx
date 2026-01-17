import About from "@/components/About";
import CallToAction from "@/components/CallToAction ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks ";
import ProductsPreview from "@/components/ProductsPreview ";
import Testimonials from "@/components/Testimonials ";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <ProductsPreview />
      <HowItWorks />
      <CallToAction />
    </div>
  );
};

export default HomePage;
