import React from "react";

const MainBalance = () => {
  return (
    <>
      <div class="amount-box text-center">
        <img
          src="https://lh3.googleusercontent.com/ohLHGNvMvQjOcmRpL4rjS3YQlcpO0D_80jJpJ-QA7-fQln9p3n7BAnqu3mxQ6kI4Sw"
          alt="wallet"
        />
        <p>Total Balance</p>
        <p class="amount">₦ 123</p>
      </div>

      <div class="btn-group text-center">
        <button type="button" class="btn btn-outline-light">
          Add Money
        </button>
        <button type="button" class="btn btn-outline-light">
          Widthdraw
        </button>
      </div>

      <div class="txn-history">
        <p>
          <b>History</b>
        </p>
        <p class="txn-list">
          Payment to xyz shop<span class="debit-amount">-₦100</span>
        </p>

        <p class="txn-list">
          Payment to abc shop<span class="debit-amount">-₦150</span>
        </p>

        <p class="txn-list">
          Credit From abc ltd<span class="credit-amount">+₦300</span>
        </p>

        <p class="txn-list">
          Transfer From John Doe<span class="credit-amount">+₦100</span>
        </p>
      </div>
    </>
  );
};

export default MainBalance;
