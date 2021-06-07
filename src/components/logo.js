/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { LogoLink } from "components/link";

export default function Logo({ src, ...rest }) {
  return (
    <LogoLink
      path="/"
      sx={{
        variant: "links.logo",
        display: "flex",
        cursor: "pointer",
        mr: 15,
      }}
      {...rest}
    ></LogoLink>
  );
}
