import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech Store",
  description: "This is an electronic store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
        <Navbar />
        <div className="container mx-auto min-h-[85vh]">
          {children}
        </div>
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}