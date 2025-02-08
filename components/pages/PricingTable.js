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

const PRICING_PLANS = [
  {
    name: "STARTER",
    price: 6499,
  },
  {
    name: "BUSINESS",
    price: 7999,
  },
  {
    name: "E-COMMERCE",
    price: 9499,
  },
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
  const [active, setActive] = useState(2);
  return (
    <div className="container max-w-6xl mx-auto px-4 pt-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-left">
          <h1 className="text-4xl font-bold font-eraBold">
            WEBSITE DESIGN PLAN
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quis
            veniam vel omnis? Commodi, maiores veritatis?
          </p>
        </div>
        <div className="flex mx-auto gap-4 ml-auto my-10 justify-center flex-wrap">
          <TabButton label="Portfolio" active={active} setActive={() => setActive(1)} tabIndex={1} />
          <TabButton label="Business" active={active} setActive={() => setActive(2)} tabIndex={2} />
          <TabButton label="E-Commerce" active={active} setActive={() => setActive(3)} tabIndex={3} />
        </div>
        {active === 2 && <PricingCards />}
        {active === 1 && <PricingCards />}
        {active === 3 && <PricingCards />}
      </div>
    </div>
  );
}

const TabButton = ({ label, active, setActive, tabIndex }) => (
  <button
    style={{ color: active === tabIndex ? "#ec8e00" : "initial", borderBottom: active === tabIndex ? "2px solid #ec8e00" : "none" }}
    onClick={setActive}
    className="text-2xl font-era"
  >
    {label}
  </button>
);

const PricingCards = () => (
  <div className="grid md:grid-cols-3 gap-6">
    {PRICING_PLANS.map((plan) => (
      <Card key={plan.name} className="bg-black text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center font-eraBold">
            {plan.name}
            <div className="mt-4 text-4xl font-eraBold">${plan.price}</div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 ml-6">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className={`py-2 ${["Functionality", "Security"].includes(feature) ? "font-bold text-lg mt-6" : ""}`}
            >
              {feature}
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-white text-black hover:bg-gray-200">
            BOOK ORDER
          </Button>
        </CardFooter>
      </Card>
    ))}
  </div>
);
