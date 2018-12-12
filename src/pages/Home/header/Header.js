import React from 'react';
import Typography from '@material-ui/core/Typography';

const Header = () => {
  return (
    <div>
      <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
        Header
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        This is where global header content might go.
      </Typography>

    </div>
  );
};

export default Header;
