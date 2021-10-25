import React from 'react';

import { AppBar, Avatar, Grid, Toolbar, Box } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  appbar: {
    background: '#fff !important',
    boxShadow: '0px 14px 32px 0px #20385512',
  },
  toolbar: {
    maxWidth: '1000px',
  },
  settingIcon: {
    color: '#BBD0E280',
  },
});

function Header() {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appbar} elevation={-1}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid
            className={classes.toolbar}
            container
            spacing={1}
            alignItems='center'
          >
            <Grid item>
              <img src='./img/logo.svg' alt='logo Playlist' />
            </Grid>
            <Grid item xs />
            <Grid item>
              <IconButton>
                <img src='./img/notificationIcon.svg' alt='notificationIcon' />
              </IconButton>
              <IconButton>
                <SettingsIcon className={classes.settingIcon} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color='inherit' sx={{ p: 0.5 }}>
                <Avatar src='./img/avatar.png' alt='My Avatar' />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
