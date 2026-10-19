import { Link } from "react-router-dom";
import Container from "../common/Container";
import Wordmark from "../common/Wordmark";
import { company } from "../../data/company";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Wordmark className="text-2xl" />
            <p className="mt-5 max-w-md leading-relaxed text-muted">{company.description}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <nav aria-label="Navigasi footer">
              <h2 className="text-sm font-medium text-muted">Halaman</h2>
              <ul className="mt-3">
                {company.nav.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="flex min-h-[40px] items-center text-fg transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h2 className="text-sm font-medium text-muted">Studio</h2>
              <address className="mt-3 space-y-1 not-italic leading-relaxed text-fg">
                <p>{company.address}</p>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-6 text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} {company.name}.</p>
        </div>
      </Container>
    </footer>
  );
}
