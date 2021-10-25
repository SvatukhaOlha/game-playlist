import React, { createContext, useState, useEffect, useCallback } from 'react';
import returnData from '../GetData';

export const PlayListsContext = createContext({});

export const PlayListsProvider = ({ children }) => {
  	const { result } = returnData();
  	const [games, setGames] = useState([]);
  	const [page, setPage] = useState(0);
	  const [input, setInput] = useState('');

  // id
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    setGames(result);
  }, [result]);

  // Change page using pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const rowsPerPage = 20;
  const gamesOnPage = games.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleDeleteGame = (id) => {
    const data = games.filter((game) => game.id !== id);
    setGames(data);
    setOpenId(null);
  };

  const handleInputText = (e) => {
    setInput(e.target.value);
  };

	const handleAddGame = useCallback(() => {
		setGames([
			{
				id: games.length + 1,
				title: input,
				completed: false,
			},
			...games,
		]);
		setInput('');
	},[games, input]
  )

  const value = {
    games,
    setGames,
    gamesOnPage,
    handleChangePage,
    page,
    setPage,
    rowsPerPage,
    handleAddGame,
    input,
    handleInputText,
    handleDeleteGame,
    openId,
    setOpenId,
  };

  return (
    <PlayListsContext.Provider value={value}>
      {children}
    </PlayListsContext.Provider>
  );
};
