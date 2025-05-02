import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/form.css";

import Navbar from "@/components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
