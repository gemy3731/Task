"use client"
import "./globals.css";
import { appWithTranslation } from 'next-i18next';
import NavBar from './../_components/Navbar/NavBar';




function RootLayout({ children }:{children:any}) {
  return (
    <html lang="en">
      <body>
        {/* <NavBar/> */}
        
        {children}
        </body>
    </html>
  );
}

export default appWithTranslation<any>(RootLayout);