import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit}px 0 ${theme.spacing.unit}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
});

const HeroUnit = (props) => {
  const { children, classes } = props;

  return (
    <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
        { children }
      </div>
    </div >
  );
};

HeroUnit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeroUnit);
