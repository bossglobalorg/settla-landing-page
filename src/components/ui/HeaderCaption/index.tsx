interface HighlightedTextProps {
  text: string;
  variant: "primary" | "secondary";
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text, variant }) => {
  const textColor =
    variant === "primary" ? "text-primary-900" : "text-accent-400";

  const lineBg = variant === "primary" ? "bg-accent-400" : "bg-primary-600";
  return (
    <span className="relative inline-block">
      <span
        className={`relative z-10 text-lg font-[500] tracking-wide ${textColor}`}
      >
        {text}
      </span>
      <span
        className={`z-1 absolute bottom-0 left-0 h-[3px] w-full ${lineBg}`}
        aria-hidden="true"
      />
    </span>
  );
};

export default HighlightedText;
