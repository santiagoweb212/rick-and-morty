import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/character/:id", element: <div>character</div> },
  { path: "/location", element: <div>location</div> },
  { path: "/location/:id", element: <div>location</div> },
  { path: "/ubication", element: <div>ubication</div> },
]);
export default router;
