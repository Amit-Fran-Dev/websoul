import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    id: "01",
    name: "Babura",
    role: "Web Developer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia veniam vel omnis? Commodi, maiores veritatis? Eum voluptate soluta ducimus delectus magni, suscipit sunt. Velit quod cum quae possimus tempore?",
  },
  {
    id: "02",
    name: "Sinod",
    role: "Web Developer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia veniam vel omnis? Commodi, maiores veritatis? Eum voluptate soluta ducimus delectus magni, suscipit sunt. Velit quod cum quae possimus tempore?",
  },
]

export default function TeamExperts() {
  return (
    <div className="continer workProcess z-10 relative bg-black text-white py-10 overflow-hidden">
      <div className="max-w-6xl p-6 mx-auto">
      <div className="text-right flex flex-col">
          <h2 className="text-4xl md:text-4xl sm:text-3xl strokeTextWhite font-eraBold  tracking-tight mb-0">
            TEAM OF
          </h2>
          <div className="flex gap-2 ml-auto">
            <span className="mt-1">
              <p className="text-xs font-era text-white">MEET OUR</p>
              <p className="text-xs font-era text-white"> CREW</p>
            </span>
            <h2 className="text-4xl md:text-4xl sm:text-3xl font-eraBold">
              EXPERTS
            </h2>
          </div>
        </div>

        <div className="grid gap-6 mt-12">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-gray-600">/ {member.role}</p>
                  </div>
                  <span className="text-gray-400 text-lg">{member.id}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

