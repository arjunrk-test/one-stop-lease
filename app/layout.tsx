import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "One Stop Lease",
  description: "Why Buy? OneStopLease It.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </AuthProvider>
  );
}
