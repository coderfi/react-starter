import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  appBar: {
    position: 'relative',
  },
});

const Header = (props) => {
  const { classes } = props;

  return (
    <div>
      <AppBar color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            React Starter
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
        Header
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        This is where global header content might go.
      </Typography>

    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
