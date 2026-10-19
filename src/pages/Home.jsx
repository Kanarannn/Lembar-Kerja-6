import Container from "../components/common/Container";
import Button from "../components/common/Button";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import CTASection from "../components/common/CTASection";
import HeroVisual from "../components/home/HeroVisual";
import ServiceCard from "../components/services/ServiceCard";
import { company } from "../data/company";
import { services } from "../data/services";
import usePageTitle from "../hooks/usePageTitle";

export default function Home() {
  usePageTitle("");
  const highlighted = services.slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-0 h-[480px] w-[480px] rounded-full bg-accent/10 blur-3xl"
        />
        <Container className="relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:gap-8 lg:py-28">
          <div className="lg:col-span-7">
            <p className="mb-6 flex items-center gap-3 text-sm font-medium text-accent">
              <span aria-hidden="true" className="h-2 w-2 bg-accent" />
              {company.tagline}
            </p>
            <h1 className="text-[2.6rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Kami Membangun Produk Digital untuk Memajukan Bisnis.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              Kami merancang dan membangun situs web, perangkat lunak, serta antarmuka untuk kebutuhan digital bisnis.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to="/services">Lihat Layanan</Button>
              <Button to="/contact" variant="secondary">
                Lihat Alamat
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[320px] sm:max-w-[400px] lg:col-span-5 lg:max-w-none">
            <HeroVisual />
          </div>
        </Container>
      </section>

      <section aria-labelledby="intro-title">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 id="intro-title" className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Studio kecil dengan jalur komunikasi yang ringkas.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">{company.description}</p>
            <Button to="/about" variant="ghost" className="mt-4">
              Kenali Tim Kami
            </Button>
          </Reveal>
          <Reveal as="dl" delay={120} className="lg:col-span-6 lg:col-start-7">
            {company.intro.map((item) => (
              <div key={item.id} className="grid gap-2 border-t border-line py-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
                <dt className="font-display text-lg font-bold">{item.term}</dt>
                <dd className="leading-relaxed text-muted">{item.text}</dd>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section aria-label="Layanan pilihan" className="border-t border-line bg-surface">
        <Container className="py-20 sm:py-28">
          <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Layanan kami"
              title="Empat cara kami membantu mewujudkan produk."
              as="h2"
              className="[&_h2]:max-w-xl"
            />
            <Button to="/services" variant="ghost">
              Semua layanan
            </Button>
          </Reveal>
          <Reveal delay={100} className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {highlighted.map((service, index) => (
              <ServiceCard key={service.id} service={service} wide={index === 0 || index === 3} />
            ))}
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
