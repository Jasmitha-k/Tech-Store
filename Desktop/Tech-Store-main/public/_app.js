// pages/_app.js
import { Provider } from 'react-redux';
import { store} from '../redux/store';
import RootLayout from '@/app/layout';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}> {/* Wrap your app with the Provider */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
