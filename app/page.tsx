import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import FeaturesGrid from "./components/FeaturesGrid";
import ProductShowcase from "./components/ProductShowcase";
import CasesSection from "./components/CasesSection";
import StatsBanner from "./components/StatsBanner";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <FeaturesGrid />
      <ProductShowcase />
      <CasesSection />
      <StatsBanner />
      <ContactSection />
      <Footer />
    </>
  );
}
