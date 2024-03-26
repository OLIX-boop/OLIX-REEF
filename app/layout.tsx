import { Inter } from "next/font/google";
import "./globals.css";
import FontAwesome from "./_components/fontAwesome";
      
const inter = Inter({ subsets: ["latin"] });
import Nav from "./_components/navbar";
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
        <div className="bg">OLIX REEF</div>
        <Nav qt={5} />
        {children}
      </body>
    </html>
  );
}
