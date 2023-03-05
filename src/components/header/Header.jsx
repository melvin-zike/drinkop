import { Badge } from "@material-ui/core";
import {
  LocalDrink,
  Money,
  MoneyOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Person } from "@material-ui/icons";
import { KingBed } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="container-fluid heading py-2 head1">
      <div className="row text-center">
        <div className="col text-dark">
          <span></span>
        </div>
        <div className="col text-dark">
          <Link to="/users/wallet/isd" className="walletlink">
            <KingBed className="text-primary" />
            <span className="text-dark">Wallet</span>
          </Link>
        </div>
        <div className="col text-dark">
          <Link to="/myorders/id" className="walletlink">
            <LocalDrink className="text-warning" />
            <span>Orders</span>
          </Link>
        </div>
        <div className="col text-dark">
          <Link to="/earn" className="walletlink">
            <MoneyOutlined className="text-success" />
            <span>Earn</span>
          </Link>
        </div>
        <div className="col text-dark">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
