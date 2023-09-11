import Link from "next/link"

export default function () {
  const links = [
    {display: "about", href: "/about"},
    {display: "posts", href: "/posts"},
  ].map(l => <li><Link href={l.href}>{l.display}</Link></li>)

  return (
    <>
    <h1>hi, im og</h1>
    <nav>
      <ul>
        {links}
      </ul>
    </nav>
    </>
  )
}