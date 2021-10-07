import Link from "next/link"

export default function Menu({ navLinks }) {
  return (
    <ul className="space-x-6 hidden sm:flex flex-row">
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`border-b-2 ${
            link.active ? "border-white" : "border-transparent"
          } hover:border-white transition`}
        >
          <Link href={link.location}>
            <a className="text-md">{link.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
