import { tokens } from "@capg/capg-ui-lib";
import { style } from "@vanilla-extract/css";

export const rootClass = style({
  position: "absolute",
  width: "100vw",
  height: "100vh",
  background: tokens.surface.default,
  overflowY: "auto",
});
