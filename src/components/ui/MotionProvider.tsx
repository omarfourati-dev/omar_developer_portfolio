"use client";

import { MotionConfig } from "framer-motion";

/**
 * Globally respects the user's "reduce motion" OS setting.
 * With reducedMotion="user", Framer disables transform/position
 * animations while keeping subtle opacity fades.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
