import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import ServiceCard from "../components/services/ServiceCard";
import { processSteps, services } from "../data/services";
import usePageTitle from "../hooks/usePageTitle";

export default function Services() {
  usePageTitle("Layanan");

  return (
    <>
      <section className="border-b border-line">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <SectionHeading
            as="h1"
            eyebrow="Layanan"
            title="Lima bidang keahlian, satu tim, satu daftar kerja."
            className="[&_h1]:max-w-3xl [&_h1]:text-4xl sm:[&_h1]:text-5xl lg:[&_h1]:text-6xl"
          />
          <p className="max-w-md text-lg leading-relaxed text-muted">
            Anda dapat menggunakan satu layanan atau meminta bantuan kami dari tahap strategi hingga peluncuran. Kami
            memulai dengan menyepakati tujuan bisnis, lalu menilai pekerjaan berdasarkan tujuan tersebut.
          </p>
        </Container>
      </section>

      <section aria-label="Daftar layanan">
        <Container className="py-8 sm:py-12">
          {services.map((service) => (
            <Reveal key={service.id}>
              <ServiceCard service={service} layout="row" />
            </Reveal>
          ))}
        </Container>
      </section>

      <section aria-label="Proses kerja" className="border-t border-line bg-surface">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Proses kerja"
                title="Lima tahap dengan hasil yang dapat Anda tinjau."
                description="Setiap tahap menghasilkan dokumen, prototipe, atau versi produk yang dapat dicoba, bukan sekadar laporan kemajuan."
              />
            </div>
          </div>
          <ol>
            {processSteps.map((step) => (
              <Reveal as="li" key={step.id} className="grid gap-3 border-t border-line py-8 sm:grid-cols-[5rem_1fr] sm:gap-8">
                <p className="font-display text-4xl font-bold text-accent" aria-hidden="true">
                  {step.number}
                </p>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">{step.title}</h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-muted">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
