import Image from "next/image";

type Props = {
  className?: string;
  variant?: "full" | "mark";
  inverse?: boolean;
};

/**
 * Advent Maritime logo.
 *
 * Renders the brand mark from /public/brand/.
 * Drop your official files here (PNG or SVG):
 *   - public/brand/logo-mark.png       — the AM icon only
 *   - public/brand/logo-mark-white.png — white version for dark backgrounds
 *   - public/brand/logo-full.png       — full lockup with "Advent MARITIME"
 *   - public/brand/logo-full-white.png — full lockup, white version
 *
 * SVG is preferred (replace .png with .svg in BRAND_FILES below).
 */

const BRAND_FILES = {
  fullDark: "/brand/logo-full.png",
  fullLight: "/brand/logo-full-white.png",
  markDark: "/brand/logo-mark.png",
  markLight: "/brand/logo-mark-white.png",
};

export default function Logo({
  className = "",
  variant = "full",
  inverse = false,
}: Props) {
  const src =
    variant === "mark"
      ? inverse
        ? BRAND_FILES.markLight
        : BRAND_FILES.markDark
      : inverse
      ? BRAND_FILES.fullLight
      : BRAND_FILES.fullDark;

  const width = variant === "mark" ? 64 : 240;
  const height = variant === "mark" ? 56 : 64;

  return (
    <Image
      src={src}
      alt="Advent Maritime"
      width={width}
      height={height}
      priority
      className={className}
      style={{ width: "auto", height: "100%", maxHeight: "100%" }}
    />
  );
}
