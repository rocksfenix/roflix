import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/redux/store';
import Loading from './src/components/Loading';
import AppLayout from './src';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Loading />}
        persistor={persistor}
      >
        <AppLayout />
      </PersistGate>
    </Provider>
  );
};

export default App;
