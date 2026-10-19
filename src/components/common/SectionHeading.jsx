export default function SectionHeading({ eyebrow, title, description, as: Tag = "h2", className = "" }) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="mb-5 flex items-center gap-3 text-sm font-medium text-accent">
          <span aria-hidden="true" className="h-2 w-2 bg-accent" />
          {eyebrow}
        </p>
      )}
      <Tag className="max-w-3xl text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </Tag>
      {description && <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
    </div>
  );
}
