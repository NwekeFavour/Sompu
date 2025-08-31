import type { Metadata } from "next";
import "./globals.css";
import Providers from "./provider/providers";  // import your client wrapper

export const metadata: Metadata = {
  title: "Sọmpü | Your All-in-One Creator Portfolio Link",
  description: "One link, endless possibilities. With Sọmpü, creators can showcase work, share social profiles, and connect with fans, all in one place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

