import React, { useContext } from 'react';
import { PlayListsContext } from '../context/PlayListsContext';
import {
  Fade,
  Paper,
  Popper,
  Stack,
  Typography,
  Button,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  Paper: {
    margin: '100px!important',
    padding: '12px 28px',
    boxShadow: 'none!important',
    dropShadow: '0px 30px 60px rgba(32, 56, 85, 0.15)!important',
    position: 'absolute',
    top: '50%',
    left: '10%!important',
    mrginTop: '50%!important',
    border: 'none!important',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    textAlign: 'center',
  },
  Stack: {
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'flex!important',
  },
  btn: {
    fontFamily: 'Roboto!important',
    fontWeight: '700!important',
    lineHeight: '19px!important',
    fontSize: '16px',
    color: '#FFFFFF',
    cursor: 'pointer',
    padding: '12px 16px!important',
    boxShadow: 'none!important',
    textTransform: 'none!important',
    width: '120px!important',
  },
  btnDelete: {
    background: '#BA3409!important',
  },
  btnCancel: {
    background: '#08A0F7',
  },
});
export default function BasicModal({ openID, handleClose }) {
  const {
    setOpenId,
    handleDeleteGame,
  } = useContext(PlayListsContext);

	const classes = useStyles();

  // Close Popup
  const handelClose = () => setOpenId(null);

  return (
    <Popper open={openID} transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper className={classes.Paper}>
            <CloseIcon onClick={handelClose} />
            <Typography sx={{ p: 2 }}>
              Are you sure you want to delete this item?
            </Typography>
            <Stack className={classes.Stack} spacing={2} direction='row'>
              <Button
                className={clsx(classes.btnDelete, classes.btn)}
                onClick={() => {
                  handleDeleteGame(openID);
                }}
                variant='contained'
              >
                Yes, delete
              </Button>
              <Button
                className={clsx(classes.btnCancel, classes.btn)}
                onClick={handelClose}
                variant='contained'
              >
                Cancel
              </Button>
            </Stack>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
}
