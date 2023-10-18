import Link from "next/link";

const Header = () => (
    <header>
        <div className="Logo">
            <img alt="logo" src="logo.svg" />
        </div>

        <div className="HeaderSide">
            <a target="_blank" href="https://www.olx.com.br/perfil/claudinei-corretor-de-imoveis-aguia-outlook-com-f36dd58f"><button>CENTRAL IMÓVEIS</button></a>
            <a href="https://www.instagram.com/claudineicorretordeimoveis/?utm_source=qr&r=nametag">INSTAGRAM</a>
            <a href="https://www.youtube.com/@corretorlisboas">YOUTUBE</a>
            
            <p className="Numero"><a href="https://wa.me/5538998783750">TELEFONE E WHATSAPP<br/><img className="Whatsapp" src="whatsapp.svg"/> (38) <span>9 9858-5326</span></a></p>
        </div>
    </header>
);

export default Header;