import { useContext } from "react";
import AuthrizationContext from "../context/authContext";

const useAuthrization = () => {
  const context = useContext(AuthrizationContext);
  if (!context) {
    throw new Error("Error: AuthrizationContext must be used within AuthrizationContextProvider");
  }
  return context;
};

export default useAuthrization;