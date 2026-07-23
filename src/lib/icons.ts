import {
  Activity,
  Flame,
  Gauge,
  Palette,
  RotateCw,
  Scale,
  Wind,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Gauge,
  RotateCw,
  Palette,
  Wind,
  Scale,
  Activity,
  Flame,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Gauge;
}
