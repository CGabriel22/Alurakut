// import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu } from '../src/lib/AlurakutCommons';

function ProfileSidebar(props) {
  return (
    <Box>
      <img style={{ borderRadius: '8px' }} src={`https://github.com/${props.githubUser}.png`} alt="foto de usuário" />
    </Box>
  )
}


export default function Home() {
  const githubUser = 'CGabriel22';
  const pessoasFavoritas = [
    'Bielframos',
    'CGabriel22',
    'camilavirna',
    'juunegreiros',
    'peas',
    'omariosouto'
  ];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            Parei no tempo 1:40:00
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <Box>
            <h2 className="smallTitle">Pessoas da comunidade ({pessoasFavoritas.length})</h2>

            <ul>
              {pessoasFavoritas.map((i) => {
                return (
                  <a href={`/users/${i}`} key={i}>
                    <img src={`https://github.com/${i}.png`} alt={i} />
                    <span>{i}</span>
                  </a>
                )
              })}
            </ul>
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
