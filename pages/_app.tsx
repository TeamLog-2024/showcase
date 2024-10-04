import "@/styles/globals.css";
import "@/styles/fonts.css";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";

import { AppProps } from 'next/app';
import { ComponentType } from 'react';

export default function App({ Component, pageProps }: AppProps & { Component: ComponentType }) {
  return <Component {...pageProps} />;
}
