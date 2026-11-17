import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ScrollProgress, BackToTop } from "@/components/motion";
import { profile } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07080b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mostafafarghaly.dev"),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.intro,
  keywords: [
    "Mostafa Farghaly",
    "Full Stack Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "Web Performance",
    "Egypt Software Engineer",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.intro,
    type: "website",
    locale: "en_US",
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.intro,
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: "https://mostafafarghaly.dev",
  email: profile.email,
  sameAs: [profile.github, profile.linkedin, profile.whatsapp],
  knowsAbout: [
    "Web Development",
    "Full Stack Engineering",
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "REST APIs",
    "MongoDB",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Faculty of Computers & Informatics, Suez Canal University",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#07080b] text-[#f3f4f6] min-h-screen selection:bg-violet-600 selection:text-white">
        <ScrollProgress />
        <div className="ambient-glow" aria-hidden="true" />
        <div className="site-grid" aria-hidden="true" />
        <Navbar />
        <div className="relative z-10">{children}</div>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
