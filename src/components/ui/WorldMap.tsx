"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoMercator, geoEqualEarth, type GeoProjection } from "d3-geo";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { offices, type Office } from "@/lib/data";

const GEO_URL = "/data/world-110m.json";

// Geographic config ----------------------------------------------------------

const SVG_WIDTH = 1000;

type FocusKey = "world" | "asia";

function makeProjection(focus: FocusKey, height: number): GeoProjection {
  if (focus === "asia") {
    return geoMercator()
      .center([70, 22])
      .scale(230)
      .translate([SVG_WIDTH / 2, height / 2]);
  }
  return geoEqualEarth()
    .rotate([-15, 0, 0])
    .scale(195)
    .translate([SVG_WIDTH / 2, height / 2]);
}

function projectionPropsFor(focus: FocusKey) {
  if (focus === "asia") {
    return {
      projection: "geoMercator" as const,
      projectionConfig: { center: [70, 22] as [number, number], scale: 230 },
    };
  }
  return {
    projection: "geoEqualEarth" as const,
    projectionConfig: {
      scale: 195,
      rotate: [-15, 0, 0] as [number, number, number],
    },
  };
}

function curvePath(
  ax: number,
  ay: number,
  bx: number,
  by: number,
  curvature = 0.32
) {
  const mx = (ax + bx) / 2;
  const dist = Math.hypot(ax - bx, ay - by);
  const my = (ay + by) / 2 - dist * curvature;
  return `M ${ax} ${ay} Q ${mx} ${my} ${bx} ${by}`;
}

// Component ------------------------------------------------------------------

type Props = {
  focus?: FocusKey;
  showArcs?: boolean;
  height?: number;
};

export default function WorldMap({
  focus = "world",
  showArcs = true,
  height = 520,
}: Props) {
  const projection = useMemo(() => makeProjection(focus, height), [focus, height]);
  const cfg = useMemo(() => projectionPropsFor(focus), [focus]);
  const head = offices.find((o) => o.type === "head")!;
  const headProj = projection([head.lng, head.lat]);

  return (
    <div className="relative w-full" style={{ height }}>
      <ComposableMap
        projection={cfg.projection}
        projectionConfig={cfg.projectionConfig}
        width={SVG_WIDTH}
        height={height}
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <pattern
            id="dotPattern"
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3" cy="3" r="1" fill="rgba(255,255,255,0.32)" />
          </pattern>
          <linearGradient id="arcGradient" x1="0" x2="1">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#1FB6B6" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="markerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Countries */}
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="url(#dotPattern)"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "rgba(31,182,182,0.18)" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Connection arcs from Kolkata to all other offices */}
        {showArcs && headProj && (
          <g>
            {offices
              .filter((o) => o.type !== "head")
              .map((o, i) => {
                const proj = projection([o.lng, o.lat]);
                if (!proj) return null;
                const [bx, by] = proj;
                const [ax, ay] = headProj;
                const d = curvePath(ax, ay, bx, by);
                return (
                  <g key={`arc-${o.city}`}>
                    <path
                      d={d}
                      stroke="rgba(34,211,238,0.18)"
                      strokeWidth="0.8"
                      fill="none"
                      strokeDasharray="2 4"
                    />
                    <motion.path
                      d={d}
                      stroke="url(#arcGradient)"
                      strokeWidth="1.6"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        duration: 1.6,
                        delay: 0.3 + i * 0.12,
                        ease: "easeInOut",
                      }}
                    />
                  </g>
                );
              })}
          </g>
        )}

        {/* Office markers */}
        {offices.map((o, i) => (
          <PinMarker key={o.city} office={o} index={i} />
        ))}
      </ComposableMap>
    </div>
  );
}

function PinMarker({ office, index }: { office: Office; index: number }) {
  const isHead = office.type === "head";
  const dx = office.labelDx ?? 12;
  const dy = office.labelDy ?? 4;
  const anchor = office.labelAnchor ?? "start";

  return (
    <Marker coordinates={[office.lng, office.lat]}>
      <circle r={isHead ? 14 : 10} fill="url(#markerGlow)" />

      {isHead && (
        <motion.circle
          r={6}
          fill="none"
          stroke="#22D3EE"
          strokeWidth="1.5"
          animate={{ r: [6, 22], opacity: [0.85, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        />
      )}

      <motion.g
        initial={{ scale: 0, y: -6 }}
        whileInView={{ scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.55,
          delay: 0.2 + index * 0.07,
          ease: "backOut",
        }}
      >
        {isHead ? (
          <g>
            <path
              d="M 0 -11 C 6 -11 9 -5 9 -2 C 9 4 0 11 0 11 C 0 11 -9 4 -9 -2 C -9 -5 -6 -11 0 -11 Z"
              fill="#22D3EE"
              stroke="#0B1320"
              strokeWidth="1.5"
            />
            <circle r="2.8" cy="-2.5" fill="#0B1320" />
          </g>
        ) : (
          <g>
            <circle r={4.5} fill="#1FB6B6" stroke="#0B1320" strokeWidth="1" />
            <circle r={1.8} fill="#0B1320" />
          </g>
        )}
      </motion.g>

      <motion.text
        x={dx}
        y={dy}
        textAnchor={anchor}
        fill="#FFFFFF"
        fontSize={isHead ? 13 : 11}
        fontWeight={isHead ? 700 : 500}
        fontFamily="'Bricolage Grotesque', Inter, system-ui, sans-serif"
        paintOrder="stroke"
        stroke="#0B1320"
        strokeWidth="3"
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 + index * 0.07 }}
      >
        {office.city}
      </motion.text>
    </Marker>
  );
}
