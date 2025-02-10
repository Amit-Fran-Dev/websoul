"use client";
import { PricingProvider, usePricing } from "@/components/pages/pricing/pricingContext";
import Footer from "@/components/comp/Footer";
import Nav from "@/components/comp/Nav";
import PricingDetails from "@/components/pages/pricing/PricingDetails";
import PlanNotFound from "@/components/pages/pricing/PlanNotFound";

function PricingContent() {
  const { selectedPlan } = usePricing();

  if (!selectedPlan) return <PlanNotFound />;

  return <PricingDetails plan={selectedPlan.name} />;
}

export default function PricingScreen({ params }) {
  return (
    <PricingProvider planName={params?.plan}>
      <Nav />
      <div className="h-14 bg-black"></div>
      <main className="bg-white">
        <PricingContent />
      </main>
      <Footer />
    </PricingProvider>
  );
}
