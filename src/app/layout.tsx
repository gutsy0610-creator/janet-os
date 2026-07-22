import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "JANET OS | Personal Drama Intelligence",
  description: "A premium AI-powered personal entertainment operating system.",
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
