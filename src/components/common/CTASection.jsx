import Container from "./Container";
import Button from "./Button";
import Reveal from "./Reveal";

export default function CTASection({
  title = "Ada kebutuhan produk digital?",
  text = "Kenali layanan kami dan temukan dukungan yang sesuai untuk kebutuhan digital Anda.",
  label = "Lihat Layanan",
}) {
  return (
    <section aria-labelledby="cta-title" className="border-t border-line">
      <Container className="py-20 sm:py-28">
        <Reveal className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
          <h2 id="cta-title" className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <div>
            <p className="max-w-md text-lg leading-relaxed text-muted">{text}</p>
            <Button to="/services" className="mt-8">
              {label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
