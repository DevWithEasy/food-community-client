import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { Provider } from "react-redux";
import store from './features/Store';
import {PersistGate} from "redux-persist/integration/react";
import {persistor} from "./features/Store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor = {persistor}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
