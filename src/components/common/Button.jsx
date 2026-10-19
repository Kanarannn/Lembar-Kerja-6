import { Link } from "react-router-dom";

const base =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md py-3 text-[0.95rem] font-semibold transition-colors duration-200 focus-visible:outline-accent";

const variants = {
  primary: "bg-accent px-5 text-ink hover:bg-fg",
  secondary: "border border-line px-5 text-fg hover:border-accent hover:text-accent",
  ghost: "text-fg hover:text-accent",
};

export default function Button({ to, href, variant = "primary", className = "", children, ...rest }) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
