import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});


export const metadata = {
  title: "Ren Canbera",
  description: "Find Rent In Canberra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
