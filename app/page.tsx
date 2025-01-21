
import Nav from "@/components/main/Nav";
import HeroSection from "@/components/main/HeroSection";
import WorkProcess from "@/components/main/WorkProcess";
import PricingTable from "@/components/main/PricingTable";

export default function HomePage() {
  return (
    <div className="min-h-screen body">
     <Nav/>
     <HeroSection/>
     <WorkProcess/>
     <PricingTable/>
    </div>
  );
}

