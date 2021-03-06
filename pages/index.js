import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import {useRouter} from 'next/router';
import appConfig from '../config.json';


function Titulo(props) {
  console.log(props);
  const Tag = props.tag || 'h1';
  return (
    <>
       <Tag>{props.children}</Tag>
       <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.primary['900']};
          font-size: 27px;
          font-weight: 1000;
        }
        `}</style>
    </>
     
  );
}

//Componente react
//function HomePage() {
    // JSX  
//    return (
//       <div>
//          <GlobalStyle />
//          <Titulo tag="h2">Boas vindas de volta!</Titulo>
//          <h2>Discord - Alura Matrix</h2>          
//      </div>
//   )
// }  
// export default HomePage

export default function PaginaInicial() {
  //const username = 'brunadias15';
  const [username, setUsername] = React.useState('brunadias15');
  const roteamento = useRouter();

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[100],
          backgroundImage: 'url(https://img.wallpapic-br.com/i6551-527-221/thumb/espaco-sideral-lua-planeta-universo-imagem-de-fundo.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'Inherited',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
            backgroundImage: 'url(https://i.pinimg.com/564x/8b/29/0b/8b290b460f7f8b2e4671de75452a8d6e.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'Inherited',
          }}
        >
          {/* Formul??rio */}
          <Box
            as="form"
            onSubmit = {function (infosDoEvento) {
              infosDoEvento.preventDefault();
              console.log('Alguem submeteu o form');
              roteamento.push('\chat');

              //window.location.href = '/chat';
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Bem-vindos a bordo!!</Titulo>
            <Text variant="body3" styleSheet={{marginBottom: '32px', color: appConfig.theme.colors.primary[900] }}>
              {appConfig.name}
            </Text>

            {/*<input
              type="text"
              value={username}
              onChange={function (event) {
                console.log('usuario digitou', event.target.value);
                // onde est?? o valor
                const valor = event.target.value;
                //trocar o valor da variavel
                //atrav??s do React e avise quem precisa
                setUsername(valor);
              }}
            /> */}
            <TextField
              value={username}
              onChange={function (event) {
                console.log('usuario digitou', event.target.value);
                // onde est?? o valor
                const valor = event.target.value;
                //trocar o valor da variavel
                //atrav??s do React e avise quem precisa
                setUsername(valor);
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[300],
                  mainColor: appConfig.theme.colors.neutrals[100],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formul??rio */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[100],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
              
            }}
          >
            <Image
              styleSheet={{                
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}