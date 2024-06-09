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
        <main className="bg-slate-900 flex flex-col max-w-screen min-h-screen">
          <nav className="flex w-full justify-between items-center px-6 pt-4">
            <Link
              href={"/"}
              className="text-3xl py-2 px-3
             font-bold text-text rounded-md"
            >
              HyperSpace Assessment
            </Link>
            <Link
              href={"/"}
              className="text-lg px-2
             bg-secondary hover:bg-accent font-bold rounded-md h-2/3"
            >
              Home
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
