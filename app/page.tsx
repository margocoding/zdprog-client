import { Metadata } from "next";
import { AuditCTA } from "./components/landing/AuditCTA";
import { BeforeAfter } from "./components/landing/BeforeAfter";
import { Blog } from "./components/landing/Blogs";
import { BusinessResult } from "./components/landing/BusinessResult";
import { FAQ } from "./components/landing/FAQ";
import { FinalCTA } from "./components/landing/FinalCTA";
import { Footer } from "./components/landing/Footer";
import Header from "./components/landing/Header";
import Hero from "./components/landing/Hero";
import { Pricing } from "./components/landing/Pricing";
import { Problem } from "./components/landing/Problem";
import { Solutions } from "./components/landing/Solutions";
import { ValueStrip } from "./components/landing/ValueStrip";
import { WhyUs } from "./components/landing/WhyUs";
import { Workflow } from "./components/landing/Workflow";

export const metadata: Metadata = {
  title: "Цифровизация продаж материалов ВСП для поставщиков | ЖД-ПРОГ",
  description:
    "ЖД-ПРОГ помогает поставщикам материалов ВСП увеличить эффективность продаж: создаём онлайн-каталоги, системы расчёта, заявки и автоматизацию работы с клиентами.",
  keywords: [
    "цифровизация продаж ВСП",
    "поставщики ВСП",
    "материалы ВСП",
    "железнодорожные материалы",
    "продажа материалов ВСП",
    "каталог материалов ВСП",
    "онлайн каталог ВСП",
    "сайт поставщика ВСП",
    "сайт для поставщика железнодорожных материалов",
    "автоматизация продаж ВСП",
    "автоматизация заявок",
    "цифровизация поставщика",
    "ЖД-ПРОГ",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "ЖД-ПРОГ — цифровизация продаж материалов ВСП",
    description:
      "Онлайн-каталоги, расчёты и автоматизация заявок для поставщиков железнодорожных материалов.",
    url: "/",
    siteName: "ЖД-ПРОГ",
    locale: "ru_RU",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ValueStrip />
      <Problem />
      <Solutions />
      <Workflow />
      <BusinessResult />
      <Pricing />
      <WhyUs />
      <BeforeAfter />
      <Blog />
      <AuditCTA />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
