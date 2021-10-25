import React from 'react';

import Playlist from './Playlist';
import AddNewGameInput from './AddNewGameInput';
import Pagination from './Pagination';

import { TableContainer, Table, Paper, Container, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import '@fontsource/roboto/500.css';

const useStyles = makeStyles({
  container: {
    background: '#EDF4F6',
    padding: '0px !important',
    margin: '0px !important',
    maxWidth: '100vw !important',
  },
  h1: {
    fontSize: '42px',
    lineHeight: '49px',
    marginBottom: '25px',
    fontFamily: 'Roboto',
    fontWeight: 700,
  },
  box: {
    padding: '5% 0',
    maxWidth: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  div: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 9%',
  },
  Paper: {
    padding: '0px 30px',
    boxSizing: 'border-box',
    overflowX: 'none',
    paddingBottom: '45px',
    boxShadow: '0px 30px 60px rgba(32, 56, 85, 0.15)!important',
  },
  p: {
    marginTop: '39px',
    marginBottom: '28px',
    fontSize: '15px',
    fontFamily: 'Roboto',
    fontWeight: 700,
    lineHeight: '18px',
    color: '#26334A99',
  },
});

function Playlists() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <h1 className={classes.h1}>Community playlist</h1>
        <TableContainer className={classes.Paper} component={Paper}>
          <div className={classes.div}>
            <p className={classes.p}>Game title</p>
            <p className={classes.p}>Status</p>
          </div>
          <Table>
            <AddNewGameInput />
            <Playlist />
          </Table>
        </TableContainer>
        <Pagination />
      </Box>
    </Container>
  );
}

export default Playlists;
