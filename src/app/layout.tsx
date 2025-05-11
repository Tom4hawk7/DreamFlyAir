import { Navbar } from "@/components/ui";

import "@/styles/globals.css";
import "@/styles/elements.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
