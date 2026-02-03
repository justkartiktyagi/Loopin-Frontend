import { useEffect } from "react";

export default function PayButton({ name, email }) {
  useEffect(() => {
    document.getElementById("paypal-button-container").innerHTML = "";

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${import.meta.env.VITE_PAYPAL_CLIENT_ID}&currency=USD`;
    script.async = true;

    script.onload = () => {
      window.paypal
        .Buttons({
          createOrder: async () => {
            const res = await fetch(
              `${import.meta.env.VITE_API_BASE}/create-order`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email }),
              },
            );
            const data = await res.json();
            return data.orderId;
          },

          onApprove: async (data) => {
            const res = await fetch(
              `${import.meta.env.VITE_API_BASE}/capture-order`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  orderId: data.orderID,
                  name,
                  email,
                }),
              },
            );

            const result = await res.json();

            if (result.success) {
              window.location.href = "/success";
            } else {
              alert("Payment failed");
            }
          },
        })
        .render("#paypal-button-container");
    };

    document.body.appendChild(script);
  }, [name, email]);

  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <div id="paypal-button-container"></div>
    </div>
  );
}
