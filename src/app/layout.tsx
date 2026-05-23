import { ReactNode } from "react";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Futbol Akademisi - Geleceğin Yıldızlarını Şimdiden Keşfet",
  description:
    "Profesyonel futbol eğitimi, deneyimli antrenörler ve modern altyapı ile çocuklarınızın hayallerini gerçeğe dönüştürüyoruz.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-white text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
