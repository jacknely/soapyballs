import Client from "shopify-buy";

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: "soapyballs.myshopify.com",
  storefrontAccessToken: "63f5ec83fe6705f561abef517947b5f7",
});