import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Fullfilled from "./Fullfilled";
import styles from "./myorders.module.css";
import "./myorders.scss";
// import img from 'next/image';

const MyOrder = () => {
  const status = 0;
  const [showfullfilled, setShowfullfilled] = useState(false);

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  const showMyOrder = () => {
    if (showfullfilled === true) {
      setShowfullfilled(false);
      console.log(showfullfilled);
    }
  };
  const showFullFilledOrders = () => {
    if (showfullfilled === false) {
      setShowfullfilled(true);
      console.log(showfullfilled);
    }
  };

  return (
    <>
      <Navbar />
      <div className="text-center">
        <button className="my-3" onClick={showMyOrder}>
          MY ORDERS
        </button>{" "}
        <button className="my-3" onClick={showFullFilledOrders}>
          MY Fullfilled ORDERS
        </button>
      </div>
      {showfullfilled === false ? (
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.row}>
              <table className={styles.table}>
                <thead>
                  <tr className={styles.trTitle}>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Number</th>
                    <th>Email</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.tr}>
                    <td>
                      <span className={styles.id}>12345678987</span>
                    </td>
                    <td>
                      <span className={styles.name}>John Nwanna</span>
                    </td>
                    <td>
                      <span className={styles.address}>
                        Elton st. 212-33 LA
                      </span>
                    </td>
                    <td>
                      <span className={styles.number}>09123457653</span>
                    </td>
                    <td>
                      <span className={styles.email}>john@email.com</span>
                    </td>
                    <td>
                      <span className={styles.total}>N3800</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.row}>
              <div className={statusClass(0)}>
                <img src="/img/paid.png" width={30} height={30} alt="" />
                <span>Payment</span>
                <div className={styles.checkedIcon}>
                  <img
                    className={styles.checkedIcon}
                    src="https://th.bing.com/th/id/OIP.p4OBqy5H5jduV7k8H9phiAHaH-?pid=ImgDet&rs=1"
                    //   src="/img/checked.png"
                    width={20}
                    height={20}
                    alt=""
                  />
                </div>
              </div>
              <div className={statusClass(1)}>
                <img src="/assets/img/bake.png" width={30} height={30} alt="" />
                <span>Preparing</span>
                <div className={styles.checkedIcon}>
                  <img
                    className={styles.checkedIcon}
                    src="/img/checked.png"
                    width={20}
                    height={20}
                    alt=""
                  />
                </div>
              </div>
              <div className={statusClass(2)}>
                <img src="/img/bike.png" width={30} height={30} alt="" />
                <span>On The Way</span>
                <div className={styles.checkedIcon}>
                  <img
                    className={styles.checkedIcon}
                    src="/img/checked.png"
                    width={20}
                    height={20}
                    alt=""
                  />
                </div>
              </div>
              <div className={statusClass(3)}>
                <img src="/img/delivered.png" width={30} height={30} alt="" />
                <span>Delivered</span>
                <div className={styles.checkedIcon}>
                  <img
                    className={styles.checkedIcon}
                    src="/img/checked.png"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.wrapper}>
              <h2 className={styles.title}>CART TOTAL</h2>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal:</b>N0.00
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount:</b>N0.00
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total:</b>N0.00
              </div>
              <button disabled className={styles.button}>
                PAID
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Fullfilled />
          <Fullfilled />
          <Fullfilled />
          <Fullfilled />
          <Fullfilled />
          <Fullfilled />
          <Fullfilled />
        </>
      )}
    </>
  );
};

export default MyOrder;
