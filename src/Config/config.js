// import axios from "axios";
// import {abi} from "./abi1.json"
const Mainnet = {
  netWork: "Binance Smart Chain",
  chainId: 56,
  rpcUrl: "https://bsc-dataseed.binance.org/",
};

const Testnet = {
  netWork: "Testnet Binance Smart Chain",
  chainId: 97,
  rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
};

async function getConfigInfo() {
  const data = "Mainnet";
  return data;
}

async function setConfig(config) {
  await localStorage.setItem("Config", JSON.stringify(config));
  return true;
  // return window.location.reload();
}

export async function getConfig() {
  var config = {};
  const data = await getConfigInfo();
  if (data === "Mainnet") {
    config = Mainnet;
  } else {
    config = Testnet;
  }
  const globalConfig = localStorage.getItem("Config");

  if (
    !globalConfig ||
    (globalConfig && globalConfig !== JSON.stringify(config))
  ) {
    await setConfig(config);
  }
  return config;
}
