import "./globals.css";
import { Open_Sans } from "next/font/google";
import { Providers } from "./provider";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "NoodleNest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
