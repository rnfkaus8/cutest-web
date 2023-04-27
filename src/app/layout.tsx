import "./globals.css";
import { Nunito } from "next/font/google";

import React from "react";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb",
};

const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
