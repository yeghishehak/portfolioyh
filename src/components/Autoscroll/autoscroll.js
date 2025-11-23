'use client';

import { useEffect } from "react";

export default function Autoscroll({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // runs ONLY on first load or reload

  return children;
}
