import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/home.tsx"),
  route("register", "routes/auth/register.tsx"),
  route("program", "routes/program.tsx"),
  route("about-us", "routes/about.tsx"),
  route(`advertise`, `routes/adv.tsx`),
] satisfies RouteConfig;

//dadakdhalwpad
