import React from "react";
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
import { ContextProvider } from "./context/context";
import Bookmarks from "./pages/bookmarks";
import New from "./pages/new";

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
    element: <Bookmarks/>
  },
  {
    path:"/newest",
    element:<New/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ContextProvider>
        <CookiesProvider>
          <RouterProvider router={router} />
        </CookiesProvider>
      </ContextProvider>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
