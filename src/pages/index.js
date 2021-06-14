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
import TeamSection from "../sections/team-section";
import TestimonialCard from "../sections/testimonial";

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
        <TeamSection />
        <TestimonialCard />
      </Layout>
    </ThemeProvider>
  );
}

// Server Side Rendering
export async function getServerSideProps() {
  // Fetch data from external API
  const products = await client.product.fetchAll();
  // Pass data to the page via props
  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}
