"use client";
import { useState } from "react";
import Script from "next/script";
import {
  PricingProvider,
  usePricing,
} from "@/contexts/pricingContext";
import Nav from "@/components/comp/Nav";
import PlanNotFound from "@/components/pages/pricing/PlanNotFound";
import Footer from "@/components/comp/Footer";
import { Button } from "@/components/ui/button";
import { usePayment } from "@/contexts/paymentProvider";

function PaymentContent() {
  const { selectedPlan } = usePricing();
  const { markAsPaid } = usePayment();
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  if (!selectedPlan) return <PlanNotFound />;

  const amount = selectedPlan.price || 1;

  const handlePayment = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const order = await res.json();
      if (!order.id) throw new Error("Order creation failed");

      const options = {
        key: "rzp_test_WO46fzLsG474tL",
        amount: order.amount,
        currency: order.currency,
        name: "WebSoul",
        description: "Freelance Payment",
        order_id: order.id,
        handler: async function (response) {
          const verifyRes = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              payment_id: response.razorpay_payment_id,
              order_id: response.razorpay_order_id,
              signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            markAsPaid(); // Update payment status and redirect to dashboard
          } else {
            alert("Payment verification failed");
          }
        },
        prefill: {
          name: "Amit Toppo",
          email: "webdev@gmail.com",
          contact: "1234567890",
        },
        theme: { color: "#3399cc" },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Script src="https://checkout.razorpay.com/v2/checkout.js" strategy="lazyOnload" />
      <h1 className="text-3xl font-bold mb-2 text-gray-800">Complete Your Payment</h1>
      <p className="text-gray-600">Securely pay for your selected plan</p>

      <div className="bg-white shadow-lg rounded-lg p-6 mt-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800">{selectedPlan.name}</h2>
        <p className="text-gray-600 mt-2">{selectedPlan.description || "Get access to exclusive features"}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-blue-600">₹{amount}</span>
          <span className="text-sm text-gray-500">One-time Payment</span>
        </div>
      </div>

      <div className="flex items-center bg-green-100 text-green-700 px-4 py-2 mt-4 rounded-md">
        <span className="text-lg font-semibold">🔒 100% Secure Payment</span>
      </div>

      <div className="mt-4 w-full max-w-md text-sm text-gray-600">
        <div className="flex justify-center">
          <input
            type="checkbox"
            id="agree"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="mr-2 w-4 h-4"
          />
          <label htmlFor="agree">
            I agree to the <a href="/policies/terms-conditions" className="text-blue-600 underline" target="_blank">Terms & Conditions</a> and
          </label>
          <a href="/policies/refund-policy" className="text-blue-600 underline ml-2" target="_blank">Refund Policy</a>
        </div>
      </div>

      <Button
        className="mt-6 px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        disabled={!isChecked || loading}
        onClick={handlePayment}
      >
        {loading ? "Processing..." : `Pay ₹${amount}`}
      </Button>
    </div>
  );
}

export default function PaymentPage({ params }) {
  return (
    <PricingProvider planName={params?.plan}>
      <Nav />
      <PaymentContent />
      <Footer />
    </PricingProvider>
  );
}