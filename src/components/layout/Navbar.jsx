import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "../common/Container";
import Wordmark from "../common/Wordmark";
import Button from "../common/Button";
import { company } from "../../data/company";

const linkClass = ({ isActive }) =>
  `relative flex min-h-[44px] items-center text-[0.95rem] font-medium transition-colors duration-200 hover:text-fg ${
    isActive
      ? "text-fg after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-accent"
      : "text-muted"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" aria-label="Nexora Digital, beranda" className="rounded-sm">
          <Wordmark />
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
          {company.nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/contact">
            Lihat Alamat
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-fg transition-colors hover:border-accent md:hidden"
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="menu-enter border-t border-line bg-ink md:hidden">
          <Container className="pb-6 pt-2">
            <nav aria-label="Navigasi seluler">
              <ul>
                {company.nav.map((item) => (
                  <li key={item.to} className="border-b border-line">
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        `flex min-h-[52px] items-center justify-between font-display text-2xl font-bold ${
                          isActive ? "text-accent" : "text-fg"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <Button to="/contact" className="mt-6 w-full">
              Lihat Alamat
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
