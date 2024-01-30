import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// import reportWebVitals from "./reportWebVitals";
// import { getAnalytics } from "firebase/analytics";

import { initializeApp } from "firebase/app";
import ContextWrapper from "../src/components/Calendar/context/ContextWrapper";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtZqDmN8SRUjMf2KNTtKEjDsjOUibUAOM",
  authDomain: "reservas-quart.web.com",
  projectId: "reservas-quart",
  storageBucket: "reservas-quart.appspot.com",
  messagingSenderId: "913379056592",
  appId: "1:913379056592:web:af813ac283ee799ce7b7d5",
  measurementId: "G-B0S30RBNH6",
};

// Initializer Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextWrapper>
      <RouterProvider router={router} />
    </ContextWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
