
import HeroSection from "@/components/pages/HeroSection";
import WorkProcess from "@/components/pages/WorkProcess";
import PricingTable from "@/components/pages/PricingTable";
import ServicesSection from "@/components/pages/ServiceSection";
import TeamExperts from "@/components/pages/TeamExperts";
import ContactForm from "@/components/pages/ContactForm";
import MessageDiv from "@/components/comp/MessageDiv";


export default function HomePage() {
  return (
    <div className="min-h-screen font-sans tracking-wider  body">
      <div id="home" className=" h-14 block bg-black"></div>
      <MessageDiv/>
     <HeroSection/>
     <div id="steps" className=" h-14 block"></div>
     <WorkProcess/>
      <div id="service" className=" h-14 block"></div>
     <ServicesSection/>
      <div id="pricing" className=" h-14 block"></div>
     <PricingTable/>
      <div id="tm" className=" h-14 block"></div>
     <TeamExperts/>
      <div id="contact" className=" h-14 block bg-black"></div>
     <ContactForm/>
    </div>
  );
}

