import { Inter } from "next/font/google";
import "./globals.css";
import SearchBox from "@/components/SearchBox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Database",
  description: "NextJS and Tailwind CSS App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width"></meta>

      </head>
      <body className={inter.className}>
        <Header/>
        <SearchBox/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
