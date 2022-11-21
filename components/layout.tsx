import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import Script from "next/script";
import { useRouter } from "next/router";

type ComponentProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: ComponentProps) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const page = router.pathname.substring(1);

  return (
    <div className="flex flex-col min-h-screen">
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <Head>
        <title>
          {t("head.title", { page: t([`title.${page ? page : 'home'}`]) })}
        </title>
        <link rel="icon" href="/images/profile.jpg" />
        <meta name="description" content={t("head.description")} />
        <meta property="og:image" content={`/images/profile.jpg`} />
        <meta name="og:title" content={t("head.title")} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <main className="flex-auto container mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
