"use client";
import { useRouter } from "next/navigation";
import { pricingPlans } from "@/data/pricingPlans";
import { CircleCheckBig } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingDetails({ plan }) {
  const router = useRouter();
  const selectedPlan = pricingPlans.find(
    (p) => p.name.toLowerCase() === plan.toLowerCase()
  );

  if (!selectedPlan)
    return <p className="text-center text-red-500">Plan not found</p>;

  const actionPlan = {
    action: selectedPlan.name,
    actionName: `${
      selectedPlan.name === "Custom"
        ? "Contact for pricing"
        : "Proceed to Payment"
    }`,
    link: `${
      selectedPlan.name === "Custom"
        ? "/contact-for-pricing"
        : `${selectedPlan.name}/payment`
    }`,
  };
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="text-left space-y-4 mb-12">
        <span className="flex text-3xl md:text-3xl justify-between">
          <h1 className="uppercase font-bold font-eraBold">
            <span className="tracking-wider text-black font-eraBold">
              {actionPlan.action}
            </span>{" "}
            PLANS
          </h1>
          <h3 className="uppercase font-bold font-eraBold">
            {actionPlan.action !== "Custom" && (
              <>
                <span className="mr-2">&#8377;</span>
                {selectedPlan.price}/-
              </>
            )}
          </h3>
        </span>
        <p className="text-muted-foreground max-w-2xl">
          {selectedPlan.description}
        </p>
      </div>

      {/* Features */}
      <h3 className="text-2xl font-eraBold">Details</h3>
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full mb-16">
        {selectedPlan.features.map((feature, index) => (
          <div className="flex flex-row gap-3" key={index}>
            <CircleCheckBig size={25} className="text-green-500 w-16" />
            <div className="flex flex-col mb-3">
              <h4 className="text-xl font-semibold">{feature.name}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Button
          className="bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition duration-300"
          onClick={() => router.push(actionPlan.link)}
        >
          {actionPlan.actionName}
        </Button>
      </div>
    </div>
  );
}
