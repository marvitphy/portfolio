"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/** Smooth scroll premium (Lenis). Embrulha a página inteira no layout.
 *  lerp baixo = scroll com peso/inércia, a sensação de site de agência. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
