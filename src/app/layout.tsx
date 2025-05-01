import { Inter } from "next/font/google";
// import { IBM_Plex_Sans } from "next/font/google";

import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";

// const IBM = IBM_Plex_Sans({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
// });

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
