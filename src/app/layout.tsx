import { PokedexProvider } from "@/contexts/PokedexProvider";
import { cn } from "@utils/cn";
import type { Metadata } from "next";
import { Inter, VT323 } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const VT323Font = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

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
      <body
        className={cn(
          inter.variable,
          VT323Font.variable,
          "min-h-dvh text-neutral-100",
        )}
      >
        <PokedexProvider>{children}</PokedexProvider>
      </body>
    </html>
  );
}
