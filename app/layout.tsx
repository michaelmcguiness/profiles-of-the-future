import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Profiles of the Future — by a16z",
  description: "An inquiry into the companies building the future.",
  metadataBase: new URL("https://www.profilesofthefuture.com"),
  openGraph: {
    siteName: "Profiles of the Future",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-logo.png",
        alt: "Profiles of the Future — by a16z",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
