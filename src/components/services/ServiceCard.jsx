import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { serviceIcons } from "../common/iconMap";

export default function ServiceCard({ service, layout = "tile", wide = false }) {
  const Icon = serviceIcons[service.icon];

  if (layout === "row") {
    return (
      <article className="grid gap-6 border-t border-line py-10 md:grid-cols-[5rem_1fr_1fr] md:gap-10 lg:grid-cols-[7rem_1.1fr_1fr]">
        <p className="font-display text-5xl font-bold text-accent lg:text-6xl" aria-hidden="true">
          {service.number}
        </p>
        <div>
          <p className="mb-3 flex items-center gap-2 text-sm text-muted">
            <Icon aria-hidden="true" className="h-4 w-4 text-accent" />
            {service.category}
          </p>
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{service.title}</h3>
          <p className="mt-4 leading-relaxed text-muted">{service.summary}</p>
          <p className="mt-4 leading-relaxed text-fg">{service.benefit}</p>
        </div>
        <ul className="space-y-3 self-start">
          {service.scope.map((item) => (
            <li key={item} className="flex gap-3 leading-snug text-fg">
              <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {item}
            </li>
          ))}
        </ul>
      </article>
    );
  }

  return (
    <article
      className={`group flex flex-col justify-between rounded-lg border border-line bg-card p-6 transition-colors duration-200 hover:border-accent sm:p-8 ${
        wide ? "lg:col-span-4" : "lg:col-span-2"
      }`}
    >
      <div>
        <div className="flex items-center justify-between">
          <Icon aria-hidden="true" className="h-7 w-7 text-accent" />
          <span className="font-display text-sm font-medium text-muted">{service.number}</span>
        </div>
        <h3 className="mt-10 text-2xl font-bold tracking-tight">{service.title}</h3>
        <p className={`mt-3 leading-relaxed text-muted ${wide ? "max-w-md" : ""}`}>{service.summary}</p>
      </div>
      <Link
        to="/services"
        className="mt-8 inline-flex min-h-[44px] items-center gap-1.5 font-medium text-fg transition-colors group-hover:text-accent"
      >
        Lihat cakupan pekerjaan
        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    </article>
  );
}
