import Head from 'next/head';
import Header from '../components/Header.js';
import Services from '../components/Service.js';
import { Analytics } from '@vercel/analytics/react';

function HomePage() {
    return (
        <div>
            <Head>
                <meta charSet='UTF-8' />
                <meta name="robots" content='index, follow' />
                <meta name='description' content='Deseja Alugar, uma Avaliação Juridica, ou administração de seu imóvel? Compre e venda imóveis Rurais e Urbanos com facilidade. Fazendas, Chácaras, Sítios, Lotes ou Casas.'></meta>
                <meta name='author' content=''></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <title>Corretor de Imóveis Águia</title>
            </Head> 

            <Header />

            <main>
                <section id='PageOne'>
                    <div className="Banner">
                        <div className="TextBanner">
                            <div id='Texto'><h2>Aluguel, Avaliação, Administração</h2><br/>Compra e venda de fazendas, chácaras, sítios, lotes e casas. Tudo resolvido com um botão.<br/></div>
                            <a href="https://wa.me/5538998783750"><button className="Button">CONVERSAR COM O CORRETOR</button></a>
                        </div>
                    </div>
                </section>

                <section id='PageTwo'>

                    <Services />

                    <div className='AllBrazil'>
                        <p>Atendimento em todo o Brasil através de agendamento</p>
                    </div>

                    <div className='MainPageContact'>
                        <a href="https://wa.me/5538998783750" className="Numero">
                            <button>TELEFONE E WHATSAPP<br/><span><img className="Whatsapp" src="whatsapp.svg" alt='LogoWhatsapp'/> (38) 9 9858-5326</span></button>
                        </a>

                        <a href="https://www.olx.com.br/perfil/claudinei-corretor-de-imoveis-aguia-outlook-com-f36dd58f" className="Olx">
                            <button>VER TODOS OS IMÓVEIS<br/><span><img className="OlxLogo" src="olx.svg" alt='LogoOlx'/>Claudinei Corretor</span></button>
                        </a>
                    </div>
                        

                        
                </section>

                <section id='PageTree'>
                    <p>Precisa saber o valor de um imóvel, mas não sabe por onde começar? Deseja obter lucro alugando a sua propriedade? Nós cuidamos disso para você! Basta relaxar e aguardar enquanto o dinheiro entra na sua conta. Agende um horário com nossos profissionais agora mesmo.</p>
                    <a href='https://wa.me/5538998783750'>
                        <button>Entrar em Contato</button>
                    </a>
                </section>

                <section id='PageFour'>
                    
                    
                </section>

                <Analytics />

                
            </main> 
        </div>
    )
}

export default HomePage;
