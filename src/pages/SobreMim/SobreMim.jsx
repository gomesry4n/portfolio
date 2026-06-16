import styles from "./SobreMim.module.css";
import PostModelo from "../../componentes/PostModelo/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import minhaFoto from "../../assets/minhafoto.jpeg";

const SobreMim = () => {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.titulo}>Olá! Eu sou Ryan Gomes,</h3>

      <img
        className={styles.minhaFoto}
        src={minhaFoto}
        alt="Foto do Ryan Gomes"
      />

      <p className={styles.texto}>
        estudante do 3º ano do Ensino Médio e do curso técnico de
        Desenvolvimento de Sistemas no SENAI. Desde cedo tenho muito interesse
        por tecnologia e gosto de entender como as coisas funcionam por trás das
        telas.
        <br />
        <br />
        Atualmente estou me dedicando ao aprendizado de programação e
        desenvolvimento web, criando projetos com HTML, CSS, JavaScript e React.
        Gosto de transformar ideias em algo visual e funcional, sempre buscando
        aprender novas técnicas e melhorar minhas habilidades.
        <br />
        <br />
        Além dos estudos, sou uma pessoa determinada e curiosa, que acredita que
        o conhecimento é a melhor forma de abrir portas para o futuro. Meu
        objetivo é continuar evoluindo como desenvolvedor, adquirir experiência
        na área e construir projetos que façam a diferença na vida das pessoas.
        <br />
        <br />
        Este espaço foi criado para compartilhar um pouco da minha trajetória,
        meus aprendizados e alguns dos trabalhos que desenvolvi ao longo dessa
        jornada.
      </p>
    </PostModelo>
  );
};

export default SobreMim;
