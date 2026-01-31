import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
// import AOSProvider from "@/components/providers/AosProvider";
import AOSProvider from "@/components/providers/AOSProvider";



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
<<<<<<< HEAD
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
=======
      <body className={`antialiased`}>
        <AOSProvider>
>>>>>>> 028c5d6 (first commit)
        {children}
      </AOSProvider>
      </body>
    </html>
  );
}
