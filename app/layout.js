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
  description: "Code forged in chaos. Building the future of technology",
  icons: {
    icon: [
      {
        url: "/QT.png",
        href: "/QT.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Quantanyx</title>
        <meta
          name="description"
          content="Code forged in chaos. Building the future of technology"
        />
        <link rel="icon" href="/QT.png" />
        <link rel="apple-touch-icon" href="/QT.png" />
      </head>
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
