import React from "react";
import PaystackPop from "@paystack/inline-js";

export default function PaystackButton({ amount }) {
  const pay = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_91fd1e69072a9c6b1a59517cdb61842b82291f3f", // Replace with your Paystack test public key
      email: "testbuyer@example.com",
      amount: amount * 100, // amount in pesewas
      currency: "GHS",
      onSuccess: (trx) => {
        alert("Payment successful! Transaction ref: " + trx.reference);
      },
      onCancel: () => {
        alert("Payment cancelled.");
      },
    });
  };

  return (
    <button
      onClick={pay}
      style={{
        background: "#00b859",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Pay with Paystack
    </button>
  );
}