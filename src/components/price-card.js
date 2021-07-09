import { Box, Card, Text, Heading, Button, Link } from "theme-ui";
import React, { useState } from "react";
import { Router, useRouter } from "next/router";
import List from "./list";
import { client } from "../utils/shopify";
import LoadingOverlay from "react-loading-overlay";
import styled from "styled-components";

export default function PriceCard({
  data: {
    header,
    name,
    title,
    description,
    price,
    buttonText = "Buy",
    anotherOption,
    points,
    id,
  },
}) {
  const router = useRouter();
  const [webUrl, setWebUrl] = useState({});
  const [loading, setLoading] = useState(false);

  const getCheckoutId = async () => {
    setLoading(true);
    const storage = window.localStorage;
    let checkoutId = storage.getItem("checkoutId");
    if (!checkoutId) {
      const checkout = await client.checkout.create();
      checkoutId = checkout.id;
    }
    storage.setItem("checkoutId", checkoutId);
    const cart = await client.checkout.fetch(checkoutId);
    setWebUrl(cart.webUrl);
    return checkoutId;
  };

  const clearCart = async () => {
    const checkoutId = await getCheckoutId();
    const cart = await client.checkout.fetch(checkoutId);
    const items = cart.lineItems.map((a) => a.id);
    const cleared_cart = await client.checkout.removeLineItems(
      checkoutId,
      items
    );
  };

  const addToCart = async () => {
    await clearCart();
    const checkoutId = await getCheckoutId();
    const cart = await client.checkout.addLineItems(checkoutId, [
      {
        variantId: id,
        quantity: 1,
      },
    ]);
    console.log(cart);
    router.push(cart.webUrl);
  };

  const StyledLoader = styled(LoadingOverlay)`
    .MyLoader_overlay {
      background: rgba(255, 198, 107, 0.85);
      color: #000000;
    }
    &.MyLoader_wrapper--active {
      overflow: hidden;
    }
  `;

  return (
    <Card
      className={header ? "package__card active" : "package__card"}
      sx={styles.pricingBox}
    >
      <StyledLoader
        active={loading}
        classNamePrefix="MyLoader_"
        spinner
        text="Preparing your balls..."
      >
        <Box>
          <Box
            className={styles.package__header}
            sx={styles.pricingHeader}
          >
            <Heading className="package__name" variant="title">
              {title} Balls
            </Heading>
            <Text as="p">{description}</Text>
          </Box>
          <List items={points} childStle={styles.listItem} />
          <Text className="package__price" sx={styles.price}>
            £{price}
            <span></span>
          </Text>
          <Box sx={styles.buttonBox}>
            <Button
              variant="primary"
              aria-label={buttonText}
              onClick={addToCart}
            >
              {buttonText}
            </Button>
            {anotherOption && (
              <Button
                variant="textButton"
                className="free__trial"
                aria-label={anotherOption}
                sx={{ color: "black" }}
              >
                {anotherOption}
              </Button>
            )}
          </Box>
        </Box>
      </StyledLoader>
    </Card>
  );
}

const styles = {
  pricingBox: {
    borderRadius: 20,
    position: "relative",
    transition: "all 0.3s",
    p: ["35px", null, null, "40px"],
    width: ["100%", "100%", "100%"],
    mb: "40px",
    mt: "40px",
    mx: [0, "auto", 0],
    "&:before": {
      position: "absolute",
      content: "''",
      width: "100%",
      top: 0,
      left: 0,
      height: "100%",
      border: "1px solid #8b4513",
      borderRadius: "inherit",
      transition: "all 0.3s",
      zIndex: -1,
    },
    "&:hover": {
      border: "1px solid #8b4513",
      boxShadow: "0px 1px 10px #8b4513 !important",
      "&:before": {
        opacity: 0,
      },
    },
  },
  header: {
    height: ["28px", null, null, "32px"],
    backgroundColor: "yellow",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: 1,
    lineHeight: 1.2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    position: "absolute",
    top: "-17px",
    letterSpacing: "-.14px",
    px: "12px",
  },
  pricingHeader: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    mb: ["30px", null, null, null, "40px"],
    p: {
      fontSize: [1, 2],
      color: "text",
      lineHeight: "heading",
    },
    ".package__name": {
      marginBottom: [1, null, 2],
    },
  },
  price: {
    fontWeight: 500,
    fontSize: [4, null, 5, null, "30px"],
    lineHeight: 1,
    letterSpacing: "-0.55px",
    color: "text",
    marginBottom: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pt: [4, 6],
    "> span": {
      position: "relative",
      pl: "3px",
      display: "inline-block",
      fontSize: [1, 2],
      fontWeight: "normal",
    },
  },
  listItem: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: [1, 2],
    lineHeight: [1.75, 1.6],
    mb: 3,
    alignItems: "flex-start",
    color: "text",
    "&.closed": {
      opacity: 0.55,
      button: {
        color: "#788FB5",
      },
    },
  },
  buttonGroup: {
    textAlign: "center",
    mt: ["30px", null, null, null, "35px"],
    ".free__trail": {
      color: "secondary",
      width: "100%",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: ["14px", 1],
      p: "20px 0 0",
    },
  },
  buttonBox: {
    width: "auto",
    mx: "auto",
    textAlign: "center",
    mb: [null, null, null, null, null, 7],
  },
};
