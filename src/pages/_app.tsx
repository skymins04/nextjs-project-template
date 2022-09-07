import "../styles/globals.css";
import App, { AppContext, AppProps } from "next/app";
import { Provider } from "react-redux";
import configureStore from "@Redux/configureStore";
import { appWithTranslation } from "next-i18next";

const store = configureStore();

const NextjsApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

NextjsApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default appWithTranslation(NextjsApp);
