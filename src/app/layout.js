"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from "react-redux";
import store from "./cart/store";
import Header from "./components/header";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <Header/>
        {children}
        </Provider></body>
    </html>
  );
}
