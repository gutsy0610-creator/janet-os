import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "JANET OS | Personal Drama Intelligence",
  description: "A premium AI-powered personal entertainment operating system.",
  openGraph: {
    title: "JANET OS | Personal Drama Intelligence",
    description: "A premium AI-powered personal entertainment operating system.",
    url: "https://janetos.com", // Replace with your actual domain when deployed
    siteName: "JANET OS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JANET OS - Personal Drama Intelligence",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JANET OS | Personal Drama Intelligence",
    description: "A premium AI-powered personal entertainment operating system.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Sidebar />
        <main className="flex-1 pt-16 md:pt-0 md:pl-64">
          {children}
        </main>
      </body>
    </html>
  );
}
