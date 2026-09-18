import type { Metadata } from "next";

import "../../public/assets/css/bootstrap.css";
import "../../public/assets/css/rtl.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/responsive.css";
import "../../public/assets/css/scroll-reveal.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import CardRevealObserver from "../../components/common/CardRevealObserver";

export const metadata: Metadata = {
  title: "Meenakshi Hospital Fertility Center | MHFC",
  description: "Premier Fertility & IVF Hospital providing advanced reproductive technology, state-of-the-art cleanroom labs, and compassionate care.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Roboto Serif', serif" }}>
        <CardRevealObserver />
        {children}
      </body>
    </html>
  );
}
