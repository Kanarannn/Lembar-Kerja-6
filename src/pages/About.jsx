import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import CTASection from "../components/common/CTASection";
import TeamCard from "../components/team/TeamCard";
import { team } from "../data/team";
import usePageTitle from "../hooks/usePageTitle";

export default function About() {
  usePageTitle("Tentang Kami");

  return (
    <>
      <section className="border-b border-line">
        <Container className="py-16 sm:py-24">
          <SectionHeading
            as="h1"
            eyebrow="Tentang Nexora Digital"
            title="Perangkat lunak adalah sarana. Bisnis tetap tujuan utama."
            description="Kami memulai setiap proyek dengan mencari tahu perubahan yang dibutuhkan pelanggan dan staf Anda. Teknologi dipilih berdasarkan jawaban tersebut."
            className="[&_h1]:max-w-4xl [&_h1]:text-4xl sm:[&_h1]:text-5xl lg:[&_h1]:text-7xl"
          />
        </Container>
      </section>

      <section aria-label="Tim" className="border-t border-line bg-surface">
        <Container className="py-20 sm:py-28">
          <SectionHeading eyebrow="Tim kami" title="Kenali orang-orang yang akan bekerja bersama Anda." />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Reveal key={member.id}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
