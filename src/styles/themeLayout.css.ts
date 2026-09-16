import { tokens } from "@capg/capg-ui-lib";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  margin: 0,
  padding: 0,
  border: "none",
  outline: "none",
  fontWeight: 400,
  lineHeight: 1.5,
  color: tokens.text.primary,
  background: "transparent",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "16px",
  boxSizing: "border-box",
});
