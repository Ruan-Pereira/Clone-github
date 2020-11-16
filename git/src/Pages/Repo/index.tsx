import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Breadcrumb , RepoIcon, Stats, StartIcon, ForksIcon, LinkButton, GithubIcon} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
        <Breadcrumb>
          <RepoIcon />
          <Link className={'username'} to={'/guilhermerodz'}>
            guilhermerodz
          </Link>
        
        <span>/</span>
        

        <Link className={'reponame'} to={'/guilhermerodz/youtube-content'}>
          youtube-content
        </Link>

        </Breadcrumb>

        <p>Contains all of my Youtube lessons code</p>

        <Stats>
          <li>
            <StartIcon />
            <b>9</b>
            <span>start</span>
          </li>
          <li>
            <ForksIcon />
            <b>0</b>
            <span>forks</span>
          </li>
        </Stats>

        <LinkButton href={'https://github.com/guilhermerodz/youtube-content'}>
          <GithubIcon />
          <span>View on Github</span>
        </LinkButton>

    </Container>
  );
};

export default Repo;