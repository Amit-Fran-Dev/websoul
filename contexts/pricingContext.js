"use client";
import { createContext, useContext, useMemo } from "react";
import { pricingPlans } from "@/data/pricingPlans";

const PricingContext = createContext(null);

export function PricingProvider({ planName, children }) {
  const selectedPlan = useMemo(() => {
    return pricingPlans.find((p) => p.name.toLowerCase() === planName?.toLowerCase()) || null;
  }, [planName]);

  return (
    <PricingContext.Provider value={{ pricingPlans, selectedPlan }}>
      {children}
    </PricingContext.Provider>
  );
}

export function usePricing() {
  const context = useContext(PricingContext);
  if (!context) {
    throw new Error("usePricing must be used within a PricingProvider");
  }
  return context;
}
