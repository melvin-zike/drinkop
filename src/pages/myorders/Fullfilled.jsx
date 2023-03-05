import React from "react";
import styles from "./myorders.module.css";

const Fullfilled = () => {
  return (
    <div className="container">
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
                  <span className={styles.address}>Elton st. 212-33 LA</span>
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
      </div>
    </div>
  );
};

export default Fullfilled;
