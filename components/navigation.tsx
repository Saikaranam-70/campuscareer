"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, GraduationCap } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/daily-tips", label: "Daily Tips" },
  { href: "/roadmaps", label: "Roadmaps" },
  { href: "/preparation", label: "Prep" },
  { href: "/resume", label: "Resume" },
  { href: "/placements", label: "Jobs" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="px-3 md:px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-base md:text-lg">
            <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            <span>CampusCareer</span>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-2.5 py-1.5 text-sm font-medium rounded-md transition-colors duration-150",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60 hover:text-foreground hover:bg-accent",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-9 w-9"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation - Full width dropdown */}
        {isOpen && (
          <nav className="md:hidden pb-3 border-t mt-1 pt-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2.5 text-sm font-medium rounded-md transition-colors duration-150 mb-0.5",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60 hover:text-foreground hover:bg-accent",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
