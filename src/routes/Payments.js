import React, { useState, useEffect } from "react";

import "../styles/payments.css";

function Payments(props) {
  const [paymentName, setPaymentName] = useState();
  const [ammount, setAmmount] = useState();

  const createPayment = (event) => {
    props.setPayment([
      ...props.payment,
      {
        payment: paymentName,
        ammount: ammount,
        code: props.code,
        grid: JSON.stringify(props.grid),
      },
    ]);
  };
  console.log("payments", props, props.payment);
  return (
    <div className="payments">
      {props.showBoard && (
        <div className="payments_top">
          <p>
            <span className="live"></span>Live
          </p>
          <div className="code_now">Your code now: {props.code}</div>
        </div>
      )}
      <div className="add_payment">
        <div>
          <p>Payment</p>
          <input
            type="text"
            placeholder="Payment"
            onChange={(e) => setPaymentName(e.target.value)}
          />
        </div>
        <div>
          <p>Ammount</p>
          <input
            type="number"
            placeholder="Ammount"
            onChange={(e) => setAmmount(e.target.value)}
          />
        </div>
        <button
          disabled={!paymentName || !ammount || !props.showBoard}
          onClick={createPayment}
        >
          + Add
        </button>
      </div>
      <div className="payment_table">
        <div className="payment_header">
          <div className="cell">
            <p>Name</p>
          </div>
          <div className="cell">
            <p>Ammount</p>
          </div>
          <div className="cell">
            <p>Code</p>
          </div>
          <div className="cell">
            <p>Grid</p>
          </div>
        </div>
        {props.payment.map((data, index) => (
          <div className="table_row">
            <div className="cell">
              <p>{data.payment}</p>
            </div>
            <div className="cell">
              <p>{data.ammount}</p>
            </div>
            <div className="cell">
              <p>{data.code}</p>
            </div>
            <div className="cell">
              <p>{data.grid}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Payments;
