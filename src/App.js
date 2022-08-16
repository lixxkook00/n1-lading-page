import { useEffect, useState } from "react";
import "./App.scss";
import LandingPage from "./pages/LandingPage";
import LoadingScreen from "./pages/LoadingScreen";

import { listenEvent, connectWallet } from "./utils/connectWallet";
import { getConfig } from "./Config/config";

import { useAccountContext } from "../src/context/accountContext";

import Router from './routers/Router'

import {BrowserRouter} from 'react-router-dom'

function App() {
  const { account, setCurrentAccount } = useAccountContext();
  const [loading, setLoading] = useState(true);

  // setTimeout(() => {
  //   setLoading(false);
  // }, 1500);

  // hande loading
  useEffect(() => {
    const onPageLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      onPageLoad()
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  useEffect(() => {
    getConfig();
    async function getAccount() {
      let result = await connectWallet();
      setCurrentAccount(result);
    }
    getAccount();
    listenEvent();
  }, []);

  return (
    <BrowserRouter>
      <div className={`App ${loading && "loading"}`}>
        {loading && <LoadingScreen />}

        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
