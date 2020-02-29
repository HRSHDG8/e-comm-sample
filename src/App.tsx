import React, { FunctionComponent, useState } from 'react';
import Header from './component/header/Header';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { grey, blue, } from '@material-ui/core/colors';
import Footer from './component/footer/Footer';
import Body from './component/body/Body';
const dark = createMuiTheme({
  palette: {
    primary: {
      main: blue[900],
    },
    secondary: {
      main: blue[500]
    }
  },
});

const light = createMuiTheme({
  palette: {
    secondary: {
      main: grey[100],
    },
  },
});
const App: FunctionComponent = () => {
  const [user, setUser] = useState('');
  return (
    <ThemeProvider theme={dark}>
      <Header user={user} />
      <ThemeProvider theme={light}>
        <Body setUser={setUser} />
      </ThemeProvider>
      <Footer />
    </ThemeProvider >
  );
}

export default App;
