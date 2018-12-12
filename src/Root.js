import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Home from './pages/Home';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },

  palette: {
    type: 'light',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#059b7e',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.secondary.main,
      main: '#19bd9b',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

class Root extends Component {
  render = () => {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Home />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default Root;
