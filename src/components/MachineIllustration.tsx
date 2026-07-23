interface MachineIllustrationProps {
  slug: string;
  className?: string;
}

/**
 * Sleek, minimal line-art illustrations representing each machine category.
 * Drawn as original vector art (not photographs) to keep the storefront
 * lightweight and visually consistent with the dark, amber-accented theme.
 */
export default function MachineIllustration({ slug, className }: MachineIllustrationProps) {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      className={className}
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="319" height="199" rx="15.5" className="fill-slate-950" />
      <rect
        x="0.5"
        y="0.5"
        width="319"
        height="199"
        rx="15.5"
        stroke="currentColor"
        className="text-slate-800"
      />
      {/* subtle weave grid */}
      <g className="text-slate-800/70" stroke="currentColor" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={20 + i * 35} y1="0" x2={20 + i * 35} y2="200" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={20 + i * 32} x2="320" y2={20 + i * 32} />
        ))}
      </g>
      <g strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {renderMachine(slug)}
      </g>
    </svg>
  );
}

function renderMachine(slug: string) {
  switch (slug) {
    case "tensile-compression":
      return (
        <>
          {/* frame */}
          <path
            d="M90 30 L90 170 M230 30 L230 170 M90 30 L230 30"
            stroke="currentColor"
            className="text-slate-600"
          />
          {/* crosshead */}
          <rect x="80" y="72" width="160" height="14" rx="3" className="text-slate-500" stroke="currentColor" fill="none" />
          {/* grips */}
          <rect x="150" y="86" width="20" height="18" className="text-amber-400" stroke="currentColor" fill="none" />
          <rect x="150" y="140" width="20" height="18" className="text-amber-400" stroke="currentColor" fill="none" />
          {/* fabric specimen under tension */}
          <path d="M160 104 L160 140" stroke="currentColor" className="text-amber-400" strokeWidth="4" />
          {/* base */}
          <path d="M70 170 L250 170" stroke="currentColor" className="text-slate-600" strokeWidth="4" />
          {/* arrows showing pull */}
          <path d="M160 90 L160 78" stroke="currentColor" className="text-slate-400" />
          <path d="M155 82 L160 76 L165 82" stroke="currentColor" className="text-slate-400" />
        </>
      );
    case "abrasion-pilling":
      return (
        <>
          {/* housing */}
          <rect x="90" y="50" width="140" height="100" rx="10" stroke="currentColor" className="text-slate-600" fill="none" />
          {/* rotating discs */}
          <circle cx="135" cy="100" r="26" stroke="currentColor" className="text-amber-400" fill="none" />
          <circle cx="135" cy="100" r="3" className="text-amber-400" fill="currentColor" stroke="none" />
          <circle cx="195" cy="100" r="26" stroke="currentColor" className="text-slate-400" fill="none" />
          <circle cx="195" cy="100" r="3" className="text-slate-400" fill="currentColor" stroke="none" />
          {/* rotation arrows */}
          <path d="M135 74 A26 26 0 0 1 161 100" stroke="currentColor" className="text-amber-400/70" strokeDasharray="4 4" />
          <path d="M195 74 A26 26 0 0 1 221 100" stroke="currentColor" className="text-slate-400/70" strokeDasharray="4 4" />
          {/* base */}
          <path d="M80 160 L240 160" stroke="currentColor" className="text-slate-600" strokeWidth="4" />
        </>
      );
    case "colour-fastness":
      return (
        <>
          {/* base plate holding fabric */}
          <rect x="70" y="120" width="180" height="20" rx="3" stroke="currentColor" className="text-slate-600" fill="none" />
          {/* fabric swatch */}
          <rect x="90" y="100" width="140" height="20" className="text-slate-500" stroke="currentColor" fill="none" strokeDasharray="3 3" />
          {/* crockmeter arm */}
          <path d="M100 70 L220 70" stroke="currentColor" className="text-slate-500" />
          <rect x="140" y="70" width="40" height="14" rx="2" className="text-amber-400" stroke="currentColor" fill="none" />
          <path d="M160 84 L160 100" stroke="currentColor" className="text-amber-400" />
          {/* motion arrows */}
          <path d="M110 60 L100 70 L110 80" stroke="currentColor" className="text-slate-400" />
          <path d="M210 60 L220 70 L210 80" stroke="currentColor" className="text-slate-400" />
        </>
      );
    case "air-permeability":
      return (
        <>
          {/* fabric membrane */}
          <path d="M160 40 L160 160" stroke="currentColor" className="text-slate-500" strokeWidth="4" strokeDasharray="2 6" />
          {/* nozzle housing */}
          <rect x="120" y="60" width="40" height="80" rx="6" stroke="currentColor" className="text-slate-600" fill="none" />
          {/* airflow arrows through fabric */}
          <path d="M80 80 L150 80" stroke="currentColor" className="text-amber-400" />
          <path d="M142 74 L150 80 L142 86" stroke="currentColor" className="text-amber-400" />
          <path d="M80 100 L150 100" stroke="currentColor" className="text-amber-400" />
          <path d="M142 94 L150 100 L142 106" stroke="currentColor" className="text-amber-400" />
          <path d="M80 120 L150 120" stroke="currentColor" className="text-amber-400" />
          <path d="M142 114 L150 120 L142 126" stroke="currentColor" className="text-amber-400" />
          {/* readout */}
          <rect x="180" y="80" width="50" height="40" rx="6" stroke="currentColor" className="text-slate-500" fill="none" />
          <path d="M190 100 L200 92 L210 104 L220 96" stroke="currentColor" className="text-slate-400" />
        </>
      );
    case "gsm-weight":
      return (
        <>
          {/* circular cutter */}
          <circle cx="120" cy="80" r="30" stroke="currentColor" className="text-slate-500" fill="none" />
          <circle cx="120" cy="80" r="18" stroke="currentColor" className="text-amber-400" strokeDasharray="3 4" fill="none" />
          {/* balance base */}
          <path d="M90 150 L230 150" stroke="currentColor" className="text-slate-600" strokeWidth="4" />
          <path d="M160 150 L160 120" stroke="currentColor" className="text-slate-500" />
          <rect x="130" y="100" width="60" height="20" rx="3" stroke="currentColor" className="text-slate-500" fill="none" />
          {/* weight pan */}
          <path d="M195 110 L215 130 L175 130 Z" stroke="currentColor" className="text-amber-400" fill="none" />
        </>
      );
    case "bursting-strength":
      return (
        <>
          {/* clamp ring */}
          <circle cx="160" cy="100" r="45" stroke="currentColor" className="text-slate-600" fill="none" />
          {/* diaphragm bulge */}
          <path
            d="M125 100 C 140 75, 180 75, 195 100 C 180 125, 140 125, 125 100 Z"
            stroke="currentColor"
            className="text-amber-400"
            fill="none"
          />
          {/* pressure arrows */}
          <path d="M160 165 L160 150" stroke="currentColor" className="text-slate-400" />
          <path d="M154 156 L160 148 L166 156" stroke="currentColor" className="text-slate-400" />
          <path d="M90 100 L108 100" stroke="currentColor" className="text-slate-500" />
          <path d="M212 100 L230 100" stroke="currentColor" className="text-slate-500" />
        </>
      );
    case "flammability":
      return (
        <>
          {/* vertical chamber */}
          <rect x="110" y="40" width="100" height="120" rx="6" stroke="currentColor" className="text-slate-600" fill="none" />
          {/* fabric specimen hanging */}
          <path d="M160 55 L160 110" stroke="currentColor" className="text-slate-400" strokeDasharray="2 5" />
          {/* flame */}
          <path
            d="M160 155 C150 145, 150 135, 160 122 C170 135, 172 148, 160 155 Z"
            className="text-amber-400"
            fill="currentColor"
            stroke="none"
          />
          <path
            d="M160 148 C155 142, 156 136, 160 130 C165 136, 165 143, 160 148 Z"
            className="text-slate-950"
            fill="currentColor"
            stroke="none"
          />
        </>
      );
    default:
      return null;
  }
}
