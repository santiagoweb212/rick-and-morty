import { Outlet } from "react-router-dom";
import MainNavbar from "../components/navbar/MainNavbar";

const Public = () => {
  return <div className="container mx-auto min-h-screen ">
  <MainNavbar/>
  <main>
    <Outlet/>
  </main>
  </div >
};

export default Public;
