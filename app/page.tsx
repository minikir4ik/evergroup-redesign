import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import FeaturesGrid from "./components/FeaturesGrid";
import ProductShowcase from "./components/ProductShowcase";
import StatsBanner from "./components/StatsBanner";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <FeaturesGrid />
      <ProductShowcase />
      <StatsBanner />
      <CTASection />
      <Footer />
    </>
  );
}
