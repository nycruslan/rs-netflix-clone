import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(to top, transparent 0%, #151515 200%)',
    boxShadow: 'none',
  },
  logo: {
    width: '10%',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar className={classes.root}>
        <Toolbar>
          <div>
            <a href='/'>
              <img
                className={classes.logo}
                src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                alt='Logo'
              />
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
