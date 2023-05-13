import Home from "../pages/Home";
import WhatIDo from "../pages/WhatIDo/index";
import AboutMe from "../pages/AboutMe/index";
import Resume from "../pages/Resume";
import Testimonial from "../pages/Testimonial";
import Contact from "../pages/Contact";
import AppLayout from "../layout/AppLayout";

export const routerConfig = [
  {
    element: <AppLayout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },

      {
        element: <AboutMe />,
        path: "/aboutme",
      },
      {
        element: <WhatIDo />,
        path: "/whatido",
      },
      {
        element: <Resume />,
        path: "/resume",
      },

      {
        element: <Testimonial />,
        path: "/testimonial",
      },
      {
        element: <Contact />,
        path: "/contact",
      },
    ],
  },
];
