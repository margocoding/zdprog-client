import type { Metadata } from "next";
import { RequestProvider } from "../components/demo/RequestContext";
import { RequestDrawer } from "../components/demo/RequestDrawer";

export const metadata: Metadata = {
  title: "ЖД-ПРОГ",
  description: "Цифровизация продаж материалов ВСП",
};

export default function RequestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <RequestProvider>
          {children}
          <RequestDrawer />
        </RequestProvider>
      </body>
    </html>
  );
}
