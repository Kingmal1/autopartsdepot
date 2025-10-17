import React from "react";

const PaystackButton = ({ email, amount, reference, onSuccess, onClose }) => {
  const handlePaystack = () => {
    const handler = window.PaystackPop.setup({
      key: "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxx", // Replace with your real public key
      email: email,
      amount: amount * 100, // Amount in kobo (for GHS multiply by 100)
      currency: "GHS",
      ref: reference || APD-${Date.now()},
      callback: (response) => {
        console.log("Payment complete:", response);
        if (onSuccess) onSuccess(response);
      },
      onClose: () => {
        console.log("Payment window closed");
        if (onClose) onClose();
      },
    });

    handler.openIframe();
  };

  return (
    <button
      onClick={handlePaystack}
      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
    >
      Pay with Paystack
    </button>
  );
};

export default PaystackButton;