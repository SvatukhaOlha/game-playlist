import React, { useContext, useState } from 'react';
import { PlayListsContext } from '../context/PlayListsContext';
import DeleteModal from './DeleteModal';

import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

import {
  ListItemButton,
  Checkbox,
  Button,
  TableBody,
  TableRow,
  TableCell,
  TextField,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles({
  TableCell: {
    display: 'flex!important',
    height: '56px!important',
    alignItems: 'center',
    margin: '10px 0px!important',
    filter: 'box-shadow(0px 0px 12px rgba(42, 72, 124, 0.4))!important',
    borderRadius: '10px',
    padding: '0px!important',
    position: 'relative!important',
  },
  Checkbox: {
    color: '#08A0F7!important',
  },
  btn: {
    fontFamily: 'Roboto!important',
    fontWeight: '700!important',
    lineHeight: '15px!important',
    cursor: 'pointer',
    padding: '6px 10px!important',
    textTransform: 'none!important',
  },
  btnToPlay: {
    background: '#C8981C91!important',
    color: '#4E4122!important',
  },
  btnCompleted: {
    background: '#1CBC5391!important',
    color: '#27653C!important',
  },
  deleteIcon: {
    color: '#BBD0E2!important',
    margin: '0px 35px !important',
    cursor: 'pointer',
  },
});

export default function Playlist() {
  const classes = useStyles();

  const {
    games,
    page,
    rowsPerPage,
    setGames,
    openId,
    setOpenId,
    handleDeleteGame,
  } = useContext(PlayListsContext);

  // CheckBox
  const [checked, setChecked] = useState([0]);
  const handleToggle = (game) => () => {
    const currentIndex = checked.indexOf(game);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(game);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  // Edite name of game
  const handleChange = (event) => {
    const newGames = [...games];
    const gameID = Number(event.target.id);

    const gameIndex = games.findIndex((game) => {
      return game.id === gameID;
    });

    newGames[gameIndex] = {
      ...newGames[gameIndex],
      title: event.target.value,
    };
    setGames(newGames);
  };

  // Change status of game
  const handleChangeCompleted = (gameID) => {
    const newGames = [...games];

    const gameIndex = games.findIndex((game) => {
      return game.id === gameID;
    });

    newGames[gameIndex] = {
      ...newGames[gameIndex],
      completed: !newGames[gameIndex].completed,
    };
    setGames(newGames);
  };

  return (
    <>
      <TableBody>
        {games
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => {
            const labelId = row.id;
            return (
              <TableRow key={row.id}>
                <TableCell
                  sx={{
                    border: '1px solid #D8E1E9',
                    boxShadow: '8px 6px 7px -7px rgba(0,0,0,0.17)',
                  }}
                  className={classes.TableCell}
                  component='th'
                  scope='row'
                >
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(row)}
                    dense
                  >
                    <Checkbox
                      className={classes.Checkbox}
                      checked={checked.indexOf(row) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                    <TextField
                      className={classes.TextField}
                      InputProps={{ disableUnderline: true }}
                      id={labelId}
                      value={row.title}
                      onChange={handleChange}
                      sx={{ paddingLeft: '20px' }}
                      variant='standard'
                    />
                  </ListItemButton>
                  {row.completed === false ? (
                    <Button
                      onClick={() => handleChangeCompleted(row.id)}
                      className={clsx(classes.btnToPlay, classes.btn)}
                    >
                      To play
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleChangeCompleted(row.id)}
                      className={clsx(classes.btnCompleted, classes.btn)}
                    >
                      Completed
                    </Button>
                  )}
                  <DeleteIcon
                    className={classes.deleteIcon}
                    onClick={() => {
                      setOpenId(row.id);
                    }}
                  />
                  <DeleteModal
                    handleDeleteGame={handleDeleteGame}
                    handleClose={() => setOpenId(null)}
                    openID={openId}
                  />
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </>
  );
}
