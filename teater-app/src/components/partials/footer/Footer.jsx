import Style from './footer.module.scss'
import FacebookLogo from '../../../assets/images/Facebook.svg'
import InstagramLogo from '../../../assets/images/Instagram.svg'
import LinkedinLogo from '../../../assets/images/Linkedin.svg'


export const Footer = () => {

    return (
        <footer className={Style.footer}>
            <article className={Style.gridarticle}>
                <div>
                    <h3>ADRESSE</h3>
                    <p>Det utrolige teater</p>
                    <p>Havnegade 901</p>
                    <p>9000 Aalborg</p>
                    <p>EAN 5798003279845</p>
                    <p>CVR 1001 0012</p>
                    <br />
                    <p>Find vej på kort</p>
                </div>
                <section>
                    <div>
                        <h3>BILLETSERVICE</h3>
                        <p>Se åbningstider</p>
                        <p>Billettelefon: +45 96 31 80 80</p>
                        <p>billet@dut.dk</p>
                    </div>
                    <div>
                        <h3>ADMINISTRATION</h3>
                        <p>Telefon: +45 96 31 80 90</p>
                        <p>adm@dut.dk</p>
                    </div>
                </section>
                <div>
                    <h3>PRAKTISK INFO</h3>
                    <p>Kontakt</p>
                    <p>Kom trygt i teatret</p>
                    <p>Presseside</p>
                    <p>Skoleforestillinger</p>
                    <p>Teatercaféen</p>
                    <p>Handelsbetingelser</p>
                </div>
            </article>
            <div className={Style.iconcontainer}>
                <img src={FacebookLogo} alt="facebook" />
                <img src={InstagramLogo} alt="instagram" />
                <img src={LinkedinLogo} alt="linkedin" />
            </div>
        </footer>
    )
}