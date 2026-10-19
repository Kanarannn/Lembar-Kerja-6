export default function TeamCard({ member }) {
  return (
    <article className="flex flex-col">
      <img
        src={member.image}
        alt={`Foto ${member.name}`}
        loading="lazy"
        decoding="async"
        className="aspect-[4/5] w-full rounded-lg border border-line object-cover object-center"
      />
      <h3 className="mt-5 text-xl font-bold tracking-tight">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-accent">{member.role}</p>
    </article>
  );
}
