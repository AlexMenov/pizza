import { AppProps } from 'next/dist/shared/lib/router/router';
import { Layout } from '../components/Layout/Layout';
import GlobalStyles from '../styles/globals';
import { Provider } from 'react-redux';
import { store } from "../store/store";


function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  return <>
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyles />
      </Layout>
    </Provider>
  </>;
}

export default MyApp;
