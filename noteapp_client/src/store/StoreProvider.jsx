"use client";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./store";
import { setAccessToken } from "./authSlice.js"; 

function TokenInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      if (token) {
        dispatch(setAccessToken(token));
      }
    }
  }, [dispatch]);

  return null; 
}

export default function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      <TokenInitializer />
      {children}
    </Provider>
  );
}

