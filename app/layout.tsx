import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hype App | Popup & Some WebGL",
  description: "A simple popup and a bit of WebGL",
  icons: {
    icon: "/vr.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-slate-900 flex flex-col min-h-screen">
          <nav className="w-full text-center mt-4">
            <Link href={"/"} className="text-3xl font-bold text-text">
              Animatronix
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
