import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import MyApp from './MyApp/myApp';
import { store, persistor } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MyApp/>
     </PersistGate>
    </Provider>
  );
}
