import Container from "../components/common/Container";
import Button from "../components/common/Button";
import usePageTitle from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Halaman tidak ditemukan");

  return (
    <Container className="py-24 sm:py-32">
      <p className="font-display text-8xl font-bold leading-none text-accent sm:text-9xl">404</p>
      <h1 className="mt-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
        Halaman ini tidak tersedia.
      </h1>
      <p className="mt-4 max-w-md text-lg text-muted">
        Alamat mungkin salah ketik atau halaman telah dipindahkan. Kembali ke beranda untuk melanjutkan.
      </p>
      <div className="mt-8">
        <Button to="/">Kembali ke Beranda</Button>
      </div>
    </Container>
  );
}
