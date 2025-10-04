import Link from "next/link"

const Navbar = () => {
  return (
    <>
    <header>
        <div className="bg-slate-900">
            <nav className="flex justify-between p-4">
    <div className="logo"><h1 className="text-2xl text-amber-400">Next Logo</h1></div>

                <ul className="flex gap-4 text-amber-400">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/service">Service</Link></li>
                </ul>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Navbar