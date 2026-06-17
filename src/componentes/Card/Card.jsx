import { Link } from "react-router";
import styles from "./Card.module.css";
import ButtonPrincipal from "../ButtonPrincipal/ButtonPrincipal";

const Card = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt={post.titulo}
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <ButtonPrincipal>Ler Mais</ButtonPrincipal>
      </div>
    </Link>
  );
};

export default Card;
