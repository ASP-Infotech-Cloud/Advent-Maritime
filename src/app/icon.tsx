import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0B1320",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg viewBox="0 0 64 56" width="48" height="42">
          <path
            d="M8 38 L20 8 L26 8 L34 26 L42 8 L48 8 L56 38 L50 38 L45 25 L38 41 L30 25 L25 38 Z"
            fill="#1FB6B6"
          />
          <path
            d="M2 44 C 12 38, 22 50, 32 44 S 52 38, 62 44"
            stroke="#1FB6B6"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M2 50 C 12 44, 22 56, 32 50 S 52 44, 62 50"
            stroke="#1FB6B6"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
            opacity="0.65"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
