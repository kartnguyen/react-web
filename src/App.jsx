import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./router/Root";
import Home from "./router/Home";
import Products from "./router/Products";
import About from "./router/About";
import Contact from "./router/Contact";
import Cart from "./router/Cart";
import ProductDetail from "./router/ProductDetail";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { handle_mobile_nav, handleScroll, setSideBar } from "./assets/main";
import { AppProvider } from "./context/AppContext";
import Checkout from "./router/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:productID", element: <ProductDetail /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
      { path: "cart/:checkoutType", element: <Checkout /> },
    ],
  },
]);
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", setSideBar);
    handle_mobile_nav();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", setSideBar);
    };
  }, []);

  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
