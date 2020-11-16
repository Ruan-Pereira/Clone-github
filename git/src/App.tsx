import 'react-calendar-heatmap/dist/styles.css';

import React, { useState } from 'react';

import { BrowserRouter , Routes , Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
 
import GlobalStyles from './styles/GlobalStyles';

import Header from './components/Header';

import Profile from './Pages/Profile';

import Repo from './Pages/Repo';

import Footer from './components/Footer';

import { ThemeName, themes } from './styles/themes';

function App() {
  const [themeName, setThemeName] = useState<ThemeName>('light');
  const currentTheme = themes[themeName];

  return (
   <ThemeProvider theme={currentTheme}>
        <BrowserRouter>
        <Header themeName={themeName} setThemeName={setThemeName} />
        <Routes>
            <Route path="/" element={< Profile />}  />
          
            <Route path="/:username" element={< Profile />}  />
          
            <Route path="/:username/:reponame" element={<Repo />}  />
        </Routes>

        <Footer />
        <GlobalStyles/>
      </BrowserRouter>
    
   </ThemeProvider>
  );
}

export default App;
