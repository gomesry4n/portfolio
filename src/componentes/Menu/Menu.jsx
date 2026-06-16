import { Link, useLocation } from "react-router"
import styles from "./Menu.module.css"
import MenuLink from "../MenuLink/MenuLink";

const Menu = () =>{

    const localizacao = useLocation();

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink  to ="/">
                    Inicio
                </MenuLink>
                <MenuLink to="/sobremim" >
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )

}
export default Menu