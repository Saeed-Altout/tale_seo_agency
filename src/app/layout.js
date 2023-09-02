"use client";
import "./globals.css";
import { Navbar } from "@/components";
import { ContextProvider } from "@/contexts/ContextProvider";
export const metadata = {
  title: "Tale",
  description: "Tale SEO Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className="overflow-x-hidden">
          <Navbar />
          {children}
        </body>
      </ContextProvider>
    </html>
  );
}
