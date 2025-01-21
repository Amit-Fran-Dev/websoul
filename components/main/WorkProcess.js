import { Card, CardTitle } from "@/components/ui/card";

export default function WorkProcess() {
  return (
    <div className=" bg-black text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
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
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-zinc-700 border-0 cardImageBg">
            <div className="flex flex-row justify-between align-middle space-y-1.5 p-6">
              <CardTitle className="text-2xl font-eraBold  text-black">UI/UX Designing</CardTitle>
              <CardTitle className="text-2xl font-era text-white bg-black px-1 rounded-sm">01</CardTitle>
            </div>
          </Card>

          <Card className="bg-zinc-700 border-0 cardImageBg">
            <div className="flex flex-row justify-between space-y-1.5 p-6">
              <CardTitle className="text-2xl font-eraBold  text-black">Web Development</CardTitle>
              <CardTitle className="text-2xl font-era text-white bg-black px-1 rounded-sm">02</CardTitle>
            </div>
          </Card>

          <Card className="bg-zinc-700 border-0 cardImageBg">
            <div className="flex flex-row justify-between space-y-1.5 p-6">
              <CardTitle className="text-2xl font-eraBold  text-black">SEO</CardTitle>
              <CardTitle className="text-2xl font-era text-white bg-black px-1 rounded-sm">03</CardTitle>
            </div>
          </Card>
        </div>

        {/* CTA Button */}
        <div>
          <a
            href="#"
            variant="none"
            size="lg"
            className="rounded-full customBtnRounded border-2 font-era hover:bg-white hover:text-black transition-colors"
          >
            LET&apos;S START
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-400 max-w-6xl text-justify"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quis veniam vel omnis? Commodi, maiores veritatis? Eum voluptate soluta ducimus delectus magni, suscipit sunt. Velit quod cum quae possimus tempore? adipisicing elit. Neque quis veniam vel omnis? Commodi, maiores veritatis?
        </p>
      </div>
    </div>
  );
}
