import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aqmarina Shabihah - Portfolio</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="description"
          content="Explore Aqmarina's portfolio."
        />
        <meta
          name="author"
          content="Aqmarina Shabihah"
        />
        <meta
          property="og:title"
          content="Aqmarina Shabihah Portfolio"
        />
        <meta
          property="og:image"
          content="/img/preview.png"
        />
        <meta
          property="og:description"
          content="Explore Aqmarina's portfolio."
        />
        <meta
          property="og:type"
          content="website"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
