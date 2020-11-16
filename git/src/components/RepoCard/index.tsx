import React from 'react';

import { Link } from 'react-router-dom';
 
import { Container, Topside , Botside , Repoicon, StartIcon, ForkIcon } from './styles';

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<Props> = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks,
}) => {
          const languageClass = language ? language.toLowerCase() : 'other';

  return (
    <Container>
            <Topside>
                <header>
                    <Repoicon />
                        <Link to={`/${username}/${reponame}`}>{reponame}</Link>                     
                </header>
                <h3> Pagina desenvolvida tirando como base o github </h3>
            </Topside>
            <Botside>
                <ul>
                  <li>
                    <div className= {`language ${languageClass}`}/>
                    <span> {language}</span>
                    
                  </li>
                  <li>
                    <StartIcon />
                    <span>{stars}</span>
                  </li>
                  <li>
                    <ForkIcon />
                    <span>{forks}</span>
                  </li>
                </ul>
            </Botside>
    </Container>
  );
};

export default RepoCard;