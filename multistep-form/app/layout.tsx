import type { Metadata } from "next";
import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";
import SideImage from "./(components)/SideImage";

const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Multi-Step Form",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <div className="h-screen md:overflow-hidden gap-6 flex flex-col md:flex-row">
          <div className="md:w-2/5">
            <SideImage />
          </div>
          <div className="md:w-3/5">{children}</div>
        </div>
      </body>
    </html>
  );
}
