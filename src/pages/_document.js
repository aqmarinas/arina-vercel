import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="scroll-smooth"
    >
      <Head>
        <title>Aqmarina Shabihah - Portfolio</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="description"
          content="Explore Aqmarina's web development portfolio."
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
          content="Explore Aqmarina's web development portfolio."
        />
        <meta
          property="og:type"
          content="website"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
