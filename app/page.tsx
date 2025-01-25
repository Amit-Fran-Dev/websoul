
import HeroSection from "@/components/main/HeroSection";
import WorkProcess from "@/components/main/WorkProcess";
// import PricingTable from "@/components/main/PricingTable";
import ServicesSection from "@/components/main/ServiceSection";
import TeamExperts from "@/components/main/TeamExperts";
import ContactForm from "@/components/main/ContactForm";


export default function HomePage() {
  return (
    <div className="min-h-screen font-sans tracking-wider  body">
     <HeroSection/>
     <WorkProcess/>
     <ServicesSection/>
     {/* <PricingTable/> */}
     <TeamExperts/>
     <ContactForm/>
    </div>
  );
}

