import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    id: "01",
    name: "DANISH",
    role: "Web Developer",
    img: "https://designimages.appypie.com/profilepicture/profilepicture-2-portrait-head.jpg",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia veniam vel omnis? Commodi, maiores veritatis? Eum voluptate soluta ducimus delectus magni, suscipit sunt. Velit quod cum quae possimus tempore?",
  },
  {
    id: "02",
    name: "AMIT",
    role: "Web Developer",
    img: "https://i1.rgstatic.net/ii/profile.image/1183926055903240-1659281376832_Q512/William-Bayfield-Farrell.jpg",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia veniam vel omnis? Commodi, maiores veritatis? Eum voluptate soluta ducimus delectus magni, suscipit sunt. Velit quod cum quae possimus tempore?",
  },
];

export default function TeamExperts() {
  return (
    <div className="continer workProcess z-10 relative bg-black text-white py-10 overflow-hidden">
      <div className="max-w-6xl p-6 mx-auto">
        <div className="text-right flex flex-col">
          <h2 className="text-4xl md:text-4xl sm:text-3xl strokeTextWhite font-eraBold mb-0">
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
        <div className="flex flex-col md:flex-row gap-6 my-12">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="bg-white relative border-none rounded-xl overflow-hidden"
            >
              <div className="w-full pl-36 py-2 pr-4 flex items-center justify-between mt-8 bg-zinc-800">
                <img
                  style={{ borderRadius: "50%", borderWidth: "0.9rem" }}
                  className="absolute left-3 border-white bg-white object-cover aspect-[1/1]"
                  src={member.img}
                  width="120"
                  height="120"
                />
                <div>
                  <h3 className="text-xl text-white font-eraBold">
                    {member.name}
                  </h3>
                  <p className="text-yellow-500 font-era">{member.role}</p>
                </div>
                <span className="text-gray-400 text-xl">{member.id}</span>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4"></div>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
