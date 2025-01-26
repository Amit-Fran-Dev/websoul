"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

const tiers = [
  {
    name: "STARTER",
    price: 6499,
    features: [
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
    ],
  },
  {
    name: "BUSINESS",
    price: 7999,
    features: [
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
    ],
  },
  {
    name: "E-COMMERCE",
    price: 9499,
    features: [
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
    ],
  },
];

export default function PricingTable() {
  const [active, setActive] = useState(2);
  return (
    <div id="pricing" className="container max-w-6xl mx-auto px-4 py-12">
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
          <button
            style={{ color: active === 1 ? "#ec8e00" : "initial", borderBottom: active === 1 ? "2px solid #ec8e00" : "none" }}
            onClick={() => setActive(1)}
            className="text-2xl font-era"
          >
            Portfolio
          </button>
          <button
            style={{ color: active === 2 ? "#ec8e00" : "initial", borderBottom: active === 2 ? "2px solid #ec8e00" : "none" }}
            onClick={() => setActive(2)}
            className="text-2xl font-era"
          >
            Business
          </button>
          <button
            style={{ color: active === 3 ? "#ec8e00" : "initial", borderBottom: active === 3 ? "2px solid #ec8e00" : "none" }}
            onClick={() => setActive(3)}
            className="text-2xl font-era"
          >
            E-Commerce
          </button>
        </div>
        {active === 2 && <BusinessScreen />}
        {active === 1 && <PortfolioScreen/>}
        {active === 3 && <ECommerceScreen />}
      </div>
    </div>
  );
}

export const PortfolioScreen = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {tiers.map((tier) => (
        <Card key={tier.name} className="bg-black text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center font-eraBold">
              {tier.name}
              <div className="mt-4 text-4xl font-eraBold">${tier.price}</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 ml-6">
            {tier.features.map((feature, index) => (
              <div
                key={index}
                className={`py-2 ${
                  ["Functionality", "Security"].includes(feature)
                    ? "font-bold text-lg mt-6"
                    : ""
                }`}
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
};

export const BusinessScreen = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {tiers.map((tier) => (
        <Card key={tier.name} className="bg-black text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center font-eraBold">
              {tier.name}
              <div className="mt-4 text-4xl font-eraBold">${tier.price}</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 ml-6">
            {tier.features.map((feature, index) => (
              <div
                key={index}
                className={`py-2 ${
                  ["Functionality", "Security"].includes(feature)
                    ? "font-bold text-lg mt-6"
                    : ""
                }`}
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
};

export const ECommerceScreen = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {tiers.map((tier) => (
        <Card key={tier.name} className="bg-black text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center font-eraBold">
              {tier.name}
              <div className="mt-4 text-4xl font-eraBold">${tier.price}</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 ml-6">
            {tier.features.map((feature, index) => (
              <div
                key={index}
                className={`py-2 ${
                  ["Functionality", "Security"].includes(feature)
                    ? "font-bold text-lg mt-6"
                    : ""
                }`}
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
};

