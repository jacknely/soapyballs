/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";

import GlobalWarming from "assets/global-warming.png";
import NoPlastic from "assets/no-plastics.png";
import Sustainable from "assets/sustainable-world.png";
import Support from "assets/Forest.png";

import Factory from "assets/feature/factory_icon.png";

const data = [
  {
    id: 1,
    imgSrc: GlobalWarming,
    altText: "Great For The Planet",
    title: "Great For The Planet",
    text:
      "Growns in hard environmental conditions it also protects its native areas from the risk of erosion. It is incredibly resilient to diseases and doesn’t need any fertilizer or chemical pesticides..",
  },
  {
    id: 2,
    imgSrc: NoPlastic,
    altText: "Zero Plastic Packaging",
    title: "Zero Plastic Packaging",
    text:
      "At SoapyBalls, we are 100% committed to sustainablilty. All our packaging can be recycled and our in-house processess are carbon negative!",
  },
  {
    id: 3,
    imgSrc: Sustainable,
    altText: "Compostable",
    title: "Compostable",
    text:
      "Our SoapyBalls are 100% biodegradable, meaning you can literally just chuck them in your compost when your done, helping to cut down on landfill with every load.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Sustainable",
    title: "Sustainable",
    text:
      "Naturally & sustainably sourced SoapyBalls are an organic, allergy-friendly, economical and effective alternative to the common laundry detergent.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="Join the revolution"
          title="Great for you, me, and the planet!"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
