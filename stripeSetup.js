// const priceId = priceId;
const stripe = require("stripe")(
  "sk_test_51Jiu0lC3QseEhbVaz6rfZ6wPOpZ5eSdNDGW59pXwS2JGCcKOXU0z4wkvFsStmlZ4kpyMuBh3yBDGYrQTYZQ8RuvX00fmWoA2Px"
);

const create_checkout_session = async () => {
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        price: "price_1KwBLnC3QseEhbVaC6eR5zsL",
        // For metered billing, do not pass quantity
        quantity: 1,
      },
    ],

    success_url: "https://example.com/success",
    cancel_url: "https://example.com/cancel",
    line_items: [{ price: "price_1KwBLnC3QseEhbVaC6eR5zsL", quantity: 1 }],
    mode: "payment",
  });

  console.log("CREATED_SESSION", session);
};

module.exports = create_checkout_session;
