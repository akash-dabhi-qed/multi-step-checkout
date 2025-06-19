import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CheckoutProvider } from '../context/CheckoutContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CheckoutProvider>
      <Component {...pageProps} />
    </CheckoutProvider>
  );
}
