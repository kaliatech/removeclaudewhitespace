import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Font files come from the @fontsource-variable packages and are bundled at
// build time, so neither the build nor the browser contacts Google Fonts.
const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = localFont({
  src: "../node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2",
  weight: "100 800",
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Remove Claude Whitespace — Clean Claude Code Output Instantly",
    template: "%s | Remove Claude Whitespace",
  },
  description:
    "Free tool to remove whitespace, line numbers, ANSI codes, and box-drawing characters from Claude Code, terminal, and AI assistant output. Paste fragmented text, get clean copyable code in one click.",
  openGraph: {
    type: "website",
    title: "Remove Claude Whitespace — Clean Claude Code Output Instantly",
    description:
      "Paste messy Claude Code output. Get clean, copyable text. Removes line numbers, ANSI codes, box-drawing chars, indentation noise — all client-side, free, instant.",
    siteName: "Remove Claude Whitespace",
  },
  robots: {
    index: false,
    follow: false,
  },
  // Outbound links don't reveal this host (e.g. an internal hostname) to the destination.
  referrer: "no-referrer",
  category: "developer tools",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f8" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
