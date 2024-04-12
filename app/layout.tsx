
import { Inter } from "next/font/google";
import "./globals.css";
import FontAwesome from "./_components/font/fontAwesome";
import Nav from "./_components/nav/navbar";
import Footer from "./_components/footer/footer";
import { Toaster } from 'react-hot-toast'

      
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.png" />
        <title>Todo App</title>
        <FontAwesome />
      </head>
      <body className={inter.className}>
        <Toaster />
        <Nav ip={process.env.NEXT_DB_ID || ''} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
