import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white">
    <Link href="/" className="text-2xl font-bold">
      WS
    </Link>
    <div className="hidden md:flex gap-8">
      <Link href="/plans" className="text-base hover:text-gray-300">
        PLANS
      </Link>
      <Link href="/services" className="text-base hover:text-gray-300">
        SERVICES
      </Link>
      <Link href="/offer" className="text-base hover:text-gray-300">
        OFFER
      </Link>
      <Link href="/team" className="text-base hover:text-gray-300">
        TEAM
      </Link>
      <Link href="/contact" className="text-base hover:text-gray-300">
        CONTACT US
      </Link>
    </div>
    </nav>
  )
}

export default Nav
