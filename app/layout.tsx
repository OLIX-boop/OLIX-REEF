import { Inter } from "next/font/google";
import "./globals.css";
import FontAwesome from "./_components/fontAwesome";
import Nav from "./_components/navbar";
import Footer from "./_components/footer";

      
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
        <Nav qt={10} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
