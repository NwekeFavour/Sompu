"use client";

import { Provider } from "react-redux";
import { persistor, store } from "../../store";
import AOSWrapper from "@/components/AosWrapper";
import ToastProvider from "@/components/toastProvider";
import TokenSync from "@/tokensync";
import { PersistGate } from "redux-persist/integration/react";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <TokenSync/>
      <AOSWrapper>
            <ToastProvider>
              <PersistGate loading={null} persistor={persistor}>
                {children}

              </PersistGate>
            </ToastProvider>
      </AOSWrapper>
    </Provider>
  );
}