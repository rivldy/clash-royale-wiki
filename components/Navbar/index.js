import { useState } from "react"
import Link from "next/link"
import { FaBars, FaTimes } from "react-icons/fa"
// Components
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"

export default function Navbar({ cards, clans, players }) {
  const [navOpen, setNavOpen] = useState(false)

  const navLinks = [
    {
      id: 1,
      name: "Cards",
      location: "/cards",
      active: cards,
    },
    {
      id: 2,
      name: "Clans",
      location: "/clans",
      active: clans,
    },
    {
      id: 3,
      name: "Players",
      location: "/players",
      active: players,
    },
  ]

  return (
    <nav>
      <header className="bg-cr-blue fixed inset-x-0 top-0 py-4 sm:py-6 z-30">
        <div className="container flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl sm:text-3xl font-semibold text-white">
              CRwiki
            </a>
          </Link>
          <Menu navLinks={navLinks} />
          <div
            className="block sm:hidden cursor-pointer hover:bg-cr-indigo p-2"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </header>
      <MobileMenu navLinks={navLinks} navOpen={navOpen} />
    </nav>
  )
}
