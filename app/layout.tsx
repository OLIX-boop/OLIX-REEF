'use client';
import { Inter } from "next/font/google";
import "./tailwind.css";
import "./globals.css";
import FontAwesome from "./_components/font/fontAwesome";
import Nav from "./_components/nav/navbar";
import Footer from "./_components/footer/footer";
import { Toaster } from 'react-hot-toast'
import Cart from "./_components/cart/cartComponent";
import { useState } from "react";

//font awesome
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
      
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [cartActive, setCartActive] = useState(false);

  const closeCart = () => setCartActive(false);

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.png" />
        <title>Todo App</title>
        <FontAwesome />
      </head>
      <body cz-shortcut-listen="false" className={`${inter.className} ${cartActive && 'overflow-hidden'}`}>
        <Toaster />
        {cartActive && <Cart disableCart={closeCart}/>}
        <Nav setCart={setCartActive} ip={process.env.NEXT_DB_ID || ''} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
