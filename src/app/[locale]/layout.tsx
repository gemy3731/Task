"use client"
import "./globals.css";
import { appWithTranslation } from 'next-i18next';




function RootLayout({ children }:{children:any}) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}

export default appWithTranslation<any>(RootLayout);