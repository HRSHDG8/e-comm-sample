import { blue, grey } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Body from './component/body/Body';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
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
const App: FunctionComponent<RouteComponentProps> = ({ history }) => {
  const [user, setUser] = useState('');
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const userId = localStorage.getItem("user-id");
    if (userId === null) {
      history.push("login");
    } else {
      setUser(userId);
    }
  }, [history])
  return (
    <ThemeProvider theme={dark}>
      <Header user={user} setUser={setUser} open={open} setOpen={setOpen} />
      <ThemeProvider theme={light}>
        <Body setUser={setUser} open={open} setOpen={setOpen} user={user} />
      </ThemeProvider>
      <Footer />
    </ThemeProvider >
  );
}

export default withRouter(App);
