import "../styles/globals.css";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <>
      {pathname != "/work/storyDemo" ? (
        <Header pathname={pathname}></Header>
      ) : (
        ""
      )}
      <Component {...pageProps} />
      {pathname != "/work/storyDemo" ? <Footer></Footer> : ""}
    </>
  );
}

export default MyApp;
