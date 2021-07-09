/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";

import Eco from "assets/Label.svg";
import Love from "assets/Love.png";
import Chem from "assets/no_chemical.png";
import Leave from "assets/Leaves.png";

const data = [
  {
    id: 1,
    imgSrc: Eco,
    altText: "Biodegradable",
    title: "Biodegradable",
    text:
      "Our SoapyBalls are 100% compostable and used many times for washing",
  },
  {
    id: 2,
    imgSrc: Love,
    altText: "All Natural",
    title: "All Natural",
    text:
      "Nuts come from India, where they used as a natural detergent for many years.",
  },
  {
    id: 3,
    imgSrc: Chem,
    altText: "Hypoallergenic",
    title: "Hypoallergenic",
    text:
      "No skin or respiratory irritation and non-toxic - alternative to chemical cleaning agents.",
  },
  {
    id: 4,
    imgSrc: Leave,
    altText: "Countless Uses",
    title: "Countless Uses",
    text:
      "Extremely reuseable. Each berry can be used up to 6 times before it's spent",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader slogan="SoapyBalls are great" title="Benefits" />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
