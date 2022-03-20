import "../global.css";
import type { AppProps } from "next/app";
import PageLayout from "../layout-components/PageLayout";
import Header from "../layout-components/Header";
import Footer from "../layout-components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Header />
      <div className="overflow-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </PageLayout>
  );
}

export default MyApp;
