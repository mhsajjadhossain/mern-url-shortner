import { useContext } from "react";
import { UrlContexts } from "../context/UrlsContexts";

const useUrlContext = () => {
  const context = useContext(UrlContexts);
  if (!context) {
    throw Error(
      "`useUrlContext` must be use inside of the WorkoutContextProvider"
    );
  }
  return context;
};

export default useUrlContext;
