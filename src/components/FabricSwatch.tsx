interface FabricSwatchProps {
  color: string;
  label: string;
  size?: "sm" | "md";
}

export default function FabricSwatch({ color, label, size = "md" }: FabricSwatchProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={
          size === "sm"
            ? "h-4 w-4 flex-shrink-0 rounded-sm border border-black/30 shadow-inner"
            : "h-6 w-6 flex-shrink-0 rounded-sm border border-black/30 shadow-inner"
        }
        style={{
          backgroundColor: color,
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.18) 0, rgba(255,255,255,0.18) 1px, transparent 1px, transparent 3px), repeating-linear-gradient(-45deg, rgba(0,0,0,0.18) 0, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)",
        }}
        aria-hidden
      />
      <span className="text-xs text-slate-400">{label}</span>
    </div>
  );
}
