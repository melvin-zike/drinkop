import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import MainBalance from "./MainBalance";
import ReferBalance from "./ReferBalance";
import "./wallet.scss";

const Wallet = () => {
  const [walletChange, setWalletExchange] = useState(false);

  const HandleWalletView = () => {
    if (walletChange == false) {
      setWalletExchange(true);
    } else {
      setWalletExchange(false);
    }
  };

  return (
    <>
      <Navbar />
      <div class="wallet-container bg-success text-center">
        <p class="page-title">
          <i class="fa fa-align-left"></i>Melon Wallet<i class="fa fa-user"></i>
        </p>
        {walletChange == true ? <ReferBalance /> : <MainBalance />}

        <div class="footer-menu">
          <div class="row text-center">
            <div class="col-md-6">
              <i class="fa fa-home"></i>
              <p class="referbtn" onClick={HandleWalletView}>
                Refer Bonus
              </p>
            </div>

            <div class="col-md-6">
              <i class="fa fa-inbox"></i>
              <p>Inbox</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
