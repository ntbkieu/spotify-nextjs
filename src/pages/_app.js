import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  className: "h-full",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Head>
        <title>Spotify</title>
      </Head>
      <Component {...pageProps} />
      <Toaster />
    </div>
  );
}
