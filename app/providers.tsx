// app/providers.tsx
"use client";

import { MenuProvider } from "@/context/MenuContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <MenuProvider>{children}</MenuProvider>;
}
