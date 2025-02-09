import { pricingPlans } from "@/data/pricingPlans";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/comp/Footer";
import Nav from "@/components/comp/Nav";
import PricingDetails from "@/components/pages/pricing/PricingDetails";

export default function PricingScreen({ params }) {
  const { plan } = params;

  // Find the selected plan
  const selectedPlan = pricingPlans.find(
    (p) => p.name.toLowerCase() === plan.toLowerCase()
  );

  console.log(selectedPlan);
  if (!selectedPlan) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Plan Not Found</h1>
        <Link href="/">
          <Button className="mt-4">Go Back</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Nav />
      <div className=" h-14 block bg-black"></div>
      <div className="body bg-[white]">
        <PricingDetails plan={plan}/>
      </div>
      <Footer />
    </>
  );
}
