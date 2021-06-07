/** @jsx jsx */
import { jsx, NavLink as MenuLink, Link as A } from "theme-ui";
import NextLink from "next/link";

export function NavLink({ path, label, children, ...rest }) {
  return <h1>NavLink</h1>;
}

export function LogoLink({ path }) {
  return (
    <A
      href={path}
      sx={{
        fontFamily: "logo",
        color: "#ffffff",
        textDecoration: "none",
      }}
    >
      <h1>SoapyBalls</h1>
    </A>
  );
}

export function Link({ path, label, children, ...rest }) {
  return (
    <A {...rest} href={path}>
      {children || label}
    </A>
  );
}
