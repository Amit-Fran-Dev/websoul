import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Animation from "../animation";

export default function WorkProcess() {
  return (
    <div className="workProcess z-10 relative bg-black text-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 py-12 ">
        {/* Header */}
        <div className="space-y-1">
          <h2 className="text-4xl md:text-4xl sm:text-3xl strokeTextWhite font-eraBold  tracking-tight mb-0">
            STEPS
          </h2>
          <div className="space-y-1 flex gap-2">
            <h3 className="text-3x font-eraBold md:text-4xl font-bold tracking-tighter">
              WE DO
            </h3>
            <span>
              <p className="text-xs font-era text-gray-50">WORK</p>
              <p className="text-xs font-era text-gray-50"> PROCESS</p>
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card className="bg-zinc-700 border-0">
            <CardHeader>
            <div className="text-2xl text-white px-1 ml-auto mb-10">01</div>
              <CardTitle className="text-2xl font-eraBold  text-white">UI/UX Designing</CardTitle>
            </CardHeader>
          </Card>

          <Card className="bg-zinc-700 border-0">
            <CardHeader>
            <div className="text-2xl text-white px-1 ml-auto mb-10">02</div>
              <CardTitle className="text-2xl font-eraBold  text-white">Web Development</CardTitle>
            </CardHeader>
          </Card>

          <Card className="bg-zinc-700 border-0">
            <CardHeader>
            <div className="text-2xl text-white px-1 ml-auto mb-10">03</div>
              <CardTitle className="text-2xl font-eraBold  text-white">SEO</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="relative customBtnRounded rounded-full my-8 border-2 font-era bg-white text-black transition-colors">
          <a
            href="#"
            variant="none"
            size="lg"
            className=""
          >
            LET&apos;S START
          </a>
          <div className="customBtnRoundedAnime"></div>
        </div>

        {/* Description */}
        <p className="text-gray-400 max-w-6xl text-justify"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quis veniam vel omnis? Commodi, maiores veritatis? Eum voluptate soluta ducimus delectus magni, suscipit sunt. Velit quod cum quae possimus tempore? adipisicing elit. Neque quis veniam vel omnis? Commodi, maiores veritatis?
        </p>
        <Animation width="100px" height="100px" className="absolute left-0 walkImage bottom-40" theme="walkBlack"/>
      </div>
    </div>
  );
}
