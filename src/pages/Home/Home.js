import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import HeroUnit from '../../components/HeroUnit';

import Header from './header';
import Footer from './footer';
import './Home.css';
import logo from './logo.svg';

const styles = (theme) => ({
  header: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 2,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 2,
  },
  home: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 0,

    minHeight: '10vh',
    display: 'flex',
    flexDirection: 'column',

    fontSize: 'calc(10px + 2vmin)',
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <header className={classes.header}>
          <Header />
        </header>
        <main className={classes.home}>
          <HeroUnit>
            <div align='center'>
              <img src={logo} alt="logo" />
            </div>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              React Material UI Starter Project
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button
                    variant='outlined'
                    href="https://blog.coderfi.com/2018/12/11/react-starter-material-ui/"
                    target="_blank"
                    color="primary"
                  >
                    @coderfi blog
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant='outlined'
                    href="https://reactjs.org"
                    target="_blank"
                    color="primary"
                  >
                    Learn React
                  </Button>
                </Grid>
              </Grid>
            </div>
          </HeroUnit>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Edit <code>src/pages/Home/Home.js</code> and save to reload.
          </Typography>
        </main>
        <footer className={classes.footer}>
          <Footer />
        </footer>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Home);
