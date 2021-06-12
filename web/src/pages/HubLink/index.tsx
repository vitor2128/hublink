import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container } from './styles';

import foto from '../../assets/joey-nicotra-WLKIF2CQb5I-unsplash.jpg';
import { api } from '../../services/api';

interface ParamTypes {
  username: string;
}

interface LinkTypes {
  link: string;
  title: string;
}
const HubLink: React.FC = () => {
  const { username } = useParams<ParamTypes>();
  const [data, setData] = useState<LinkTypes[]>([]);
  const [isLoading, setIsLoadin] = useState(true);

  const history = useHistory();

  useEffect(() => {
    setIsLoadin(false);

    api
      .get(`/${username}`)
      .then((res) => {
        setData(res.data.links);
      })
      .catch((error) => {
        console.log(error);
        history.push(`/notfound`);
      });

    return () => setIsLoadin(true);
  }, []);

  console.log(data);

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
              {data.map((lnk) => (
                <a href={lnk.link} target="_blanc" className="botao">
                  <p>{lnk.title}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="container-fluid social">
          {/* <div className="row">
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
          </div> */}
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
