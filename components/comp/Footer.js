import { navigationList } from "@/lib/navigationList";
import Logo from "./logo";

export default function Footer() {
  const domainName = process.env.NEXT_PUBLIC_DOMAIN_NAME;
  const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL;
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            
          <Logo color="color" size={30} className="bg-lime mb-4 p-1 rounded-full w-auto" />
            <p className="text-white">
              Transforming ideas into exceptional digital experiences through
              creative design and clean code.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">STUDIO</h3>
            <ul className="space-y-2">
              {navigationList.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-white hover:text-yellow-500">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-400">Bariyatu, Ranchi</p>
              <a
                href="mailto:webservices@gmail.com"
                className="text-gray-400 hover:text-white block"
              >
                {supportEmail}
              </a>
              <a
                href="tel:+919065217900"
                className="text-gray-400 hover:text-white block"
              >
                +91 9065217900
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2024 {domainName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
