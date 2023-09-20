import React, { useContext, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "contexts/theme";
import Header from "components/header";
import store from "stores";
import { Provider } from "react-redux";
import { statusBarStyle } from "config";
import { AppProps } from "next/app";
import "styles/main.scss";
import { AuthContext, AuthProvider } from "contexts/AuthContext";
import RegistrationScreen from "routes/registration";
import LoginScreen from "routes/login/login";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register(process.env.serviceWorkerUrl as string, {
        scope: "/",
      });
    }
  }, []);

  const mock = {
    imageUrl: "https://source.unsplash.com/yWG-ndhxvqY",
    phrase: "She is cutting some herbs",
    translation: "Ela está cortando ervas",
  };

  const isSignedIn = true;

  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scalable=0, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={statusBarStyle}
        />
        <link
          rel="apple-touch-startup-image"
          sizes="512x512"
          href="/logo512.png"
        />
        <link
          rel="apple-touch-startup-image"
          sizes="256x256"
          href="/logo256.png"
        />
        <link rel="apple-touch-icon" sizes="512x512" href="/logo512.png" />
        <link rel="apple-touch-icon" sizes="256x256" href="/logo256.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthProvider>
        <Provider store={store}>
          <ThemeProvider>
            <Header />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </AuthProvider>
    </>
  );
}
