import styles from "./NaoEncontrada.module.css";
import erro404 from "../../assets/erro_404.png";
import ButtonPrincipal from "../../componentes/ButtonPrincipal/ButtonPrincipal";

const NaoEncontrada = () => {
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>

        <h1 className={styles.titulo}>Ops, Página não encontrada!</h1>

        <p className={styles.paragrafo}>
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>

        <div className={styles.botaoContainer}>
          {/* <ButtonPrincipal lg={true}>Voltar </ButtonPrincipal> */}
          <button>
            <a href="/">Voltar</a>
          </button>
        </div>

        <img
          className={styles.imagemCachorro}
          src={erro404}
          alt="cachorro de óculos Vestido como Humano"
        />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
};

export default NaoEncontrada;
