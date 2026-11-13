export default function TextRise({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden pb-[0.16em] -mb-[0.16em] ${className}`}>
      <span className="load-line block" style={{ animationDelay: `${delay}ms` }}>
        {text}
      </span>
    </span>
  );
}
