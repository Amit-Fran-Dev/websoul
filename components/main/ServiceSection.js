export default function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "UI/UX DESIGNING",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quis veniam vel omnis? Commodi, maiores veritatis? Eum voluptate soluta ducimus distinctio magni, suscipit sunt. Velit quod cum quas possimus temporibus?",
    },
    {
      number: "02",
      title: "WEB DEVELOPEMENT",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quis veniam vel omnis? Commodi, maiores veritatis? Eum voluptate soluta ducimus distinctio magni, suscipit sunt. Velit quod cum quas possimus temporibus?",
    },
    {
      number: "03",
      title: "SEARCH ENGINE OPTIMISATION",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quis veniam vel omnis? Commodi, maiores veritatis? Eum voluptate soluta ducimus distinctio magni, suscipit sunt. Velit quod cum quas possimus temporibus?",
    },
  ];

  return (
    <div id="service" className="container max-w-6xl px-6 py-12">
      <div className="text-right mb-16">
        <h2 className="text-3xl md:text-4xl font-eraBold font-bold mb-2">
          OUR SERVICES
        </h2>
        <p className="text-black">
          We provide responsible and SEO friendly websites for your business.
        </p>
      </div>

        {services.map((service, index) => (
          <div
            key={index}
            className="mb-16"
          >
            <div className="mb-4 relative overlapText">
              <h3 className="text-2xl z-20 font-era mb-2">
                {service.title}
              </h3>
              <span className="fadedText absolute text-8xl font-bold font-eraBold text-gray-900">
                {service.number}
              </span>
            </div>
            <div>
              <p className="text-black">
                {service.description}
              </p>
              <button className="text-sm my-6 font-era hover:text-gray-600 transition-colors">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
  );
}
