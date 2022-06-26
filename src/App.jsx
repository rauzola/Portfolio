import './App.css'
import './main.js'

function App() {
  return (
    <>

      {/* <!-- ====SIDEBAR==== --> */}
      <div className="nav_toggle" id="nav-toggle">
        <i className="uil uil-bars"></i>
      </div>
      <aside className="sidebar" id="sidebar">
        <nav className="nav">
          <div className="nav_logo">
            <a href="./index.html" className="nav_logo-text">R</a>
          </div>
          <div className="nav_menu">
            <div className="menu">
              <ul className="nav_list">
                <li className="nav_item">
                  <a href="#home" className="nav_link active-link">Home</a>
                </li>
                <li className="nav_item">
                  <a href="#about" className="nav_link">About</a>
                </li>
                <li className="nav_item">
                  <a href="#skills" className="nav_link">Skills</a>
                </li>
                <li className="nav_item">
                  <a href="#work" className="nav_link">Work</a>
                </li>
                <li className="nav_item">
                  <a href="#services" className="nav_link">Services</a>
                </li>
                <li className="nav_item">
                  <a href="#contact" className="nav_link">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="btn_share">
            <i className="uil uil-share-alt social_share"></i>
          </div>

          <div className="nav_close" id="nav-close">
            <i className="uil uil-times"></i>
          </div>
        </nav>
      </aside>
      {/* <!-- ====FIM SIDEBAR==== --> */}

      <main className="main">

        {/* <!-- =========== Home ========  --> */}
        <section className="home" id="home">
          <div className="home_container container grid">
            <div className="home_social">
              <span className="home_social-follow">Me Segue</span>
              <div className="home_social-links">
                <a href="https://www.instagram.com/raul_sigoli/" target="_blank" className="home_social-link">
                  <i className="uil uil-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/raul-sigoli-137bb4173/" target="_blank" className="home_social-link">
                  <i className="uil uil-linkedin"></i></a>
                <a href="https://github.com/rauzola" target="_blank" className="home_social-link">
                  <i className="uil uil-github"></i>
                </a>
              </div>
            </div>
            {/* <!-- IMAGEM ===================================================================== --> */}
            <img src="https://portfolio-topaz-tau.vercel.app/assets/Curriculo%20Desenvolvedor%20Junior%20.png" alt="" className="home_img" />

            {/* <!-- EU SOU O CRIADOR============================================================ --> */}
            <div className="home_data">
              <h1 className="home_title">Olá, Eu sou o Raul</h1>
              <h3 className="home_subtitle">Desenvolvedor Front-end</h3>
              <p className="home_description">Possuo Nível Júnior em Desenvolvimento Frontend, tenho conhecimento considerável em várias ferramentas para garantir a qualidade do meu trabalho.
              </p>
              <a href="#about" className="button"><i className="uil uil-user button_icon"></i>
                Mais Sobre Mim
              </a>
            </div>

            {/* <!-- Info de Contatos=========================================================== --> */}
            <div className="my_info">
              {/* <!-- Contato WhatsApp========================================================= --> */}
              <a href="https://wa.me/5544991658351" className="info-contact" target="_blank">
                <div className="info_item ">
                  <i className="uil uil-whatsapp info_icon"></i>

                  <div>
                    <h3 className="info_title">WhatsApp</h3>
                    <span className="info_subtitle">(44) 9 99165-8351</span>
                  </div>
                </div>
              </a>

              {/* <!-- Contato Telegram========================================================= --> */}
              <a href="https://t.me/raul_sigoli" className="info-contact" target="_blank">
                <div className="info_item">
                  <i className="uil uil-telegram-alt info_icon"></i>

                  <div>
                    <h3 className="info_title">Telegram</h3>
                    <span className="info_subtitle">(44) 9 99165-8351</span>
                  </div>
                </div>
              </a>

              {/* <!-- Contato E-mail========================================================== --> */}
              <a href="mailto:raul_sigoli@hotmail.com" className="info-contact" target="_blank">
                <div className="info_item">
                  <i className="uil uil-envelope-edit info_icon "></i>

                  <div>
                    <h3 className="info_title">E-mail</h3>
                    <span className="info_subtitle">raul_sigoli@hotmail.com</span>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </section>
        {/* <!-- =========== FIM Home ========  --> */}


        {/* <!-- =========== About ========  --> */}
        <section className="about section" id="about">
          <h2 data-heading="Minha Introdução" className="section_title">Sobre Mim</h2>
          <div className="about_container container grid">

            {/* <!-- IMAGEM ===================================================================== --> */}
            <img src="https://portfolio-topaz-tau.vercel.app/assets/sobre%20mim.png" alt="" className="about_img" />
            <div className="about_data">
              <h3 className="about_heading">
                Olá, Eu sou o <font color="#e1094a">Raul Sigoli</font>, Natural do PR
              </h3>
              <p className="about_description">
                Sou entusiasta da tecnologia, apaixonado pelo futuro da computação e pelo futuro do metaverso. <br />
                Tenho muito afeto pelas pessoas, pois sem elas não existiriam a tecnologia que temos hoje.
              </p>

              {/* <!-- About Info ============================================================ --> */}
              <div className="about_info grid">

                {/* <!-- Tempo de Experiencia ============================================================ --> */}
                <div className="about_box">
                  <i className="uil uil-award about_icon"></i>
                  <h3 className="about_title">Experiências</h3>
                  <span className="about_subtitle">+1 Ano</span>
                </div>

                {/* <!-- Quantidade de Projetos ============================================================ --> */}
                <div className="about_box">
                  <i className="uil uil-suitcase-alt about_icon"></i>
                  <h3 className="about_title">Completo</h3>
                  <span className="about_subtitle">04 + Projetos</span>
                </div>

                {/* <!-- Horario de Suporte ============================================================ --> */}
                <div className="about_box">
                  <i className="uil uil-headphones-alt about_icon"></i>
                  <h3 className="about_title">Suporte</h3>
                  <span className="about_subtitle">Online 24/7</span>
                </div>
              </div>

              {/* <!-- Contate-me ============================================================ --> */}
              <a href="#contact" className="button">
                <i className="uil uil-navigator button_icon"></i>
                Contate-me
              </a>
            </div>
          </div>
        </section>
        {/* <!-- =========== FIM About ========  --> */}


        {/* <!-- =========== Qualification ========  --> */}
        <section className="qualification section">
          <h2 data-heading="Minha Jornada" className="section_title">Qualificação</h2>

          <div className="qualification_container container grid">

            <div className="education">
              <h3 className="qualification_title">
                <i className="uil uil-graduation-cap"></i>
                Education
              </h3>

              <div className="timeline">

                <div className="timeline_item">
                  <div className="circle_dot"></div>
                  <h3 className="timeline_title">Universidade Pitágoras Unopar Anhanguera</h3>
                  <p className="timeline_text">Engenharia de Software</p>
                  <span className="timeline_date"> <i className="uil uil-calendar-alt"></i>
                    2021 - Presente
                  </span>
                </div>


                <div className="timeline_item">
                  <div className="circle_dot"></div>
                  <h3 className="timeline_title">FullStack JavaScript</h3>
                  <p className="timeline_text">Onebitcode</p>
                  <span className="timeline_date"> <i className="uil uil-calendar-alt"></i>
                    2022 - Presente
                  </span>
                </div>


                <div className="timeline_item">
                  <div className="circle_dot"></div>
                  <h3 className="timeline_title">Análise de dados com Python</h3>
                  <p className="timeline_text">Universidade Norte do Paraná</p>
                  <span className="timeline_date"> <i className="uil uil-calendar-alt"></i>
                    2022 - 2022
                  </span>
                </div>

                <div className="timeline_item">
                  <div className="circle_dot"></div>
                  <h3 className="timeline_title">Trilha Conectar</h3>
                  <p className="timeline_text">Rocketseat</p>
                  <span className="timeline_date"> <i className="uil uil-calendar-alt"></i>
                    2022 - 2022
                  </span>
                </div>


                <div className="timeline_item">
                  <div className="circle_dot"></div>
                  <h3 className="timeline_title">Linguagem de Programação Python - Basico </h3>
                  <p className="timeline_text">Fundação Bradesco</p>
                  <span className="timeline_date"> <i className="uil uil-calendar-alt"></i>
                    2022 - 2022
                  </span>
                </div>

                <div className="timeline_item">
                  <div className="circle_dot"></div>
                  <h3 className="timeline_title">Coach e Liderança</h3>
                  <p className="timeline_text">Universidade Norte do Paraná</p>
                  <span className="timeline_date"> <i className="uil uil-calendar-alt"></i>
                    2021 - 2021
                  </span>
                </div>

                <div className="timeline_item">
                  <div className="circle_dot"></div>
                  <h3 className="timeline_title">Gestão de Metas e Indicadores de Performace</h3>
                  <p className="timeline_text">Universidade Norte do Paraná</p>
                  <span className="timeline_date"> <i className="uil uil-calendar-alt"></i>
                    2021 - 2021
                  </span>
                </div>

              </div>

            </div>

            <div className="experience">
              <h3 className="qualification_title">
                <i className="uil uil-suitcase-alt"></i>
                Experience
              </h3>

              <div className="timeline">

                <div className="timeline_item">
                  <div className="circle_dot"></div>
                  <h3 className="timeline_title">Nome Projeto Ou Empresa</h3>
                  <p className="timeline_text">descrição do projeto ou empresa</p>
                  <span className="timeline_date"> <i className="uil uil-calendar-alt"></i>
                    2021 - Present
                  </span>
                </div>

                <div className="timeline_item">
                  <div className="circle_dot"></div>
                  <h3 className="timeline_title">Nome Projeto Ou Empresa</h3>
                  <p className="timeline_text">descrição do projeto ou empresa</p>
                  <span className="timeline_date"> <i className="uil uil-calendar-alt"></i>
                    2021 - Present
                  </span>
                </div>

                <div className="timeline_item">
                  <div className="circle_dot"></div>
                  <h3 className="timeline_title">Nome Projeto Ou Empresa</h3>
                  <p className="timeline_text">descrição do projeto ou empresa</p>
                  <span className="timeline_date"> <i className="uil uil-calendar-alt"></i>
                    2021 - Present
                  </span>
                </div>

              </div>

            </div>

          </div>
        </section>
        {/* <!-- =========== FIM Qualification ========  --> */}

        {/* <!-- =========== Work ========  --> */}
        <section className="work section" id="work">
          <h2 data-heading="Meu Portfólio" className="section_title">Projetos Recentes</h2>
          <div className="work_filters">
            <span className="work_item active-work" data-filter="all">Todos</span>
            <span className="work_item" data-filter=".web">Web</span>
            <span className="work_item" data-filter=".backend">Backend</span>
            <span className="work_item" data-filter=".mobile">Mobile</span>
          </div>

          <div className="work_container container grid">


            {/* <!-- PROJETOS 1 --> */}
            <div className="work_card mix web">
              <img src="https://portfolio-topaz-tau.vercel.app/assets/mockupPortfolio.png" alt="" className="work_img" />
              <h3 className="work_title">Portfolio </h3>
              <span className="work_button">Demo
                <i className="uil uil-arrow-right work_button-icon"></i>
              </span>
              <div className="portfolio_item-details">
                <h3 className="details_title">Projeto meu Portfolio</h3>
                <p className="details_description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus maiores
                  exercitationem numquam.</p>
                <ul className="details_info">
                  <li>Criado - <span>19 Jun 2022</span></li>
                  <li>Tecnologias - <span>html css javascript</span></li>
                  <li>Função - <span>FrontEnd</span></li>
                  <li>Visão - <span><a
                    href="https://portfolio-topaz-tau.vercel.app/">https://portfolio-topaz-tau.vercel.app/</a></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- PROJETOS 2 --> */}
            <div className="work_card mix web">
              <img src="https://portfolio-topaz-tau.vercel.app/assets/em%20breve.webp" alt="" className="work_img" />
              <h3 className="work_title">Site Cabelereiro</h3>
              <span className="work_button">Demo
                <i className="uil uil-arrow-right work_button-icon"></i>
              </span>
              <div className="portfolio_item-details">
                <h3 className="details_title">Serviço feito para um salão</h3>
                <p className="details_description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus maiores
                  exercitationem numquam.</p>
                <ul className="details_info">
                  <li>Criado - <span>19 Jun 2022</span></li>
                  <li>Tecnologias - <span>html css javascript</span></li>
                  <li>Função - <span>FrontEnd</span></li>
                  <li>Visão - <span><a
                    href="https://site-responsive-modelo-01.vercel.app/">https://site-responsive-modelo-01.vercel.app/</a></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- PROJETOS 3 --> */}
            <div className="work_card mix web">
              <img src="https://portfolio-topaz-tau.vercel.app/assets/em%20breve.webp" alt="" className="work_img" />
              <h3 className="work_title">Quest Game</h3>
              <span className="work_button">Demo
                <i className="uil uil-arrow-right work_button-icon"></i>
              </span>
              <div className="portfolio_item-details">
                <h3 className="details_title">Jogo de adivinhação de futuro</h3>
                <p className="details_description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus maiores
                  exercitationem numquam.</p>
                <ul className="details_info">
                  <li>Criado - <span>19 Jun 2022</span></li>
                  <li>Tecnologias - <span>html css javascript</span></li>
                  <li>Função - <span>FrontEnd</span></li>
                  <li>Visão - <span><a
                    href="http://question-game-three.vercel.app/">http://question-game-three.vercel.app/</a></span></li>
                </ul>
              </div>
            </div>

            {/* <!-- PROJETOS 4 --> */}
            <div className="work_card mix web">
              <img src="https://portfolio-topaz-tau.vercel.app/assets/em%20breve.webp" alt="" className="work_img" />
              <h3 className="work_title">Landing Page OAB</h3>
              <span className="work_button">Demo
                <i className="uil uil-arrow-right work_button-icon"></i>
              </span>
              <div className="portfolio_item-details">
                <h3 className="details_title">landing Page com Pagina de Captura</h3>
                <p className="details_description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus maiores
                  exercitationem numquam.</p>
                <ul className="details_info">
                  <li>Criado - <span>19 Jun 2022</span></li>
                  <li>Tecnologias - <span>html css javascript mailchimp</span></li>
                  <li>Função - <span>FrontEnd</span></li>
                  <li>Visão - <span><a
                    href="https://pagina-de-captura-oab.vercel.app/">https://pagina-de-captura-oab.vercel.app/</a></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- PROJETOS 5 --> */}
            <div className="work_card mix backend mobile">
              <img src="https://portfolio-topaz-tau.vercel.app/assets/em%20breve.webp" alt="" className="work_img" />
              <h3 className="work_title">Em Breve</h3>
              <span className="work_button">Demo
                <i className="uil uil-arrow-right work_button-icon"></i>
              </span>
              <div className="portfolio_item-details">
                <h3 className="details_title">Lorem ipsum dolor sit amet.</h3>
                <p className="details_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus maiores
                  exercitationem numquam.</p>
                <ul className="details_info">
                  <li>Criado - <span>19 Jun 2022</span></li>
                  <li>Tecnologias - <span>html css javascript</span></li>
                  <li>Função - <span>FrontEnd</span></li>
                  <li>Visão - <span><a href="#">em breve</a></span></li>
                </ul>
              </div>
            </div>

            {/* <!-- PROJETOS 6 --> */}
            <div className="work_card mix backend mobile">
              <img src="https://portfolio-topaz-tau.vercel.app/assets/em%20breve.webp" alt="" className="work_img" />
              <h3 className="work_title">Em Breve</h3>
              <span className="work_button">Demo
                <i className="uil uil-arrow-right work_button-icon"></i>
              </span>
              <div className="portfolio_item-details">
                <h3 className="details_title">Lorem ipsum dolor sit amet consectetur.</h3>
                <p className="details_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus maiores
                  exercitationem numquam.</p>
                <ul className="details_info">
                  <li>Criado - <span>19 Jun 2022</span></li>
                  <li>Tecnologias - <span>html css javascript</span></li>
                  <li>Função - <span>FrontEnd</span></li>
                  <li>Visão - <span><a href="#">em breve</a></span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- =========== FIM Work ========  --> */}

      </main>

    </>

  )
}

export default App
