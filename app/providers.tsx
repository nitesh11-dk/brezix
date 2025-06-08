"use client";

import { MenuProvider } from "@/context/MenuContext";
import { FormProvider } from "@/context/FormContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MenuProvider>
      <FormProvider>
        {children}
      </FormProvider>
    </MenuProvider>
  );
} 