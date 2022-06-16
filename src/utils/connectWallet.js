import Web3 from "web3";
const Config = JSON.parse(localStorage.getItem("Config"));
const chainId = Config ? Config.chainId : null;
const netWork = Config ? Config.netWork : null;
const web3 = Config ? new Web3(Config.rpcUrl) : null;

export async function listenEvent() {
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", async function (accounts) {
      window.location.reload();
    });
    window.ethereum.on("chainChanged", (chainId) => {
      // Handle the new chain.
      // Correctly handling chain changes can be complicated.
      // We recommend reloading the page unless you have good reason not to.
      window.location.reload();
    });
  }
}

export async function connectWallet() {
  if (window.ethereum) {
    await window.ethereum.request({ method: "eth_requestAccounts" });

    // const metamaskChainId = web3.utils.toBN(window.ethereum.chainId).toNumber();

    // if (metamaskChainId !== chainId) {
    //   alert(`Wrong network, select ${netWork} and try again!`);
    //   window.location.reload();
    // }
    // else {
    //   if (window.ethereum && !window.ethereum.selectedAddress) {
    //     window.ethereum.request({ method: "eth_requestAccounts" });
    //   }
    // }
    if (window.ethereum.selectedAddress) {
      return window.ethereum.selectedAddress;
    }
    return null;
  }
}
