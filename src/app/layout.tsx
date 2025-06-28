import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const courier = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier-prime",
});

export const metadata: Metadata = {
  title: "Cercil",
  description: "Circle of Trust MVP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${courier.variable} bg-black text-white font-mono`}>
        <header className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <img src="/cercil-logo.png" alt="Cercil Logo" className="w-6 h-6" />
            <span className="text-xl font-bold">Cercil — Circle of Trust</span>
          </div>
          <nav className="flex space-x-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/member-portal">Member Portal</Link>
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
