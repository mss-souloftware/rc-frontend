import { Inter, Poppins } from "next/font/google"; 
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});
// Import Poppins
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // you can choose weights you need
  display: "swap"
});


export const metadata = {
  title: "Ren Canbera",
  description: "Find Rent In Canberra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
