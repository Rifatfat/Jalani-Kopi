import type { Metadata, Viewport } from "next";

import { SmoothScrollProvider } from "@/components/animations/smooth-scroll-provider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jalani-kopi.vercel.app"),
  title: "JALANI KOPI",
  description: "Menu kopi dan non-kopi Jalani Kopi. Lihat pilihan minuman dan pesan langsung melalui WhatsApp.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JALANI KOPI",
    description: "Menu kopi dan non-kopi Jalani Kopi. Lihat pilihan minuman dan pesan langsung melalui WhatsApp.",
    url: "/",
    siteName: "JALANI KOPI",
    locale: "id_ID",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#090806",
  width: "device-width",
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="id" className="dark">
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
