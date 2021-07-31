import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiTwitter, FiMail, FiYoutube, FiLinkedin } from 'react-icons/fi';
import { Container } from './styles';

import foto from '../../assets/joey-nicotra-WLKIF2CQb5I-unsplash.jpg';
import { api } from '../../services/api';

interface ParamTypes {
  username: string;
}

interface CssTypes {
  background: string;
  fontColor: string;
  borderColor: string;
}

interface LinkTypes {
  link: string;
  title: string;
  css: CssTypes[];
}

const HubLink: React.FC = () => {
  const { username } = useParams<ParamTypes>();
  const [data, setData] = useState<LinkTypes[]>([]);

  const history = useHistory();

  useEffect(() => {
    api
      .get(`/${username}`)
      .then((res) => {
        setData(res.data.links);
      })
      .catch((error) => {
        console.log(error);
        history.push(`/notfound`);
      });
  }, []);

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
              {data.map((lnk) =>
                lnk.css.map((css) => (
                  <a
                    href={lnk.link}
                    target="_blanc"
                    className="botao"
                    style={{
                      color: `${css.fontColor}`,
                      backgroundColor: `${css.background}`,
                      border: ` 2px solid  ${css.borderColor}`,
                    }}
                  >
                    <p>{lnk.title}</p>
                  </a>
                )),
              )}
            </div>
          </div>
        </div>

        <div className="container-fluid social">
          <div className="row">
            <div className="col">
              <ul>
                <li>
                  <a href="https://www.instagram.com/" target="_blanc">
                    <FiInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="_blanc">
                    <FiTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blanc">
                    <FiLinkedin />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com" target="_blanc">
                    <FiYoutube />
                  </a>
                </li>
                <li>
                  <a href="mailto:hi@email.com" target="_blanc">
                    <FiMail />
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

export default HubLink;
