"use client";
import HeroSection from "@/components/pages/HeroSection";
import WorkProcess from "@/components/pages/WorkProcess";
import PricingTable from "@/components/pages/PricingTable";
import ServicesSection from "@/components/pages/ServiceSection";
import TeamExperts from "@/components/pages/TeamExperts";
import ContactForm from "@/components/pages/ContactForm";
import MessageDiv from "@/components/comp/MessageDiv";
import Nav from "@/components/comp/Nav";
import Footer from "@/components/comp/Footer";
import PolygonAnimation from "@/components/comp/PolygonAnimation";
import RoundAnimation from "@/components/comp/RoundAnimation";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="z-0">
        <div className="min-h-screen font-sans tracking-wider body">
          <div id="home" className=" h-14 block bg-black"></div>
          <MessageDiv />
          <HeroSection />
          <PolygonAnimation />
          <WorkProcess />
          <RoundAnimation />
          <ServicesSection />
          <div id="pricing" className="h-14 block"></div>
          <PricingTable />
          <div id="tm" className="h-14 block"></div>
          <TeamExperts />
          <div id="contact" className="h-14 block bg-black"></div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
