import { createContext } from "react";
import { products } from "../assets/api";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const findProductById = (productID) => {
    return products.find((product) => product.id === productID);
  };
  return (
    <AppContext.Provider value={{ products, findProductById }}>
      {children}
    </AppContext.Provider>
  );
};
