import type { Metadata } from "next";
import { Inter, Kumbh_Sans } from "next/font/google";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import Scripts from "@/widgets/scripts/Scripts";
import "./styles/main";

const inter = Inter({
  variable: "--font-family-base",
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

const kumbh_sans = Kumbh_Sans({
  variable: "--font-family-accent",
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: {
    template: "Future Tech | %s",
    default: "Future Tech | Home",
  },
  description:
    "FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${kumbh_sans.variable}`}>
        <Header />
        {children}
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
