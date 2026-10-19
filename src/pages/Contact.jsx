import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import { company } from "../data/company";
import usePageTitle from "../hooks/usePageTitle";

export default function Contact() {
  usePageTitle("Kontak");

  return (
    <>
      <section className="border-b border-line">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-12 lg:gap-20">
          <SectionHeading
            as="h1"
            eyebrow="Kontak"
            title="Alamat Nexora Digital."
            className="lg:col-span-7 [&_h1]:text-4xl sm:[&_h1]:text-5xl lg:[&_h1]:text-6xl"
          />
          <address className="self-end border-t border-line pt-5 text-xl not-italic text-fg lg:col-span-4 lg:col-start-9">
            {company.address}
          </address>
        </Container>
      </section>
    </>
  );
}
