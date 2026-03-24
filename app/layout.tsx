import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css"; // Global styles

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Sheenam Kalra | Media & Communications Professional",
  description:
    "Portfolio of Sheenam Kalra, a post-graduate journalist and mass communication professional specializing in content creation, graphic design, and AI-assisted workflows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body
        className="font-sans antialiased bg-stone-50 text-stone-900"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
