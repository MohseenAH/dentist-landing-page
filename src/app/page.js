import ContactCTA from "./components/ContactCTA";
import DoctorSection from "./components/DocterSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Problems from "./components/Problems";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";
import Transformations from "./components/Transformations";
import TrustSection from "./components/TrustSection";

export default function Home() {
  return (
    <main className="bg-gray-200 pt-17">
      <Navbar />
      <Hero />
      <DoctorSection/>
      <Problems/>
      <Solutions/>
      <Transformations/>
      <TrustSection/>
      <Testimonials/>
      <ContactCTA/>
      <FAQ/>
      <Footer/>
    </main>
  );
}