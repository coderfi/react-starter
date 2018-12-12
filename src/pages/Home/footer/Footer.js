import React from 'react';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
  return (
    <div>
      <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
        Footer
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        This is where global footer content might go.
      </Typography>
    </div>
  );
};

export default Footer;
