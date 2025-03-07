import { Link } from "@remix-run/react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { ThemeToggle } from "~/components/theme-toggle";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-bold text-xl">
            Herrlich Digital
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Start
          </Link>
          <Link
            to="/projects"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Projekte
          </Link>
          <Link
            to="/blog"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Kontakt
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-b">
          <nav className="container flex flex-col py-4 gap-2">
            <Link
              to="/"
              className="text-sm font-medium transition-colors hover:text-primary py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-sm font-medium transition-colors hover:text-primary py-2"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className="text-sm font-medium transition-colors hover:text-primary py-2"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium transition-colors hover:text-primary py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
