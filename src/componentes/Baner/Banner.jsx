import styles from "./Banner.module.css"
import minhaFoto from "../../assets/minhafoto.jpeg"
import circuloColorido from '../../assets/circulo_colorido.png'

const Banner = () => {
    return(
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Olá, Meu nome é Ryan, Sou estudante da Escola SESI de Pederneiras e atualmente estou fazendo o curso técnico em Desenvolvimento de Sistemas. Estou aprendendo sobre programação, lógica, banco de dados e outras ferramentas importantes para criar e manter softwares.
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido} />
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto} 
                    alt="minha foto de perfil" />
            </div>
        </div>
    )
}

export default Banner