import Head from "next/head";
import { FC } from "react";

const Meta: FC = () => (
  <Head>
    <link rel="shortcut icon" href="public/static/images/favicon.ico" type="image/x-icon"/>

    <meta name="viewport" content="width=device-width,initial-scale=1" />

    {/* Theme Color for Chrome, Firefox OS and Opera */}
    <meta name="theme-color" content="#ff0a78" />

    {/* Control the behavior of search engine crawling and indexing */}
    <meta name="robots" content="index,follow" />

    {/* Short description of your document's subject */}
    <meta name="subject" content="Komal Amrutkar's portfolio" />

    {/* Gives a general age rating based on the document's content */}
    <meta name="rating" content="General" />

    <meta name="Author" content="Komal Amrutkar" />
    <meta
      name="description"
      content="A passionate frontend developer focused on creating interactive, accessible and responsive websites"
      key="description"
    />

    {/* twitter card */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="@kamrutkar21" />
    <meta
      name="twitter:title"
      content="Komal Amrutkar | Frontend Developer"
      key="twi:title"
    />
    <meta
      name="twitter:description"
      content="A passionate frontend developer focused on creating interactive, accessible and responsive websites"
      key="twi:description"
    />
    <meta
      name="twitter:image"
      content="https://raw.githubusercontent.com/kamrutkar/kamrutkar.github.io/main/public/static/images/me.png"
    />
    {/*  */}

    {/* Facebook Open Graph */}
    <meta property="og:type" content="website" />
    <meta
      property="og:description"
      content="A passionate frontend developer focused on creating interactive, accessible and responsive websites"
      key="og:description"
    />
    <meta
      property="og:title"
      content="Komal Amrutkar | Frontend Developer"
      key="og:title"
    />
    <meta
      property="og:image"
      content="https://raw.githubusercontent.com/kamrutkar/kamrutkar.github.io/main/public/static/images/me.png"
    />
  </Head>
);

export default Meta;
