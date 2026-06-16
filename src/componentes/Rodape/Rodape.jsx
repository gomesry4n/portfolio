import styles from "./Rodape.module.css";
// import{reactComponent as MarcaRegistrada} from '../../assets/marca_registrada.svg'

const Rodape = () => {
    return(
        <footer className={styles.rodape}>
            {/* <MarcaRegistrada/> */}
            Desenvolvido pelos alunos do 3º Ensino Medio do curso de DEV - Sesi/Senai
        </footer>
    )
}

export default Rodape