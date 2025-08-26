import type { Metadata } from "next";
import "./globals.css";
import AOSWrapper from "@/components/AosWrapper";
import { Header } from "@/components/header";


export const metadata: Metadata = {
  title: "Sọmpụ | Your All-in-One Creator Portfolio Link",
  description: "One link, endless possibilities. With Sọmpụ, creators can showcase work, share social profiles, and connect with fans, all in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <AOSWrapper>
          <Header />
          {children}
        </AOSWrapper>
      </body>
    </html>
  );
}
