import './App.css'

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
      </main>

    </>

  )
}

export default App
