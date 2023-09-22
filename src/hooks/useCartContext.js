import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useAppContext = () => {
  const context = useContext(CartContext);

  return { ...context };
};
