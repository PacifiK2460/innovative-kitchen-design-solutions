import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/components/lib/utils"
import { NextUIProvider } from "@nextui-org/react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata: Metadata = {
  title: "IKS",
  description: "Demo site for Kitchen Design Solutions by Santiago Lara",
};

import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        <NextUIProvider>
          <Navbar />
          {children}
        </NextUIProvider>
      </body>
    </html>

  );
}
