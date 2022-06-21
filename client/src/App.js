import './App.css';
import {Fragment} from 'react';
import { Stack, ChakraTheme, ChakraProvider } from '@chakra-ui/react';
import Introduction from './components/Introduction';
import Aboutme from './components/AboutMe';
import Projects from './components/Projects'
import Skills from './components/Skills';
import customTheme from './style/theme';
import { prismDarkTheme } from './style/prism';
import { Global, css } from '@emotion/react'
import Contact from  './components/Contact'
const GlobalStyle = ({ children }) => {
  return (
    <Fragment>
      <Global
        styles={css`
          ${prismDarkTheme};
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: #000;
          }
          ::-webkit-scrollbar {
            width: 8px;
            background: #080808;
          }
          ::-webkit-scrollbar-thumb {
            background: #111111;
            border-radius: 8px;
          }
        `}
      />
      {children}
    </Fragment>
  )
}

function App() {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <GlobalStyle>
        <Stack
          as="main"
          spacing="144px"
          justifyContent="center"
          alignItems="flex-start"
          px={{ base: '5vw', md: '10vw' }}
          mt={{ base: '15vh', md: '22.5vh' }}
        >
          <Introduction />
          <Aboutme />
          <Projects />
          {/* <Skills /> */}
          <Contact/>
        </Stack>
      </GlobalStyle> 
    </ChakraProvider>
  );
}

export default App;
