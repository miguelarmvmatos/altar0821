import React, { useState, useEffect } from "react";

import "../styles/payments.css";

function Payments(props) {
  const [paymentName, setPaymentName] = useState();
  const [ammount, setAmmount] = useState();

  const createPayment = (event) => {
    props.setPayment([
      ...props.payment,
      { payment: paymentName, ammount: ammount, code: props.code },
    ]);
  };
  console.log("payments", props, props.payment);
  return (
    <div>
      <p>Payments</p>
      <input
        type="text"
        placeholder="Payment"
        onChange={(e) => setPaymentName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ammount"
        onChange={(e) => setAmmount(e.target.value)}
      />
      <button onClick={createPayment}>Add</button>
      <div>
        {props.payment.map((data, index) => (
          <div>
            <p>{data.payment}</p>
            <p>{data.ammount}</p>
            <p>{data.code}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Payments;
