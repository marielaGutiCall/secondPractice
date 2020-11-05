import "../../styles/globals.css";
import "antd/dist/antd.css";
import {Provider} from 'react-redux';
import configureStore from "../redux";
function MyApp({ Component, pageProps }) {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
