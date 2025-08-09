import { type RouteConfig, index ,route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('about-us/abbas/school','routes/about.tsx'),
    route('search','routes/search.tsx'),
    route('contacts','routes/contact.tsx'),
   
    ] satisfies RouteConfig;
//dadakdhalwpad