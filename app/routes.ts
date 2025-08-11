import { type RouteConfig, index ,route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("register","auth/register.tsx"),
    route("login","auth/login.tsx")
    ] satisfies RouteConfig;

//dadakdhalwpad
