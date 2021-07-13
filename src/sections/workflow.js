/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import { Flex, Container, Grid, Box, Heading, Text } from "theme-ui";
import SectionHeader from "components/section-header";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import PatternBG from "assets/patternBG.png";
import ArrowOdd from "assets/arrowOdd.png";
import ArrowEven from "assets/arrowEven.png";

const guides = {
  laundry: [
    {
      id: 1,
      title: "Fill your ball bag",
      text: "Pop about 5 or 6 SoapyBalls (approx 10 half shells) into the supplied ball bag.",
    },
    {
      id: 2,
      title: "Activate your balls",
      text: "If you do not have a hot water setting on your washer then soak balls in a glass of warm water for 5 mins before",
    },
    {
      id: 3,
      title: "Magic SoapyBalls Time",
      text: "Throw your ball bag in and start the wash. When agitated in water, the soap berries release saponin, a natural cleaner!",
    },
    {
      id: 4,
      title: "After care",
      text: "Save the used shells, as they can be reused up to FOUR more times. Let them dry out naturally or place on radiator",
    },
  ],
  shower_gel: [
    {
      id: 1,
      title: "Boil you balls",
      text: "Add your Soap Nuts into your bag and then boil in 6 cups of water for around 40 minutes",
    },
    {
      id: 2,
      title: "Spice things up",
      text: "Add in the dried rosemary so it has chance to expel its antioxidants and minerals into the solution as it begins to boil",
    },
    {
      id: 3,
      title: "Froffing and foaming",
      text: "The solution begins to bubble and foam on the top, though don't let this boil over. Turn off the heat/gas and let it sit and settle until cool,",
    },
    {
      id: 4,
      title: "Bath time",
      text: "Hop in the shower and get your hair and skin drenched in your solution. Note, there isn't much (if any) foam produced while applying it but it still works a treat.",
    },
  ],
  cleaning: [
    {
      id: 1,
      title: "Boil balls",
      text: "Add your 15 Soap Nut shells to your bag and then boil in 0.5 litre of water for around 10 minutes",
    },
    {
      id: 2,
      title: "Cool down",
      text: "Leave solution to cool to room temperature or place in fridge.",
    },
    {
      id: 3,
      title: "Add vinegar",
      text: "Add 100ml of white viniger to your solution along with 10ml of tea tree oil. Lavendar, orange, rose are also great options instead.",
    },
    {
      id: 4,
      title: "Clean and shine",
      text: "Transfer your solution into a empty spray bottle and replace your chemical cleaning solutions with this eco friendly alternative.",
    },
  ],
};

export default function WorkFlow() {
  const { laundry, shower_gel, cleaning } = guides;
  const [state, setState] = useState({
    active: "laundry",
    instructions: laundry,
  });

  const handleInstructions = (guide) => {
    if (guide == "laundry") {
      setState({ active: "laundry", instructions: laundry });
    } else if (guide == "shower_gel") {
      setState({ active: "shower_gel", instructions: shower_gel });
    } else if (guide == "cleaning") {
      setState({ active: "cleaning", instructions: cleaning });
    }
  };

  return (
    <section id="how-to" sx={styles.workflow}>
      <Container>
        <SectionHeader
          slogan="USE YOUR BALLS AND SAVE THE PLANET"
          isWhite={true}
          title="SoapyBall Guides & Instructions"
        />

        <Flex sx={styles.buttonGroup}>
          <Box sx={styles.buttonGroupInner}>
            <button
              className={state.active == "laundry" ? "active" : ""}
              type="button"
              aria-label="Monthly"
              onClick={() => handleInstructions("laundry")}
            >
              Laundry
            </button>
            <button
              className={state.active == "shower_gel" ? "active" : ""}
              type="button"
              aria-label="Shower Gel"
              onClick={() => handleInstructions("shower_gel")}
            >
              Shower Gel
            </button>
            <button
              className={state.active == "cleaning" ? "active" : ""}
              type="button"
              aria-label="Cleaning"
              onClick={() => handleInstructions("cleaning")}
            >
              Cleaning
            </button>
          </Box>
        </Flex>
        <Grid sx={styles.grid}>
          {state.instructions.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: "secondary",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      "35px 0",
      null,
      "45px 30px",
      null,
      "50px 25px",
      null,
      null,
      "50px 65px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
  card: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    textAlign: ["center", null, "left"],
    width: ["100%", "80%", "100%"],
    mx: ["auto"],
    px: [4, null, null, 0],
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "center center",
      width: 215,
      height: 60,
      "@media screen and (max-width:1220px)": {
        display: "none",
      },
    },
    "&:nth-of-type(2n-1)::before": {
      backgroundImage: `url(${ArrowOdd})`,
      colors: {
        primary: "#fff",
      },
    },
    "&:nth-of-type(2n)::before": {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    "&:last-child::before": {
      display: "none",
    },
  },

  iconBox: {
    width: ["50px", null, "60px", null, null, "70px"],
    height: ["50px", null, "60px", null, null, "70px"],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    mb: [5, null, null, null, null, 6],
    mx: ["auto", null, 0],
    fontSize: [6, null, 7, null, null, "30px"],
    fontWeight: 700,
    justifyContent: "center",
    color: "#234582",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: "white",
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: "white",
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
  buttonGroup: {
    justifyContent: "center",
    mb: "7",
    mt: ["-15px", "-35px"],
    position: "relative",
    zIndex: 2,
  },
  buttonGroupInner: {
    display: "flex",
    padding: "7px",
    margin: "0 auto",
    borderRadius: "5px",
    backgroundColor: "#F7F8FB",
    button: {
      border: 0,
      padding: ["15px 20px", "15px 27px"],
      borderRadius: "5px",
      color: "text",
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: "transparent",
      cursor: "pointer",
      fontFamily: "body",
      letterSpacing: "-0.24px",
      transition: "all 0.3s",
      "&.active": {
        color: "#0f2137",
        backgroundColor: "#ffffff",
        boxShadow: "0 3px 4px rgba(38, 78, 118, 0.1)",
      },
      "&:focus": {
        outline: 0,
      },
    },
  },
};
