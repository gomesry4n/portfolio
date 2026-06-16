import styles from "./Inicio.module.css";
import Card from "../../componentes/Card/Card";
import Posts from "../../json/posts.json";

const Inicio = () => {
  return (
    <main>
      <ul className={styles.post}>
        {Posts.map((post) => (
          <li key={post.id}>
            <Card post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Inicio;
