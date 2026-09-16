import { ThemeProvider } from "@capg/capg-ui-lib";
import type { HTMLAttributes } from "react";
import { Outlet } from "react-router";
import { rootClass } from "./styles.css";

export type LayoutProps = Omit<HTMLAttributes<HTMLDivElement>, "className">;

const ThemeLayout = ({ ...rest }: LayoutProps) => {
  return (
    <ThemeProvider {...rest} role="presentation" className={rootClass}>
      <Outlet />
    </ThemeProvider>
  );
};

export default ThemeLayout;
