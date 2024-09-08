import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import { RecoilRoot } from "recoil";
import Search from "./pages/search";
import Buy from "./pages/buy";
import { CookiesProvider } from "react-cookie";
import { ContextProvider, useStateContext } from "./context/context";
import Bookmarks from "./pages/bookmarks";
import New from "./pages/new";
import Page from "./pages/page";
import Start from "./components/start";
import Result from "./pages/result";
import Category from "./pages/category";
import Popular from "./pages/populer";
import "./css/style.css";
import EditProfile from "./pages/editProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/basket",
    element: <Buy />,
  },
  {
    path: "/bookmarks",
    element: <Bookmarks />,
  },
  {
    path: "/newest",
    element: <New />,
  },
  {
    path: "/popular",
    element: <Popular />,
  },
  {
    path: "/details",
    element: <Page />,
  },
  {
    path: "/result",
    element: <Result />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/editProfile",
    element: <EditProfile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ContextProvider>
        <CookiesProvider>
          <RouterProvider router={router} />
          <Start />
        </CookiesProvider>
      </ContextProvider>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
