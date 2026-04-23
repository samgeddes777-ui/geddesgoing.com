import { AnimateIn } from "./animate-in";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-12 lg:mb-16`}>
      {label && (
        <AnimateIn>
          <span className="inline-block text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">
            {label}
          </span>
        </AnimateIn>
      )}
      <AnimateIn delay={0.1}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text)] leading-tight">
          {title}
        </h2>
      </AnimateIn>
      {description && (
        <AnimateIn delay={0.2}>
          <p className="mt-4 text-lg text-[var(--color-text-muted)] leading-relaxed">
            {description}
          </p>
        </AnimateIn>
      )}
    </div>
  );
}
