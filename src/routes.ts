import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("./components/ThemeLayout/index.tsx", [
    index("./components/Home/index.tsx"),
    route("/*", "./components/CatchAll/index.tsx"),
  ]),
] satisfies RouteConfig;
