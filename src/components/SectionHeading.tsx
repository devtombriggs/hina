type SectionHeadingProps = {
  overline: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  titleHighlight?: string;
};

export default function SectionHeading({
  overline,
  title,
  intro,
  align = "center",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClasses} gap-4 max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
      <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.15em] text-brand-teal">
        {overline}
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
        {title}
      </h2>
      {intro ? (
        <p className="text-text-secondary text-base md:text-lg leading-relaxed">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
