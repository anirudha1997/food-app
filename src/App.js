import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import AppConfigContext from "./components/AppConfigContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [fixHeader, setFixedHeader] = useState(false);

  return (
    <Provider store={appStore}>
      <AppConfigContext.Provider
        value={{ fixedHeader: fixHeader, setFixedHeader }}
      >
        <div className="app">
          <Header />
          <div className="pt-[80px] md:pt-[125px]">
            <Outlet />
          </div>
          <Footer />
        </div>
      </AppConfigContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
