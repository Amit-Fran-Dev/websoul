"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CATEGORIES = [
  { name: "Portfolio Websites", color: "red-500" },
  { name: "Business Websites", color: "yellow-500" },
  { name: "E-Commerce Websites", color: "green-500" },
];

const PRICING_PLANS = [
  { name: "Starter Plan", price: 5000 },
  { name: "Professional Plan", price: 10000 },
  { name: "Enterprise Plan", price: 15000 },
];

const FEATURES = [
  "4 Page Modern Website",
  "Domain Configuration",
  "Hosting Configuration",
  "Business Email",
  "Mobile Responsive",
  "Admin Panel",
  "Unlimited Photo & Videos",
  "Functionality",
  "Ontime Chat",
  "Contact Form",
  "SEO ready Website",
  "Security",
  "Free SSL",
  "Technical Support 1 Year",
];

export default function PricingTable() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="container max-w-6xl mx-auto px-4 pt-12 text-center">
      <h1 className="text-4xl font-bold font-eraBold">WEBSITE DESIGN PLANS</h1>
      <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
        Choose the best plan that suits your business needs.
      </p>
      <div className="flex justify-center gap-6 my-8">
        {CATEGORIES.map((category, index) => (
          <TabButton
            key={index}
            label={category.name}
            active={activeCategory === index}
            onClick={() => setActiveCategory(index)}
          />
        ))}
      </div>
      <PricingCards activeCategory={activeCategory} />
    </div>
  );
}

const TabButton = ({ label, active, onClick }) => (
  <button
    className={`text-2xl font-era px-4 py-2 border-b-2 transition-all duration-300 ${
      active ? "border-orange-500 text-orange-500" : "border-transparent"
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

const PricingCards = ({ activeCategory }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {PRICING_PLANS.map((plan) => (
        <Card key={plan.name} className={` text-black p-6 rounded-xl border border-${CATEGORIES[activeCategory].color}`}>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-eraBold ">{plan.name}</CardTitle>
            <div className="mt-2 text-4xl font-eraBold text-orange-400">${plan.price}</div>
          </CardHeader>
          <CardContent className="mt-4 space-y-3 text-left">
            {FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className={`py-2 ${["Functionality", "Security"].includes(feature) ? "font-bold text-lg mt-4" : ""}`}
              >
                {feature}
              </div>
            ))}
          </CardContent>
          <CardFooter className="mt-4">
            <Button className="w-full bg-orange-500 text-black hover:bg-orange-600 font-bold py-2 px-4 rounded-lg">
              BOOK ORDER
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
