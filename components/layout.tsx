import Navbar from "./navbar";
import Footer from "./footer";
import Head from 'next/head';
import { useTranslation } from "next-i18next";

type ComponentProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: ComponentProps) {
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{t("head.title")}</title>
        <link rel="icon" href="/images/profile.jpg" />
        <meta
          name="description"
          content={t("head.description")}
        />
        <meta
          property="og:image"
          content={`/images/profile.jpg`}
        />
        <meta name="og:title" content={t("head.title")} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <main className="flex-auto container mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
