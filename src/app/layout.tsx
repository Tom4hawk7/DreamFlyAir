import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";

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
