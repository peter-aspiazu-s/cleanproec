import { Geist, Geist_Mono, Inter, Lato, Quicksand } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'], 
  variable: '--font-lato', // Esto es útil si quieres usarla como variable CSS
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Asegúrate de incluir todos los pesos que usas
  variable: '--font-quicksand', // Esto es útil si quieres usarla como variable CSS
});

export const metadata = {
  title: "CleanPro EC",
  description: "Especialistas en limpieza y desinfección a domicilio de colchones, muebles, alfombras e interiores de vehículos en Guayas, Ecuador.",
  icons: {
    icon: '/logo.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${lato.variable} ${quicksand.variable}`}
      >
        {children}
        <Script
          src="https://kit.fontawesome.com/0894a0420e.js" // Reemplaza con la URL exacta de tu kit
          crossOrigin="anonymous"
          strategy="beforeInteractive" // Carga el script antes de que la página sea interactiva
        />
      </body>
    </html>
  );
}
