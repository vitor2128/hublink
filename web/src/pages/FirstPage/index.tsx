import React from 'react';
import { Container } from './styles';

import foto from '../../assets/joey-nicotra-WLKIF2CQb5I-unsplash.jpg';

const FirstPage: React.FC = () => {
  return (
    <Container id="top">
      <main>
        <div className="container-fluid photo">
          <div className="row">
            <div className="col">
              <p>
                <img src={foto} alt={foto} />
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid title">
          <div className="row">
            <div className="col">
              <h1>Vitor Hugo</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid bio">
          <div className="row">
            <div className="col">
              <p>Iniciante a desenvolvedor FullStack</p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="container-fluid links">
          <div className="row">
            <div className="col">
              <a href="https://www.instagram.com/vitor.2828" target="_blanc" className="botao">
                <p>Instagram</p>
              </a>
              <a href="https://github.com/vitor2128" target="_blanc" className="botao">
                <p>GitHub</p>
              </a>
              <a href="https://wa.me/5516992696840" target="_blanc" className="botao">
                <p>WhatsApp</p>
              </a>
              <a href="https://" target="_blanc" className="botao">
                <p>Site</p>
              </a>
              <a href="mailto:hugo.veigav@gmail.com" target="_blanc" className="botao">
                <p>E-mail</p>
              </a>
              <a href="tel:+5516992696840" className="botao">
                <p>Telefone de contato</p>
              </a>
            </div>
          </div>
        </div>

        <div className="container-fluid social">
          <div className="row">
            <div className="col">
              <ul>
                <li>
                  <a href="https://www.instagram.com/" target="_blanc">
                    <i className="bi bi-instagram" title="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="_blanc">
                    <i className="bi bi-twitter" title="Twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blanc">
                    <i className="bi bi-linkedin" title="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com" target="_blanc">
                    <i className="bi bi-youtube" title="Youtube" />
                  </a>
                </li>
                <li>
                  <a href="mailto:hi@email.com" target="_blanc">
                    <i className="bi bi-envelope" title="Email" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <p>
                Feito com <span style={{ color: 'red' }}>❤</span> por{' '}
                <a href="https://" target="_blanc">
                  SYS Desenvolvimentos
                </a>
                <br />
              </p>
              <p>&nbsp;</p>
              <p>
                <a href="#top">
                  <i className="bi bi-arrow-up-circle-fill" /> Voltar ao inicio
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default FirstPage;
