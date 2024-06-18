'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import FontAwesome from "./_components/font/fontAwesome";
import Nav from "./_components/nav/navbar";
import Footer from "./_components/footer/footer";
import { Toaster } from 'react-hot-toast'
import Cart from "./_components/cart/cartComponent";
import { useState } from "react";
      
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [cartActive, setCartActive] = useState(false);

  const closeCart = () => 
    setTimeout(()=> setCartActive(false), 150);

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.png" />
        <title>Todo App</title>
        <FontAwesome />
      </head>
      <body className={`${inter.className} ${cartActive && 'overflow-hidden'}`}>
        <Toaster />
        {cartActive && <Cart disableCart={closeCart}/>}
        <Nav setCart={setCartActive} ip={process.env.NEXT_DB_ID || ''} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
