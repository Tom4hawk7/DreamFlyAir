import localFont from "next/font/local";
import { Navbar } from "@/components/ui";
// import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/form.css";

// const inter = localFont({
//   src: "../fonts/Inter-VariableFont_opsz\,wght.tff",
//   display: "swap",
// });

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="en">
      {/* <html lang="en" className={inter.className}> */}
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
