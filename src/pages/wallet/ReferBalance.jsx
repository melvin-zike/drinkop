import React from "react";

const ReferBalance = () => {
  return (
    <>
      <div class="amount-box text-center">
        <img
          src="https://lh3.googleusercontent.com/ohLHGNvMvQjOcmRpL4rjS3YQlcpO0D_80jJpJ-QA7-fQln9p3n7BAnqu3mxQ6kI4Sw"
          alt="wallet"
        />
        <p>Refer Balance</p>
        <p class="amount">₦ 50</p>
      </div>

      <div class="btn-group text-center">
        <button type="button" class="btn btn-outline-light">
          Buy Water
        </button>
        <button type="button" class="btn btn-outline-light">
          Widthdraw
        </button>
      </div>

      <div class="txn-history">
        <p>
          <b> Credit History </b>
          <span className="mx-3">No of Refers:</span>
          <span> 10</span>
        </p>
        <p class="txn-list">
          Withdraw<span class="debit-amount">₦100</span>
        </p>

        <p class="txn-list">
          bonus <span class="credit-amount">₦150</span>
        </p>

        <p class="txn-list">
          Bonus<span class="credit-amount">+₦300</span>
        </p>

        <p class="txn-list">
          Transfer From John Doe<span class="credit-amount">+₦100</span>
        </p>
      </div>
    </>
  );
};

export default ReferBalance;
