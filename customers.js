const stripe = require("stripe")(
  "sk_test_51Jiu0lC3QseEhbVaz6rfZ6wPOpZ5eSdNDGW59pXwS2JGCcKOXU0z4wkvFsStmlZ4kpyMuBh3yBDGYrQTYZQ8RuvX00fmWoA2Px"
);

const createCustomer = async () => {
  const customer = await stripe.customers.create({
    email: "customer@example.com",
    name: "wasiq",
    description: "Testing Stripe",
  });
  console.log("CREATED CUSTOMER", customer);
};

const retrieveCustomer = async () => {
  const customer = await stripe.customers.retrieve("cus_LdQTay1CnKBrEy");
  console.log("RETRIEVED_CUSTOMER", customer);
};

const createToken = async () => {
  //   const token = await stripe.tokens.create({
  //     card: {
  //       number: "4242424242424242",
  //       exp_month: 5,
  //       exp_year: 2023,
  //       cvc: "314",
  //     },
  //   });
  //   console.log("CREATED_TOKEN", token);
};

// const charge = await stripe.charges.create({
//   amount: 999,
//   currency: "usd",
//   description: "Example charge",
//   source: token,
//   statement_descriptor: "Custom descriptor",
// });

const addCardToCustomer = async () => {
  const card = await stripe.customers.createSource("cus_LdQZy18yf3f89X", {
    source: "tok_1KwAa7C3QseEhbVaaI0eds2v",
  });
  console.log("CARD_CREATED", card);
};

const retrieveProductPrice = async () => {
  const stripe = require("stripe")(
    "sk_test_51Jiu0lC3QseEhbVaz6rfZ6wPOpZ5eSdNDGW59pXwS2JGCcKOXU0z4wkvFsStmlZ4kpyMuBh3yBDGYrQTYZQ8RuvX00fmWoA2Px"
  );

  const product = await stripe.products.retrieve("prod_LdRkhVfpUff57d");

  console.log("product", product);
};

const createProductPrice = async () => {
  const stripe = require("stripe")(
    "sk_test_51Jiu0lC3QseEhbVaz6rfZ6wPOpZ5eSdNDGW59pXwS2JGCcKOXU0z4wkvFsStmlZ4kpyMuBh3yBDGYrQTYZQ8RuvX00fmWoA2Px"
  );

  const price = await stripe.prices.create({
    unit_amount: 50,
    currency: "usd",
    product: "prod_LdRkhVfpUff57d",
  });

  console.log("PRODUCT_PRICE", price);
};

module.exports = {
  createCustomer,
  retrieveCustomer,
  createToken,
  addCardToCustomer,
  retrieveProductPrice,
  createProductPrice,
};
