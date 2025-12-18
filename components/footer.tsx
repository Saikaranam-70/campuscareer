import Link from "next/link"
import { GraduationCap } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="px-3 py-8 md:py-12 md:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-4">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-1.5 sm:gap-2 font-bold text-base sm:text-lg mb-3 sm:mb-4">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                <span>CampusCareer</span>
              </Link>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Your daily career companion for skill building, placement prep, and career growth.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>
                  <Link href="/daily-tips" className="hover:text-foreground">
                    Daily Career Tips
                  </Link>
                </li>
                <li>
                  <Link href="/roadmaps" className="hover:text-foreground">
                    Skill Roadmaps
                  </Link>
                </li>
                <li>
                  <Link href="/preparation" className="hover:text-foreground">
                    Placement Prep
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Resources</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>
                  <Link href="/resume" className="hover:text-foreground">
                    Resume Builder
                  </Link>
                </li>
                <li>
                  <Link href="/placements" className="hover:text-foreground">
                    Opportunities
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">About</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t text-center text-xs sm:text-sm text-muted-foreground">
            {/* <p>Design and Developed By Sai</p> */}
            <p>&copy; 2025 CampusCareer. All rights reserved.</p>
            
          </div>
        </div>
      </div>
    </footer>
  )
}
