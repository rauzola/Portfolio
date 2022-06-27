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
        <section className="qualification section" id="skills">
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


        {/* <!-- PORTFOLIO POPUP --> */}
        <div className="portfolio_popup">
          <div className="portfolio_popup-inner">
            <div className="portfolio_popup-content grid">
              <span className="portfolio_popup-close"><i className="uil uil-times"></i></span>
              <div className="pp_thumbnail">
                <img src="./assets/em breve.webp" alt="" className="portfolio_popup-img" />
              </div>
              <div className="portfolio_popup-info">
                <div className="portfolio_popup-subtitle">Feature - <span>Design</span></div>
                <div className="portfolio_popup-body">
                  <h3 className="details_title">
                    Lorem ipsum dolor sit amet consectetur.</h3>
                  <p className="details_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus maiores
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
          </div>
        </div>
        {/* <!-- FIM PORTFOLIO POPUP --> */}

        {/* <!-- =========== Service ========  --> */}
        <section className="services section" id="services">
          <h2 data-heading="Meus Serviços" className="section_title">O que eu ofereço</h2>
          <div className="services_container container grid">

            {/* <!-- services 1 --> */}
            <div className="services_content">
              <div>
                <i className="uil uil-web-grid services_icon"></i>
                <h3 className="services_title">Desenvolvimento <br /> WEB</h3>
              </div>
              <span className="services_button">
                Veja Mais <i className="uil uil-arrow-right services_button-icon"></i>
              </span>

              {/* <!-- descriptions services 1 --> */}
              <div className="services_modal">
                <div className="services_modal-content">
                  <i className="uil uil-times services_modal-close"></i>

                  <h3 className="services_modal-title">Desenvolvimento WEB</h3>
                  <p className="services_modal-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
                    dolor, vitae aliquam officiis eveniet corrupti. </p>

                  <ul className="services_modal-services grid">
                    <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon"></i>
                      <p className="services_modal-info">Desenvolvimento das interfaces de usuario.</p>
                    </li>
                    <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon"></i>
                      <p className="services_modal-info">Desenvolvimento de Páginas Web.</p>
                    </li>
                    <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon"></i>
                      <p className="services_modal-info">Criação de Elemtos UX com Interação.</p>
                    </li>
                    <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon"></i>
                      <p className="services_modal-info">Desenvolvimento de Formulários</p>
                    </li>
                    <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon"></i>
                      <p className="services_modal-info">Desiner e Mockups de produtos para empresas.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- services 2 --> */}
            <div className="services_content">
              <div>
                <i className="uil uil-arrow services_icon"></i>
                <h3 className="services_title">Desenvolvimento <br /> Backend</h3>
              </div>
              <span className="services_button">
                Veja Mais <i className="uil uil-arrow-right services_button-icon"></i>
              </span>

              {/* <!-- descriptions services 2 --> */}
              <div className="services_modal">
                <div className="services_modal-content">
                  <i className="uil uil-times services_modal-close"></i>

                  <h3 className="services_modal-title">Desenvolvimento Backend</h3>
                  <p className="services_modal-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
                    dolor, vitae aliquam officiis eveniet corrupti. </p>

                  <ul className="services_modal-services grid">
                    <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon"></i>
                      <p className="services_modal-info">Desenvolvimento das interfaces de usuario.</p>
                    </li>
                    <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon"></i>
                      <p className="services_modal-info">Desenvolvimento de Páginas Web.</p>
                    </li>
                    <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon"></i>
                      <p className="services_modal-info">Criação de Elemtos UX com Interação.</p>
                    </li>
                    <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon"></i>
                      <p className="services_modal-info">Desenvolvimento de Formulários</p>
                    </li>
                    <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon"></i>
                      <p className="services_modal-info">Desiner e Mockups de produtos para empresas.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- services 3 --> */}
            <div className="services_content">
              <div>
                <i className="uil uil-edit services_icon"></i>
                <h3 className="services_title">Desenvolvimento <br /> Mobile</h3>
              </div>
              <span className="services_button">
                Veja Mais <i className="uil uil-arrow-right services_button-icon"></i>
              </span>

              {/* <!-- descriptions services 3 --> */}
              <div className="services_modal">
                <div className="services_modal-content">
                  <i className="uil uil-times services_modal-close"></i>

                  <h3 className="services_modal-title">Desenvolvimento Mobile</h3>
                  <p className="services_modal-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
                    dolor, vitae aliquam officiis eveniet corrupti. </p>

                  <ul className="services_modal-services grid">
                    <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon"></i>
                      <p className="services_modal-info">Desenvolvimento das interfaces de usuario.</p>
                    </li>
                    <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon"></i>
                      <p className="services_modal-info">Desenvolvimento de Páginas Web.</p>
                    </li>
                    <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon"></i>
                      <p className="services_modal-info">Criação de Elemtos UX com Interação.</p>
                    </li>
                    <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon"></i>
                      <p className="services_modal-info">Desenvolvimento de Formulários</p>
                    </li>
                    <li className="services_modal-service">
                      <i className="uil uil-check-circle services_modal-icon"></i>
                      <p className="services_modal-info">Desiner e Mockups de produtos para empresas.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


        </section>
        {/* <!-- =========== FIM Service ========  --> */}

        {/* <!-- =========== Testimonials ======== --> */}
        {/* <section className="testimonials section">
          <h2 data-heading="O que meus Clientes falam" className="section_title">Feedbacks</h2>

          <div className="testimonials_container container swiper">
            <div className="swiper-wrapper">

              <!-- FEEDBACK 1 -->
              <div className="testimonial_card swiper-slide">
                <div className="testimonial_quote">
                  <i className='bx bxs-quote-alt-left'></i>
                </div>
                <p className="testimonial_description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                  voluptates expedita sit.</p>
                <h3 className="testimonial_date">Março 27.2022</h3>
                <div className="testimonial_profile">
                  <img src="./assets/testimonial1.webp" alt="" className="testimonial_profile-img" />

                    <div className="testimonial_profile-data">
                      <span className="testimonial_profile-name">Exemplo Speak</span>
                      <span className="testimonial_profile-detail">Cargo e Empresa</span>
                    </div>
                </div>
              </div>

              <!-- FEEDBACK 2 -->
              <div className="testimonial_card swiper-slide">
                <div className="testimonial_quote">
                  <i className='bx bxs-quote-alt-left'></i>
                </div>
                <p className="testimonial_description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                  voluptates expedita sit.</p>
                <h3 className="testimonial_date">Março 27.2022</h3>
                <div className="testimonial_profile">
                  <img src="./assets/testimonial2.jpg" alt="" className="testimonial_profile-img" />

                  <div className="testimonial_profile-data">
                    <span className="testimonial_profile-name">Exemplo Speak</span>
                    <span className="testimonial_profile-detail">Cargo e Empresa</span>
                  </div>
                </div>
              </div>

              <!-- FEEDBACK 3 -->
              <div className="testimonial_card swiper-slide">
                <div className="testimonial_quote">
                  <i className='bx bxs-quote-alt-left'></i>
                </div>
                <p className="testimonial_description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                  voluptates expedita sit.</p>
                <h3 className="testimonial_date">Março 27.2022</h3>
                <div className="testimonial_profile">
                  <img src="./assets/testimonial3.webp" alt="" className="testimonial_profile-img" />

                    <div className="testimonial_profile-data">
                      <span className="testimonial_profile-name">Exemplo Speak</span>
                      <span className="testimonial_profile-detail">Cargo e Empresa</span>
                    </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>

        </section> */}
        {/* <!-- =========== FIM Testimonials ======== --> */}


        {/* <!-- =========== Contact ========  --> */}
        <section className="contact section" id="contact">
          <h2 data-heading="Entre em Contato" className="section_title">Contato</h2>

          <div className="contact_container container grid">
            <div className="contact_content">
              <div className="contact_info">

                {/* <!-- Contato Email --> */}
                <div className="contact_card">
                  <i className="uil uil-envelope-edit contact_card-icon "></i>
                  <h3 className="contact_card-title">E-mail</h3>
                  <span className="contact_card-data">raul_sigoli@hotmail</span>
                  <a href="mailto:raul_sigoli@hotmail" target="_blank">
                    <span className="contact_button">
                      Mandar Email <i className="uil uil-arrow-right contact_button-icon"></i>
                    </span>
                  </a>
                </div>
                {/* <!-- Contato WhatsApp --> */}
                <div className="contact_card">
                  <i className="uil uil-whatsapp contact_card-icon "></i>
                  <h3 className="contact_card-title">WhatsApp</h3>
                  <span className="contact_card-data">(44) 9 9165-8351</span>
                  <a href="http://WA.me/5544991658351" target="_blank">
                    <span className="contact_button">
                      Chamar no WhatsApp <i className="uil uil-arrow-right contact_button-icon"></i>
                    </span>
                  </a>
                </div>
                {/* <!-- Contato Telegram --> */}
                <div className="contact_card">
                  <i className="uil uil-telegram contact_card-icon "></i>
                  <h3 className="contact_card-title">Telegram</h3>
                  <span className="contact_card-data">(44) 9 9165-8351</span>
                  <a href="https://t.me/raul_sigoli" target="_blank">
                    <span className="contact_button">
                      Chamar no Telegram<i className="uil uil-arrow-right contact_button-icon"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- formulario --> */}
            <div className="contact_content">
              <form action="https://formspree.io/f/mqknoyvn" method="POST" className="contact_form">

                {/* <!-- Nome --> */}
                <div className="input_container">
                  <input type="text" className="input" required name="fname" placeholder="Nome" />
                </div>

                {/* <!-- E-mail --> */}
                <div className="input_container">
                  <input type="email" className="input" required email="femail" placeholder="E-mail" />
                </div>

                {/* <!-- Telefone --> */}
                <div className="input_container">
                  <input type="tel" className="input" required tel="ftel" placeholder="Telefone" />
                </div>

                {/* <!-- Mensagem --> */}
                <div className="input_container textarea">
                  <textarea name="" id="" className="input" required textarea="ftextarea" placeholder="Mensagem" ></textarea>

                </div>
                {/* <!-- Botao enviar mensagem --> */}
                <button type="submit" className="button">
                  <i className="uil uil-navigator button_icon"></i>
                  Enviar Mesagem
                </button>
              </form>

            </div>
          </div>
        </section>
        {/* <!-- =========== FIM   Contact ========  --> */}

        {/* <!-- ==== FOOTER ==== --> */}
        <footer class="footer">
          <div class="footer_bg">
            <div class="footer_container container grid">
              <div>
                <h1 class="footer_title">Raul Sigoli</h1>
                <span class="footer_subtitle">Desenvolvedor Frontend</span>
              </div>

              {/* <!-- MENUS FOOTER --> */}
              <ul class="footer_links">
                <li>
                  <a href="#services" class="footer_link">Services</a>
                </li>
                <li>
                  <a href="#work" class="footer_link">Work</a>
                </li>
                <li>
                  <a href="#contact" class="footer_link">Contact</a>
                </li>
              </ul>

              {/* <!-- REDES SOCIAIS --> */}
              <div class="footer_socials">
                <a href="https://www.instagram.com/raul_sigoli/" target="_blank" class="footer_social">
                  <i class="uil uil-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/raul-sigoli-137bb4173/" target="_blank" class="footer_social">
                  <i class="uil uil-linkedin"></i></a>
                <a href="https://github.com/rauzola" target="_blank" class="footer_social">
                  <i class="uil uil-github"></i>
                </a>
              </div>
            </div>
            <p class="footer_copy">&#169; Desenvolvido junto com Crypticalcodes. All right reserved</p>
          </div>
        </footer>
        {/* <!-- ==== FIM FOOTER ==== --> */}


      </main>

    </>

  )
}

export default App
