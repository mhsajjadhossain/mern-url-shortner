import { createContext, useEffect, useReducer } from "react";
export const UrlContexts = createContext();

export const urlReducer = (prevState, action) => {
  switch (action.type) {
    case "SET_URLS":
      return { urls: action.payload };

    case "CREATE_URL":
      return {
        urls: [action.payload, ...prevState.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        urls: prevState.urls.filter((u) => u._id !== action.payload._id),
      };

    default:
      return prevState;
  }
};

export const UrlContextsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(urlReducer, {
    urls: null,
  });

  useEffect(() => {
    // const user = JSON.parse(localStorage.getItem("user"));
    // if (user) {
    //   dispatch({ type: "LOGIN", payload: user });
    // }
  }, []);

  console.log("URL Context:", state);
  return (
    <>
      <UrlContexts.Provider value={{ ...state, dispatch }}>
        {children}
      </UrlContexts.Provider>
    </>
  );
};
