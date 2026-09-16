import { tokens } from "@capg/capg-ui-lib";
import { style } from "@vanilla-extract/css";
import { fadeIn } from "../../styles/keyframes.css";

export const rootClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.25rem",
  width: "100%",
  height: "100%",
  animation: `${fadeIn} 0.2s ease-out`,
});

export const notFoundIconClass = style({
  color: tokens.primary.default,
  fontSize: "7rem",
  marginBottom: "0.75rem",
});

export const titleClass = style({
  fontSize: "1.5rem",
  fontWeight: 600,
});

export const buttonClass = style({
  marginTop: "0.75rem",
});

export const homeIconClass = style({
  color: tokens.primary.default,
  fontSize: "1.5rem",
});
