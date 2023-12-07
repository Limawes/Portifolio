import React from 'react';
import GameForm from './GameForm';

const AddGame = () => {
  const handleOnSubmit = (Game) => {
  };

  return (
    <React.Fragment>
      <GameForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddGame;