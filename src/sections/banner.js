/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import Nut from "assets/soap-nut.png";
import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/shape-right.png";
import { Link } from "react-scroll";
import * as ga from "../utils/ga";

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.imageBox}>
          <Image
            sx={styles.banner.imageBox.img}
            src={Nut}
            alt="Thumbnail"
          />
        </Box>

        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            A Natural Alternative to Laundry Detergent & Shower Gel
          </Heading>
          <Text as="p" variant="heroSecondary">
            SoapyBalls grow naturally! Traditional detergents contain
            harmful chemicals such as Bleach, Sulphates, Benzens. <br></br>
            Join the revolution today!
          </Text>

          <Link
            activeClass="active"
            to="pricing"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {
              ga.event({
                action: "buy",
                params: {
                  location: "top",
                },
              });
            }}
          >
            <Button variant="primary">Buy</Button>
          </Link>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "110px", null, null, "130px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 40,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "center left",
      backgroundSize: "28%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "center right",
      backgroundSize: "28%",
    },
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
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      img: {
        position: "relative",
        height: 140,
        width: 120,
        marginBottom: 20,
      },
    },
  },
};
