"use client";  
import {useEffect} from "react"
import { Provider, useDispatch } from "react-redux";
import store from "./store";  

export default function StoreProvider({ children }) {
  const dispatch = useDispatch()
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      if (token) {
        dispatch(setAccessToken(token));
      }
    }
  }, [dispatch]);

  return <Provider store={store}>{children}</Provider>;
}

