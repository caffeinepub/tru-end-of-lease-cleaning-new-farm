import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Areas", href: "#areas" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-border shadow-xs"
      id="home"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/assets/generated/logo-tru-cleaning.dim_400x150.png"
            alt="Tru End of Lease Cleaning New Farm Logo"
            className="h-12 w-auto"
          />
        </a>

        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={`nav.${link.label.toLowerCase()}.link`}
              className="text-sm font-medium text-foreground hover:text-sky transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            data-ocid="nav.phone.button"
          >
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="h-4 w-4 mr-2" />
              0488 841 883
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            data-ocid="nav.quote.button"
          >
            <a href="#contact">Get Free Quote</a>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.menu.toggle"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                className="text-sm font-medium py-2 border-b border-border last:border-0"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 bg-primary text-primary-foreground"
              data-ocid="nav.mobile.phone.button"
            >
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-4 w-4 mr-2" />
                0488 841 883
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
