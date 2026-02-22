import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";
import FooterNav from "@/components/FooterNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Compass Assembly",
  description:
    "The Compass Assembly, is a warm and exciting Christian community, where everyone is valued and cherished. It's a place to connect, grow and serve. It's a place where you are inspired and empowered for your next level. We're here to give lives direction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const isDark = theme ? theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (!isDark) {
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <HeaderNav />
        {children}
        <FooterNav />
      </body>
    </html>
  );
}
