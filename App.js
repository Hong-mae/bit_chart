import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import SplashScreen from 'react-native-splash-screen';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer, { rootSaga } from './modules';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import MainScreen from './components/main/MainScreen';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const App = () => {
  useEffect(() => {
    setTimeout(() => { SplashScreen.hide() }, 1000);
  }, [])

  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  )
}

export default App