<script src="https://sdks.shopifycdn.com/js-buy-sdk/v2/latest/index.umd.min.js"></script>

<script>
// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: "soapyballs.myshopify.com",
  storefrontAccessToken: "63f5ec83fe6705f561abef517947b5f7",
});

export { client };
</script>
