import "../global.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="overflow-auto min-h-full p-4 h-dynamic-screen">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
