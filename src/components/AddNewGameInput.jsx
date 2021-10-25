import React, { useContext } from 'react';
import { PlayListsContext } from '../context/PlayListsContext';
import FormControl from '@mui/material/FormControl';
import {
  TableBody,
  TextField,
  Box,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';

const useStyles = makeStyles({
  TableBody: {
    backgroundColor: '#EDF4F680!important',
  },
  TableCell: {
    height: '56px!important',
    padding: '8px!important',
  },
  AddIcon: {
    marginTop: 'auto',
    marginBottom: 'auto',
    cursor: 'pointer',
    fontSize: '35px!important',
    border: '1px solid transperent',
    color: '#08A0F7',
  },
});

const MyTableCell = styled(
  'th',
  'td'
)({
  padding: '0px!important',
  backgroundColor: '#EDF4F680!important',
  borderRadius: '10px',
});

export default function AddNewGameInput() {
  const { handleAddGame, input, handleInputText } =
    useContext(PlayListsContext);
  const classes = useStyles();

  return (
    <TableBody
      sx={{ backgroundColor: '#D8E1E9' }}
      className={classes.TableBody}
    >
      <MyTableCell
        className={classes.TableCell}
        style={{ backgroundColor: '#D8E1E9', margin: '10px 0 !important' }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '20px',
            border: '1px solid #D8E1E9',
            borderRadius: '10px',
          }}
          edge='start'
        >
          <AddIcon className={classes.AddIcon} onClick={handleAddGame} />
          <FormControl
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '20px',
              paddingBottom: '10px',
            }}
          >
            <TextField
              InputProps={{ disableUnderline: true }}
              value={input}
              onChange={handleInputText}
              label='Add new game'
              placeholder='Type game title'
              variant='standard'
            />
          </FormControl>
        </Box>
      </MyTableCell>
    </TableBody>
  );
}
