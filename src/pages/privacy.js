import React from "react";
import { ThemeProvider, Button } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
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
            Privacy Policy
          </Heading>
          <Text as="p" variant="secondary">
            Press Back or <a href="/">Click here</a> to return back to the
            SoapyBalls home page
          </Text>
          <Heading as="h2" variant="secondary">
            How we get the personal information and why we have it
          </Heading>
          <Text as="p">
            We use the information that you have given us to give you the
            best customer experience and delivery your product We may share
            this information with Shopify to enable fulfilment of your
            order. Under the General Data Protection Regulation (GDPR), the
            lawful bases we rely on are your consent for processing this
            information. You are able to remove your consent at any time.
            You can do this by contacting us.
          </Text>
          <Heading as="h2" variant="secondary">
            How we store your personal information
          </Heading>
          <Text as="p">
            Your information is securely stored. We keep this information
            for years. We will then dispose your information by wiping from
            our digital systems.
          </Text>
          <Heading as="h2" variant="secondary">
            Your data protection rights
          </Heading>
          <Text as="p">
            Under data protection law, you have rights including:
          </Text>
          <Text variant="list">
            <ul>
              <li>
                Your right of access - You have the right to ask us for
                copies of your personal information.
              </li>
              <li>
                Your right to rectification - You have the right to ask us
                to rectify personal information you think is inaccurate.
                You also have the right to ask us to complete information
                you think is incomplete.
              </li>
              <li>
                Your right to erasure - You have the right to ask us to
                erase your personal information in certain circumstances.
              </li>
              Your right to restriction of processing - You have the right
              to ask us to restrict the processing of your personal
              information in certain circumstances.
              <li>
                Your right to object to processing - You have the the right
                to object to the processing of your personal information in
                certain circumstances.
              </li>
              <li>
                Your right to data portability - You have the right to ask
                that we transfer the personal information you gave us to
                another organisation, or to you, in certain circumstances.
              </li>
            </ul>
          </Text>
          <Text>
            You are not required to pay any charge for exercising your
            rights. If you make a request, we have one month to respond to
            you. Please contact us at by email if you wish to make a
            request.
          </Text>

          <Heading as="h2" variant="secondary">
            How to complain
          </Heading>
          <Text>
            If you have any concerns about our use of your personal
            information, you can make a complaint to us at
            admin@soapyballs.com. You can also complain to the ICO if you
            are unhappy with how we have used your data. The ICO’s address:
            Information Commissioner’s Office, Wycliffe House, Water Lane,
            Wilmslow, Cheshire
          </Text>

          <Text as="p" variant="secondary">
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
