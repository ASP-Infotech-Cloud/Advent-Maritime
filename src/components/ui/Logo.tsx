type Props = {
  className?: string;
  variant?: "full" | "mark";
  inverse?: boolean;
};

/**
 * Recreated Advent Maritime logo from the visiting card:
 *  - Teal stylized "AM" mark sitting on three horizontal waves
 *  - Vertical separator
 *  - "Advent" wordmark in navy + small "MARITIME" in teal beneath
 */
export default function Logo({
  className = "",
  variant = "full",
  inverse = false,
}: Props) {
  const navy = inverse ? "#FFFFFF" : "#1E3A5F";
  const teal = "#1FB6B6";

  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 64 56"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Advent Maritime mark"
      >
        {/* AM letterform */}
        <path
          d="M8 38 L20 8 L26 8 L34 26 L42 8 L48 8 L56 38 L50 38 L45 25 L38 41 L30 25 L25 38 Z"
          fill={teal}
        />
        {/* Three waves */}
        <path
          d="M2 44 C 12 38, 22 50, 32 44 S 52 38, 62 44"
          stroke={teal}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M2 50 C 12 44, 22 56, 32 50 S 52 44, 62 50"
          stroke={teal}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.65"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 280 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Advent Maritime"
    >
      {/* Mark */}
      <g transform="translate(0, 4)">
        <path
          d="M6 40 L18 10 L24 10 L32 28 L40 10 L46 10 L54 40 L48 40 L43 27 L36 43 L28 27 L23 40 Z"
          fill={teal}
        />
        <path
          d="M0 46 C 10 40, 20 52, 30 46 S 50 40, 60 46"
          stroke={teal}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M0 52 C 10 46, 20 58, 30 52 S 50 46, 60 52"
          stroke={teal}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.65"
        />
      </g>

      {/* Vertical divider */}
      <rect x="74" y="10" width="2.5" height="44" rx="1.25" fill={navy} />

      {/* Wordmark */}
      <text
        x="86"
        y="36"
        fontFamily="'Bricolage Grotesque', 'Inter', system-ui, sans-serif"
        fontSize="30"
        fontWeight="700"
        fill={navy}
        letterSpacing="-0.5"
      >
        Advent
      </text>
      <text
        x="87"
        y="54"
        fontFamily="'Bricolage Grotesque', 'Inter', system-ui, sans-serif"
        fontSize="13"
        fontWeight="600"
        fill={teal}
        letterSpacing="6"
      >
        MARITIME
      </text>
    </svg>
  );
}
