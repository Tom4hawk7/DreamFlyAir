import { Navbar } from "@/components/ui";

import "@/styles/globals.css";
import "@/styles/elements.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/logo.ico" sizes="any" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
