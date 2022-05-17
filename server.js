// import Stripe from "stripe";
// const stripe = new Stripe("sk_test_...");

const stripe = require("stripe")(
  "sk_test_51Jiu0lC3QseEhbVaz6rfZ6wPOpZ5eSdNDGW59pXwS2JGCcKOXU0z4wkvFsStmlZ4kpyMuBh3yBDGYrQTYZQ8RuvX00fmWoA2Px"
);
var cors = require("cors");

const {
  createCustomer,
  retrieveCustomer,
  createToken,
  addCardToCustomer,
  retrieveProductPrice,
  createProductPrice,
} = require("./customers");

const create_checkout_session = require("./stripeSetup");

const express = require("express");

app.use(cors());

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/create-checkout-session", () => {
  create_checkout_session();
});
app.get("/createToken", async (req, res) => {
  const token = await stripe.tokens.create({
    card: {
      number: "4242424242424242",
      exp_month: 5,
      exp_year: 2023,
      cvc: "314",
    },
  });

  const charge = await stripe.charges.create({
    amount: 55,
    currency: "usd",
    description: "Example charge",
    source: token?.id,
    statement_descriptor: "Custom descriptor",
  });

  console.log("CREATED_TOKEN", charge);

  res.json({ token: charge });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("LISTENING AT PORT", process.env.PORT || 3000);
});
