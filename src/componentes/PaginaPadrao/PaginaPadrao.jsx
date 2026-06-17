import Banner from "../Banner/Banner";
import { Outlet } from "react-router";

const PaginaPadrao = () => {
  return (
    <div>
      <Banner />
      <Outlet />
    </div>
  );
};

export default PaginaPadrao;
