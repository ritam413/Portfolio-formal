import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ritam-portfolio.vercel.app"),
  title: "Ritam – Full-Stack Engineer (AI/ML Web)",
  description: "Ritam's One-Page Portfolio & Resume. Full-Stack Engineer (AI/ML Web) | PyTorch, Next.js, Fabric.js, Redis & FastAPI",
  keywords: [
    "Ritam",
    "Full-Stack Engineer",
    "AI",
    "Machine Learning",
    "Next.js",
    "Resume",
    "Portfolio",
    "Techno India University",
  ],
  authors: [{ name: "Ritam" }],
  openGraph: {
    title: "Ritam – Full-Stack Engineer (AI/ML Web)",
    description: "Ritam's One-Page Portfolio & Resume. Full-Stack Engineer (AI/ML Web)",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FAFAFA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-[100dvh] bg-[#FAFAFA] text-gray-900 antialiased selection:bg-gray-200">
        {children}
      </body>
    </html>
  );
}
