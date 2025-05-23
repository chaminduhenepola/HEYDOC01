import Link from "next/link"


export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between ">
        <Link href="/" className="flex items-center gap-2 font-bold text-4xl pt-1">
          
          <span>HeyDoc</span>
        </Link>
<br/>


        <nav className="hidden md:flex gap-6 ml-auto ">
          <Link href="/" className="text-xl font-bold text-muted-foreground hover:text-blue-700">
            Home
          </Link>
          <Link href="/doctors" className="text-lg font-bold text-muted-foreground hover:text-foreground transition-colors  hover:text-blue-700">
            Find Doctors
          </Link>
          <Link href="/about" className="text-lg font-bold text-muted-foreground hover:text-foreground transition-colors  hover:text-blue-700">
            About
          </Link>
        </nav>


      </div>
    </header>
  )
}
