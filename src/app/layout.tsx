import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My 8-Week Desk Rehab Plan",
  description:
    "Personal rehabilitation tracker for lumbar disc bulge and cervical lordosis recovery",
  keywords:
    "rehabilitation, desk exercises, back pain, neck pain, personal tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50 font-sans antialiased">
          <div className="flex">
            <Navigation />
            <main className="flex-1 ml-64 p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
