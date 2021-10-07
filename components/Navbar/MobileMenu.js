import Link from "next/link"

export default function MobileMenu({ navLinks, navOpen }) {
  return (
    <ul
      className={`bg-red-400 absolute ${
        navOpen ? "top-0" : "top-full"
      } inset-x-0 flex sm:hidden flex-col items-center justify-center space-y-2 pt-20 pb-4 z-10 transition-transform duration-1000`}
    >
      {navLinks.map((link) => (
        <li key={link.id}>
          <Link href={link.location}>
            <a className="text-md">{link.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
