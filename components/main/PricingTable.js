import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// interface PricingTier {
//   name: string
//   price: number
//   features: string[]
// }

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
]

export default function PricingTable() {
  return (
    <div className="full-w-6xl min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-left space-y-4">
          <h1 className="text-4xl font-bold font-eraBold">WEBSITE DESIGN PLAN</h1>
          <p className="text-muted-foreground max-w-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quis veniam vel omnis? Commodi, maiores
            veritatis?
          </p>
        </div>

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
                      ["Functionality", "Security"].includes(feature) ? "font-bold text-lg mt-6" : ""
                    }`}
                  >
                    {feature}
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white text-black hover:bg-gray-200">BOOK ORDER</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

