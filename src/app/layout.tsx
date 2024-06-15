import { cn } from "@utils/cn";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Pokédex",
  description: "A pokédex for all your pokémon needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, "min-h-dvh text-neutral-100")}>
        {children}
      </body>
    </html>
  );
}
