'use client';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleCheckBig} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { pricingPlans } from "@/data/pricingPlans";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function PricingTable() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center py-12 px-4">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold font-eraBold">
          WEBSITE DESIGN PLANS
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
          Choose the best plan that suits your business needs.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full mb-16">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className={`overflow-hidden ${
              plan.name === "Custom"
                ? "bg-black text-white"
                : "border bg-[white]/40 text-black"
            } ${plan.badge === "Popular" ? "outline-2 outline outline-gray-500" : ""}`}
          >
            <CardHeader
              className={plan.name !== "Custom" ? "bg-[white]" : "bg-white/10"}
            >
              <CardTitle
                className={
                  plan.name === "Custom"
                    ? "flex uppercase text-white/80 items-center justify-between"
                    : "flex uppercase text-black/60 items-center justify-between"
                }
              >
                <p className="font-eraBold">{plan.name}</p>
                {plan.badge && (
                  <Badge className="rounded-xl normal-case py-1 border-none bg-gradient-to-r from-[#fda4af]  to-[#f43f5e] text-black hover:text-white">
                    {plan.badge}
                  </Badge>
                )}
              </CardTitle>
              <div className="flex items-baseline gap-1">
                {plan.name !== "Custom" && (
                  <span className="text-2xl">&#8377;</span>
                )}
                <span className="text-3xl font-bold font-eraBold">
                  {plan.price}
                </span>
              </div>
              <p className="text-sm">{plan.description}</p>
            </CardHeader>
            <CardContent
              className={plan.name !== "Custom" ? "bg-[white]" : "bg-white/10"}
            >
              <Button
                className={plan.badge === 'Popular'? "w-full bg-blue-600 hover:bg-blue-400":"w-full"}
                variant={plan.name === "Custom" ? "secondary" : "default"}
                onClick={()=>router.push(`/pricing/${plan.name.toLowerCase()}`)}
              >
                {plan.buttonText}
              </Button>
            </CardContent>
            <Separator
              className={
                plan.name === "Custom" ? "mb-4 bg-white/30" : "mb-4 bg-black/10"
              }
            />
            <CardFooter className="">
              <ul className="flex flex-col gap-3">
                {plan.features.map((feature,index) => (
                  <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                  <li key={feature} className="flex cursor-pointer items-center gap-2 hover:border-b border-b-slate-800">
                    <CircleCheckBig className="h-4 w-4 text-green-700" />
                    <span className="text-sm">{feature.name}</span>
                  </li>
                  </TooltipTrigger>
                  <TooltipContent className="">
                    <span>{feature.description}</span>
                  </TooltipContent>
                  </Tooltip>
                  </TooltipProvider>
                ))}
              </ul>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}