/** @jsx jsx */
import { jsx, Container, Box, Image } from "theme-ui";
import TextFeature from "components/text-feature";

import SoapNuts from "assets/soap-nuts.jpg";
import shapePattern from "assets/shape-pattern2.png";

const data = {
  subTitle: "SoapyBalls are Soap Nut shells",
  title: "How do I get the Soap from my SoapyBalls?",
  description:
    'Although we refer to them as "Balls" or "Nuts", its actually the shell of the Indian soap berry that produces the soap-like substance. Once picked and left to dry in the sun,these amazing shells contain a natural cleaning agent called saponin that produces an effect comparable to soap. Click below to see our guides on using SoapyBalls.',
  btnName: "Get Started",
  btnURL: "#",
};

export default function CoreFeature() {
  return (
    <section sx={{ variant: "section.coreFeature" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Image src={SoapNuts} width="650px" alt="soap nuts" />
        <Box sx={styles.shapeBox}>
          {/*<Image src={shapePattern} alt="Shape" />*/}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 0],
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: "inline-flex",
    position: "relative",
    mr: "auto",
    ml: ["auto", null, null, null, 7],
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ["none", "inline-block", "none", null, "inline-block"],
  },
};
