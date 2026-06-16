import styles from "./Card.module.css";

const Card = ({ post }) => {
  return (
    <div className={styles.post}>
      <img
        className={styles.capa}
        src={`/assets/posts/${post.id}/capa.png`}
        alt={post.titulo}
      />
      <h2 className={styles.titulo}>{post.titulo}</h2>
      <button className={styles.botaoLer}>Saiba Mais</button>
    </div>
  );
};

export default Card;
