import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Primary sans — Inter (closest Google Fonts equivalent to General Sans).
// If you want General Sans itself, swap in next/font/local with the
// Fontshare woff2 files in /public/fonts.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Also exported under the general-sans var so the CSS cascade stays identical.
const generalSans = Inter({
  subsets: ["latin"],
  variable: "--font-general-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "dev.wavesco.in — The build studio behind every WavesCo OS",
  description:
    "Where WavesCo installs operating systems for founder-led companies. Engagements, install method, and live deployments.",
  metadataBase: new URL("https://dev.wavesco.in"),
  openGraph: {
    title: "dev.wavesco.in — WavesCo build studio",
    description:
      "Engagements, install method, and live deployments. Where WavesCo builds the operating system your team runs on.",
    url: "https://dev.wavesco.in",
    siteName: "WavesCo",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicons/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicons/favicon-16x16.png', type: 'image/png', sizes: '16x16' }
    ],
    apple: '/favicons/apple-touch-icon.png',
    other: [
      { rel: 'manifest', url: '/favicons/site.webmanifest' }
    ]
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexMono.variable} ${generalSans.variable}`}
    >
      <body className="bg-paper text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
