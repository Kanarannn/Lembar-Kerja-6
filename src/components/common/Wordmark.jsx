export default function Wordmark({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-tight ${className}`}>
      <span aria-hidden="true" className="relative h-5 w-5 bg-accent">
        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-ink" />
      </span>
      <span>
        Nexora<span className="ml-1 font-medium text-muted">Digital</span>
      </span>
    </span>
  );
}
