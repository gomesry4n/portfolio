import styles from "./PaginaPadrao.module.css";
import Banner from "../Baner/Banner";
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
