import { createBrowserRouter } from "react-router-dom";
import Public from "../Layout/Public";
import Home from "../page/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Public />,
    children: [{ index: true, element: <Home /> }],
  },
]);
export default router;
