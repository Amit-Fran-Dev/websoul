import React from 'react'
import {
  MessageCircle,
  Zap,
  Smartphone,
  CreditCard,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-12 text-center">
    <h2 className="text-4xl md:text-1xl sm:text-3xl strokeText font-scollar mb-0">
      WE PROVIDE ADVANCED
    </h2>
    <h2 className="font-eraBold text-4xl md:text-4xl sm:text-3xl font-black mb-2">
      WEB DESIGN SERVICE IN RANCHI
    </h2>
    <p className="text-xl font-era text-gray-600 mb-8">
      We are Freelancers
    </p>

    {/* Hero Card */}
    <div className="relative aspect-[4/2] md:aspect-[3.1] rounded-2xl overflow-hidden mb-4 bg-black">
      <img
        src={"/images/1.jpg"}
        alt="Hero image"
        className="heroImage -translate-y-10 md:-translate-y-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-8 ">
        <div className="text-white text-left max-w-md">
          <p className="text-sm mb-4">Landmark Analytics</p>
          <h4 className="text-lg md:text-1xl font-era font-bold mb-6">
            Space in typographical terms is usually
          </h4>
          <Button variant="secondary" size="lg">
            CALL NOW
          </Button>
        </div>
      </div>
    </div>

    {/* Features */}
    <div className="flex buttonGroupSt z-10 bg-white rounded-full flex-wrap relative font-sans font-bold justify-between gap-2 mb-20">
      <Feature icon={<MessageCircle strokeWidth={1.5} />} text="Live Chatting" />
      <Feature icon={<Zap strokeWidth={1.5} />} text="Light Speed" />
      <Feature icon={<Smartphone strokeWidth={1.5} />} text="Responsive Design" />
      <Feature icon={<CreditCard strokeWidth={1.5} />} text="Payment Gateway" />
      <Feature icon={<Clock strokeWidth={1.5} />} text="24x7 Support" />
    </div>

    {/* Guarantee Section */}
    <div className="max-w-6xl mx-auto text-left">
      <div className="mb-4 relative overlapText">
        <h3 className="text-2xl z-20 font-eraBold mb-2">
          Money
          <br />
          Back
          <br />
          Guaranty
        </h3>
        <span className="fadedText absolute text-8xl font-bold font-eraBold text-gray-900">
          100%
        </span>
      </div>
      <p className="text-gray-600 mb-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quis
        veniam vel omnis? Commodi, maiores veritatis? Eum voluptate soluta
        ducimus delectus magni, suscipit sunt. Velit quod cum quae possimus
        tempore?
      </p>
      <Button variant="none" size="lg" className='font-eraBold'>
        READ MORE
      </Button>
    </div>
  </div>
  )
}

export default HeroSection


function Feature({ icon, text }) {
    return (
      <div className="flex hover:bg-black hover:text-white cursor-pointer bg-white rounded-full items-center gap-2 text-black px-5 py-2">
        {icon}
        <span className="text-sm font-medium hidden md:block">{text}</span>
      </div>
    );
  }
  