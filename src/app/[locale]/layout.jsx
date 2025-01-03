"use client";
import "./globals.css";
import { appWithTranslation } from "next-i18next";

function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  );
}

export default appWithTranslation(RootLayout);