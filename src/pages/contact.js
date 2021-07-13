import React from "react";
import { ThemeProvider, Button } from "theme-ui";
import { client } from "../utils/shopify.js";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import { Flex, Container, Grid, Box, Heading, Text } from "theme-ui";
import CookieConsent from "react-cookie-consent";
import { Link } from "components/link";

export default function IndexPage({ products }) {
  return (
    <ThemeProvider theme={theme}>
      <SEO title="SoapyBalls - Eco Friendly Washing" />

      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Contact Us
          </Heading>
          <Text as="p" variant="heroSecondary">
            For any complaints, bulk orders or general feedback, please get
            in touch with me directly via email: gemma@soapyballs.store
          </Text>

          {/* <Link
            activeClass="active"
            to="pricing"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button variant="primary">Submit</Button>
          </Link> */}
          <Text>
            Press Back or <a href="/">Click here</a> to return back to the
            SoapyBalls home page
          </Text>
        </Box>
      </Container>
      <CookieConsent style={{ background: "#f6ae42" }}>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </ThemeProvider>
  );
}

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "110px", null, null, "130px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: [null, null, null, null, null, 7],
    },
  },
};
