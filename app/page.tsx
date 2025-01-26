
import HeroSection from "@/components/pages/HeroSection";
import WorkProcess from "@/components/pages/WorkProcess";
import PricingTable from "@/components/pages/PricingTable";
import ServicesSection from "@/components/pages/ServiceSection";
import TeamExperts from "@/components/pages/TeamExperts";
import ContactForm from "@/components/pages/ContactForm";


export default function HomePage() {
  return (
    <div className="min-h-screen font-sans tracking-wider  body">
     <HeroSection/>
     <WorkProcess/>
     <ServicesSection/>
     <PricingTable/>
     <TeamExperts/>
     <ContactForm/>
    </div>
  );
}

