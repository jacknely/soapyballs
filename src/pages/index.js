import React from "react";
import { ThemeProvider } from "theme-ui";
import { client } from "../utils/shopify.js";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "../sections/banner";
import KeyFeature from "../sections/key-feature";
import ServiceSection from "../sections/service-section";
import Feature from "../sections/feature";
import CoreFeature from "../sections/core-feature";
import WorkFlow from "../sections/workflow";
import Package from "../sections/package";
import TestimonialCard from "../sections/testimonial";
import CookieConsent from "react-cookie-consent";

export default function IndexPage({ products }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="SoapyBalls - Eco Friendly Washing" />
        <Banner />
        <KeyFeature />
        <ServiceSection />
        <Feature />
        <CoreFeature />
        <WorkFlow />
        <Package products={products} />
        <TestimonialCard />
        <CookieConsent style={{ background: "#f6ae42" }}>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </Layout>
    </ThemeProvider>
  );
}

export async function getServerSideProps() {
  const products = [{
        "id": 4727217979452,
        "product_type": "",
        "tags": [
          "no-collections"
        ],
        "variants": [
          {
            "id": 32725892890684,
            "title": "Sample",
            "grams": 0,
            "product_id": 4727217979452,
          }
        ],
        "images": [],
        "options": [
          {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
          }
        ]
      }]
  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}
