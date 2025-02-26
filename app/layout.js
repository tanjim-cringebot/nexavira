import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Quantanyx",
  description: "Building the future of technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetBrainsMono.className} antialiased bg-[#0F111A]`}>
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
