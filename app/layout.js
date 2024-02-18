
import { Header } from "@/components/header/Header";
import "./globals.css";
import { Footer } from "@/components/footer/Footer";


export const metadata = {
  title: "Строительство и ремонт под ключ",
  description: "Наши услуги включают в себя полный цикл работ - от концепции и проектирования до завершающих отделочных работ. Мы заботимся о каждой детали, чтобы обеспечить нашим клиентам результат высочайшего качества и максимальный комфорт.",
  alternates: {
    canonical: ''
  }
};

export default function RootLayout({ children }) {


  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
