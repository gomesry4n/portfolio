import { useParams } from "react-router";
import PostModelo from "../../componentes/PostModelo/PostModelo";
import Posts from "../../json/posts.json";
import ReactMarkdown from "react-markdown";
import "./Post.css";
import NaoEncontrada from "../NaoEncontrada/NaoEncontrada";
import Banner from "../../componentes/Banner/Banner";
import ButtonPrincipal from "../../componentes/ButtonPrincipal/ButtonPrincipal";

const Post = () => {
  const parametros = useParams();

  const post = Posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />;
  }

  return (
    <div>
      <Banner />
      <PostModelo
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>
      </PostModelo>
    </div>
  );
};

export default Post;
