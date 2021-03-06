/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from "theme-ui";
import { Link } from "components/link";
import data from "./footer.data";
import Logo from "components/logo";

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Logo />
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map((item, i) => (
                <Link
                  path={item.path}
                  key={i}
                  label={item.label}
                  sx={styles.footer.link}
                />
              ))}
            </nav>
          </Box>
          <Text sx={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()} SoapyBalls
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "background_secondary",
      display: "flex",
      pt: [7, null, 8],
      pb: [null, null, "80px"],
      textAlign: "center",
      flexDirection: "column",
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },

    link: {
      fontSize: [1, "15px"],
      color: "background_secondary",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary",
      },
    },
    copyright: {
      color: "background_secondary",
      fontSize: [1, "15px"],
      width: "100%",
    },
  },
};
