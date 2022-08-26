import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import store from './store/store';
import { persistStore } from 'redux-persist';
import Loading  from './components/Loading/Loading';

function App() {
  return (
    <Provider store={store}>
      <PersistGate
          persistor={persistStore(store)}
          loading={<Loading />}>
        <Header />
        <Products />
      </PersistGate>
    </Provider>
  );
}

export default App;
