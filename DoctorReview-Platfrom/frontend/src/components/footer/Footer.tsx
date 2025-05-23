import Link from "next/link"


export function Footer() {
  return (
    <footer className="border-t py-8 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              
              <span>HeyDoc</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Helping patients find the right healthcare providers through honest, anonymous reviews.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link
                  href="/review/new"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Write a Review
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Email: contact@sample.com</li>
              <li className="text-sm text-muted-foreground">Phone: (000) 000-0000</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} DocReview. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
