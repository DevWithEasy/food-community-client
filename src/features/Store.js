import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import storage from "redux-persist/lib/storage";
import {persistStore,persistReducer} from "redux-persist"

const persistConfig = {
  key: "root",
  storage
}

const persistedReducer = persistReducer (persistConfig,rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware : getDefaultMiddleware => getDefaultMiddleware({serializableCheck : false})
})

export const persistor = persistStore(store)

export default store;
