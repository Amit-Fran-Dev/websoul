

export default function Footer() {
    return (
      <footer id="footer" className="bg-black text-white py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold mb-4">STUDIO</h2>
            <nav className="space-y-2">
              <a href="#" className="block hover:text-gray-300 transition-colors">
                Abou Us
              </a>
              <a href="#" className="block hover:text-gray-300 transition-colors">
                Mulya Nirdharan Yojnaen
              </a>
              <a href="#" className="block hover:text-gray-300 transition-colors">
                Contact Us
              </a>
              <a href="#" className="block hover:text-gray-300 transition-colors">
                Services
              </a>
            </nav>
          </div>
          {/* <Separator orientation="vertical" /> */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <div className="space-y-2">
              <p>Bariyatu, Ranchi</p>
              <a href="mailto:webservices@gmail.com" className="block hover:text-gray-300 transition-colors">
                webservices@gmail.com
              </a>
              <a href="tel:+919065217900" className="block hover:text-gray-300 transition-colors">
                +91 9065217900
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  