"use client";
import { useRouter } from "next/navigation";
import { pricingPlans } from "@/data/pricingPlans";
import { CircleCheckBig } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

export default function PricingDetails({ plan }) {
  const router = useRouter();
  const selectedPlan = pricingPlans.find(
    (p) => p.name.toLowerCase() === plan.toLowerCase()
  );
  console.log(selectedPlan);

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* Header section */}
      <div className="text-left space-y-4 mb-12">
        <span className="flex text-3xl md:text-3xl justify-between">
          <h1 className="uppercase font-bold font-eraBold">
            <span className="tracking-wider text-black font-eraBold">
              {selectedPlan.name}
            </span>{" "}
            PLANS
          </h1>
          <h3 className="uppercase font-bold font-eraBold">
            {selectedPlan.name !== "Custom" && (
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

      {/* Subscription Features */}
      <div>
        <h3 className="text-2xl font-eraBold">Details</h3>
        <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full mb-16">
          {selectedPlan.features.map((feature, index) => (
            <div className="flex flex-row gap-3" key={index}>
              <CircleCheckBig size={25} className="text-green-800 w-16" />
              <div className="flex flex-col mb-3">
                <h4 className="text-xl font-semibold">{feature.name}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alert Dialog for Terms & Conditions */}
      <div className="flex justify-center mt-6">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition duration-300">
              Proceed to Payment
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Terms and Conditions</AlertDialogTitle>
              <AlertDialogDescription>
                Please read and accept our{" "}
                <a
                  href="/terms"
                  className="text-blue-600 underline"
                  target="_blank"
                >
                  Terms & Conditions
                </a>{" "}
                before proceeding.
              </AlertDialogDescription>
              <div className="mt-4 flex items-center">
                <input
                  type="checkbox"
                  id="agree"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="mr-2 w-4 h-4"
                />
                <label htmlFor="agree">I agree to the Terms & Conditions</label>
              </div>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Button
                disabled={!isChecked}
                onClick={() =>
                  router.push(`/payment?plan=${selectedPlan.name}`)
                }
                className={`bg-green-500 text-white ${
                  !isChecked ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Continue to Payment
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
