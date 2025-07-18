import LayoutDefault from "../layout/LayoutDefault";
import Country from "../pages/Country";
import Home from "../pages/Home";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/country",
        element: <Country />,
      },
    ],
  },
];
