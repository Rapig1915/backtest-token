import Head from "next/head";
import Script from "next/script";
import { Inter } from "@next/font/google";
import AppHeader from "@/components/AppHeader";
import { Box } from "@material-ui/core";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T62JQP7YTR', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Head>
        <title>RToken Backtester</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AppHeader />
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <iframe
            src="https://rtoken-backtest.herokuapp.com/app/1/embed"
            height="1000px"
            width="1200px"
            style={{
              paddingTop: "100px",
              border: "solid",
              borderColor: "whitesmoke",
            }}
          ></iframe>
        </Box>
      </main>
    </>
  );
}
