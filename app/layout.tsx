// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Brezix",
  description: "Created by Brezix",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <Providers>{children}</Providers>

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#333",
              color: "#fff",
              padding: "16px",
              borderRadius: "8px",
            },
          }}
        />

        {/* 👇 Chatling Chatbot Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.chtlConfig = { chatbotId: "2237726342" };
            `,
          }}
        />
        <script
          async
          data-id="2237726342"
          id="chtl-script"
          type="text/javascript"
          src="https://chatling.ai/js/embed.js"
        ></script>
      </body>
    </html>
  );
}
