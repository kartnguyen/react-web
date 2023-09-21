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
import { handle_mobile_nav, handleScroll } from "./assets/main";

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
    ],
  },
]);
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    window.addEventListener("scroll", handleScroll);
    handle_mobile_nav();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
