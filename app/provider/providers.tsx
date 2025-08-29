"use client";

import { Provider } from "react-redux";
import { store } from "../../store";
import AOSWrapper from "@/components/AosWrapper";
import ReapopProvider from "./reapopProvider";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AOSWrapper>
        <ReapopProvider>
            {children}
        </ReapopProvider>
      </AOSWrapper>
    </Provider>
  );
}