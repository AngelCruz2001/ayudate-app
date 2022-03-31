import React from 'react'

export const LandingPage = () => {
  useHisto
  const handleClickLogIn = () => {

    console.log('clicked')
  }



  return (
    <>
      <header className="header">
        <a href="#">
          <img className="logo" alt="Omnifood logo" src="img/omnifood-logo.png" />
        </a>

        <nav className="main-nav">
          <ul className="main-nav-list">
            <li><a className="main-nav-link" href="#how">How it works</a></li>
            <li><a className="main-nav-link" href="#meals">Meals</a></li>
            <li>
              <a className="main-nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li><a className="main-nav-link" href="#pricing">Pricing</a></li>
            <li onClick={handleClickLogIn}><a className="main-nav-link nav-cta">Inicia sesión</a></li>
          </ul>
        </nav>

        <button className="btn-mobile-nav">
          <i className="icon-mobile-nav fas fa-bars" name="menu-outline"></i>

        </button>
      </header>

      <main>
        <section className="section-hero">
          <div className="hero">
            <div className="hero-text-box">
              <h1 className="heading-primary">
                Un servicio para la salud mental, todos los días.
              </h1>
              <p className="hero-description">
                La salud mental es un tema que muchas veces pasa desapercibido,
                pero que es una de las cosas más importantes para la vida.
              </p>
              <a href="#cta" className="btn btn--full margin-right-sm">
                Descarga la app
              </a>

              <a href="#how" className="btn btn--outline">¿Qué es lo que hacemos?</a>

            </div>
            <div className="hero-img-box">
              <picture>
                <source srcset="img/hero.webp" type="image/webp" />
                <source srcset="img/hero-min.png" type="image/png" />
                <img
                  src="img/hero-min.png"
                  className="hero-img"
                  alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                />
              </picture>
            </div>
          </div>
        </section>

        <section className="section-how" id="how">
          <div className="container">
            <span className="subheading">¿Cómo funciona?</span>
            <h2 className="heading-secondary">
              ¿Cómo comenzar en tres simples pasos?
            </h2>
          </div>

          <div className="container grid grid--2-cols grid--center-v">
            {/* <!-- STEP 01 --> */}
            <div className="step-text-box">
              <p className="step-number">01</p>
              <h3 className="heading-tertiary">
                Crea una cuenta.
              </h3>
              <p className="step-description">
                Para poder comenzar a trabajar con nosotros, debes crear una cuenta.
                Teniendo una cuenta con nosotros es posible acceder a todas las funciones de la app.
              </p>
            </div>

            <div className="step-img-box">
              <img
                src="img/app/app-screen-1.png"
                className="step-img"
                alt="iPhone app
            preferences selection screen"
              />
            </div>

            {/* <!-- STEP 02 --> */}
            <div className="step-img-box">
              <img
                src="img/app/app-screen-2.png"
                className="step-img"
                alt="iPhone app
            meal approving plan screen"
              />
            </div>
            <div className="step-text-box">
              <p className="step-number">02</p>
              <h3 className="heading-tertiary">Busca a un profesional.</h3>
              <p className="step-description">
                Dentro de la lista de nuestros profesional, podrás encontrar la persona ideal para ti.
                Nuestros profesionales estan capacitados para lidiar con cualquier tipo de situación.
              </p>
            </div>

            {/* <!-- STEP 03 --> */}
            <div className="step-text-box">
              <p className="step-number">03</p>
              <h3 className="heading-tertiary">Comienza a hablar con nostros.</h3>
              <p className="step-description">
                Una vez que hayas seleccionado a un profesional, podrás comenzar a hablar con él.
                En el chat podrás comentar sobre tu situación y el
                problema que tienes.
              </p>
            </div>
            <div className="step-img-box">
              <img
                src="img/app/app-screen-3.png"
                className="step-img"
                alt="iPhone app
            delivery screen"
              />
            </div>
          </div>
        </section>

        <section className="section-meals" id="meals">
          <div className="container center-text">
            <span className="subheading">Profesionales</span>
            <h2 className="heading-secondary">
              Una amplia gama de profesionales disponibles.
            </h2>
          </div>

          <div className="container grid grid--3-cols margin-bottom-md">
            <div className="meal">
              <img
                src="img/meals/meal-1.jpg"
                className="meal-img"
                alt="Japanese Gyozas"
              />
              <div className="meal-content">
                <div className="meal-tags">
                  <span className="tag tag--vegetarian">psic</span>
                </div>
                <p className="meal-title">Roberto Estrada</p>
                <ul className="meal-attributes">
                  <li className="meal-attribute">
                    <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
                    <span><strong>12</strong> años de experiencia</span>
                  </li>
                  <li className="meal-attribute">
                    <ion-icon
                      className="meal-icon"
                      name="restaurant-outline"
                    ></ion-icon>
                    <span>Lic en psicología </span>
                  </li>
                  <li className="meal-attribute">
                    <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                    <span><strong>4.9</strong> estrellas </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="meal">
              <img
                src="img/meals/meal-2.jpg"
                className="meal-img"
                alt="Avocado Salad"
              />
              <div className="meal-content">
                <div className="meal-tags">
                  <span className="tag tag--vegan">psic</span>
                  <span className="tag tag--paleo">med</span>
                </div>
                <p className="meal-title">Salvador Gutierrez</p>
                <ul className="meal-attributes">
                  <li className="meal-attribute">
                    <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
                    <span><strong>6</strong> años de experiencia</span>
                  </li>
                  <li className="meal-attribute">
                    <ion-icon
                      className="meal-icon"
                      name="restaurant-outline"
                    ></ion-icon>
                    <span>Lic en medicina</span>
                  </li>
                  <li className="meal-attribute">
                    <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                    <span><strong>5.0</strong> estrellas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="diets">
              <h3 className="heading-tertiary">Nuestros servicios: </h3>
              <ul className="list">
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Atención 24 horas</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Orientación médica digital</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Consultas médicas en linea</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Prescripción médica</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Chat con profesionales</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Llamadas personalizadas</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Grupos de ayuda</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Contactos de emergencia</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Servicios publicos</span>
                </li>
              </ul>
            </div>
          </div>


        </section>



        <section className="section-pricing" id="pricing">
          <div className="container">
            <span className="subheading">Perfiles</span>
            <h2 className="heading-secondary">
              Únete a nuestro equipo
            </h2>
          </div>

          <div className="container grid grid--2-cols margin-bottom-md">
            <div className="pricing-plan pricing-plan--starter">
              <header className="plan-header">
                <p className="plan-name">Paciente</p>
                <p className="plan-price">24 / 7</p>
                <p className="plan-text">buscanos cualquier día, a cualquier hora.</p>
              </header>
              <ul className="list">
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Atención por chat</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Busqueda de profesionales</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Consultas a domicilio</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="close-outline"></ion-icon>
                </li>
              </ul>
              <div className="plan-sing-up">
                <a href="#" className="btn btn--full">Descargar la app</a>
              </div>
            </div>

            <div className="pricing-plan pricing-plan--complete">
              <header className="plan-header">
                <p className="plan-name">Profesional</p>
                <p className="plan-price">Gratis</p>
                <p className="plan-text">tú eliges cuando y como.</p>
              </header>
              <ul className="list">
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Chat con pacientes</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Horarios personalizados</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Registro gratis</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Y más...</span>
                </li>
              </ul>
              <div className="plan-sing-up">
                <a href="#" className="btn btn--full">Inicia sesión</a>
              </div>
            </div>
          </div>

          <div className="container grid grid--4-cols">
            <div className="feature">
              <ion-icon className="feature-icon" name="infinite-outline"></ion-icon>
              <p className="feature-title">A distancia de un click</p>
              <p className="feature-text">
                Busca a tu profesional de la manera más fácil y rápida a través de la App.
              </p>
            </div>
            <div className="feature">
              <ion-icon className="feature-icon" name="nutrition-outline"></ion-icon>
              <p className="feature-title">Chat privado y seguro</p>
              <p className="feature-text">
                Un profesional te brinda una atención médica personalizada.
              </p>
            </div>
            <div className="feature">
              <ion-icon className="feature-icon" name="leaf-outline"></ion-icon>
              <p className="feature-title">Lista de profesionales</p>
              <p className="feature-text">
                Lista de profesionales disponibles, puedes elegir el que más te convenga.
              </p>
            </div>
            <div className="feature">
              <ion-icon className="feature-icon" name="pause-outline"></ion-icon>
              <p className="feature-title">Avanza a tu ritmo</p>
              <p className="feature-text">
                Puedes consultar médicos de tu zona, sin importar donde estés.
              </p>
            </div>
          </div>
        </section>

        <section className="section-cta" id="cta">
          <div className="container">
            <div className="cta">
              <div className="cta-text-box">
                <h2 className="heading-secondary">Registrate para comenzar</h2>
                <p className="cta-text">
                  ¿Quieres comenzar a trabajar con nosotros? ¡Registrate!
                  Llena el formulario y comienza a trabajar con nosotros.
                </p>

                <form className="cta-form" name="sign-up" netlify>
                  <div>
                    <label for="full-name">Nombres</label>
                    <input
                      id="fname"
                      type="text"
                      placeholder="Salvador"
                      name="fname-name"
                      required
                    />
                  </div>

                  <div>
                    <label for="lname">Apellidos</label>
                    <input
                      id="lname"
                      placeholder="Gutierrez"
                      name="lname"
                      required
                    />
                  </div>
                  <button className="btn btn--form">Comienza ahora</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <footer className="footer">
        <div className="container grid grid--footer">
          <div className="logo-col">
            <a href="#" className="footer-logo">
              <img className="logo" alt="Omnifood logo" src="img/omnifood-logo.png" />
            </a>

            <ul className="social-links">
              <li>
                <a className="footer-link" href="#"
                ><ion-icon className="social-icon" name="logo-instagram"></ion-icon
                ></a>
              </li>
              <li>
                <a className="footer-link" href="#"
                ><ion-icon className="social-icon" name="logo-facebook"></ion-icon
                ></a>
              </li>
              <li>
                <a className="footer-link" href="#"
                ><ion-icon className="social-icon" name="logo-twitter"></ion-icon
                ></a>
              </li>
            </ul>

            <p className="copyright">
              Copyright &copy; <span className="year">2027</span> by Omnifood, Inc.
              All rights reserved.
            </p>
          </div>

          <div className="address-col">
            <p className="footer-heading">Contact us</p>
            <address className="contacts">
              <p className="address">
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
              </p>
              <p>
                <a className="footer-link" href="tel:415-201-6370">415-201-6370</a
                ><br />
                <a className="footer-link" href="mailto:hello@omnifood.com"
                >hello@omnifood.com</a
                >
              </p>
            </address>
          </div>

          <nav className="nav-col">
            <p className="footer-heading">Account</p>
            <ul className="footer-nav">
              <li><a className="footer-link" href="#">Create account</a></li>
              <li><a className="footer-link" href="#">Sign in</a></li>
              <li><a className="footer-link" href="#">iOS app</a></li>
              <li><a className="footer-link" href="#">Android app</a></li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading">Company</p>
            <ul className="footer-nav">
              <li><a className="footer-link" href="#">About Omnifood</a></li>
              <li><a className="footer-link" href="#">For Business</a></li>
              <li><a className="footer-link" href="#">Cooking partners</a></li>
              <li><a className="footer-link" href="#">Careers</a></li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading">Resources</p>
            <ul className="footer-nav">
              <li><a className="footer-link" href="#">Recipe directory </a></li>
              <li><a className="footer-link" href="#">Help center</a></li>
              <li><a className="footer-link" href="#">Privacy & terms</a></li>
            </ul>
          </nav>
        </div>
      </footer> */}

    </>
  )
}
