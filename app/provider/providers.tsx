"use client";

import { Provider } from "react-redux";
import { store } from "../../store";
import AOSWrapper from "@/components/AosWrapper";
import ToastProvider from "@/components/toastProvider";
import TokenSync from "@/tokensync";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <TokenSync/>
      <AOSWrapper>
            <ToastProvider>
              {children}
            </ToastProvider>
      </AOSWrapper>
    </Provider>
  );
}