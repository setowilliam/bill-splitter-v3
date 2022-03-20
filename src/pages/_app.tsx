import "../global.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-dynamic-screen">
      <Header />
      <div className="overflow-auto min-h-full p-4">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
