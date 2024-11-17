"use client";

import Header from "@/components/Header";
import Stars from "@/components/Stars";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

import "../globals.css";
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

import ToasterContext from "../context/ToastContext";
import Providers from "@/components/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Providers>
            <Stars />
            <Header />
            <ToasterContext />
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
