
import Nav from "@/components/main/Nav";
import HeroSection from "@/components/main/HeroSection";
import WorkProcess from "@/components/main/WorkProcess";
// import PricingTable from "@/components/main/PricingTable";
import ServicesSection from "@/components/main/ServiceSection";
import TeamExperts from "@/components/main/TeamExperts";
import ContactForm from "@/components/main/ContactForm";
import Footer from "@/components/main/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen font-nas tracking-wider  body">
     <Nav/>
     <HeroSection/>
     <WorkProcess/>
     <ServicesSection/>
     {/* <PricingTable/> */}
     <TeamExperts/>
     <ContactForm/>
     <Footer/>
    </div>
  );
}

