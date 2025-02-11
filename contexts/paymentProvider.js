"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const PaymentContext = createContext(null);

export function PaymentProvider({ children }) {
  const [isPaid, setIsPaid] = useState(false);
  const router = useRouter();

  // Check payment status on mount
  useEffect(() => {
    const paymentStatus = localStorage.getItem("payment_status");
    setIsPaid(paymentStatus === "paid");
  }, []);

  // Function to update payment status
  const markAsPaid = () => {
    localStorage.setItem("payment_status", "paid");
    setIsPaid(true);
    router.push("/dashboard");
  };

  // Redirect to pricing if not paid
  useEffect(() => {
    if (!isPaid && window.location.pathname === "/dashboard") {
      router.push("/#pricing");
    }
  }, [isPaid, router]);

  return (
    <PaymentContext.Provider value={{ isPaid, markAsPaid }}>
      {children}
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  return useContext(PaymentContext);
}
