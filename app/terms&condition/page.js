"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function TermsAndConditions() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="text-gray-600 mb-6">
        Welcome to our platform. By joining, you agree to the following terms:
      </p>

      <div className="space-y-4 text-gray-700">
        <h2 className="text-xl font-semibold">1. Service Agreement</h2>
        <p>
          As a freelancer, I provide digital services, including but not limited
          to web development, design, and consulting. By engaging with my
          services, you agree to these terms.
        </p>

        <h2 className="text-xl font-semibold">2. Payment Terms</h2>
        <p>
          Payments are required upfront or as per agreed milestones. No refunds
          will be provided once a service has been delivered.
        </p>

        <h2 className="text-xl font-semibold">3. Client Responsibilities</h2>
        <p>
          Customers must provide accurate project details and respond promptly
          to communication for a smooth workflow.
        </p>

        <h2 className="text-xl font-semibold">4. Revisions and Support</h2>
        <p>
          Limited revisions are included in each project. Additional revisions
          may incur extra costs.
        </p>

        <h2 className="text-xl font-semibold">5. Termination Policy</h2>
        <p>
          I reserve the right to terminate services if a client is unresponsive
          or violates these terms.
        </p>
      </div>

      <div className="mt-6 flex items-center">
        <input
          type="checkbox"
          id="agree"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mr-2 w-4 h-4"
        />
        <label htmlFor="agree" className="text-gray-700">
          I agree to the Terms & Conditions
        </label>
      </div>

      <Button
        disabled={!agreed}
        onClick={() => router.push("/join")}
        className={`mt-4 bg-blue-500 text-white ${
          !agreed ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Accept and Continue
      </Button>
    </div>
  );
}
