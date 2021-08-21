import React from 'react';
import { Provider } from "react-redux";
import { StyleSheet } from 'react-native';
import MyApp from './MyApp/myApp';
import { PersistGate } from 'redux-persist/integration/react';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
