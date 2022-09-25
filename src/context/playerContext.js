import { createContext, useContext, useReducer } from 'react';
import { initialState, playerReducer } from '../reducer/player';

const playerContext = createContext(null);

const PlayerContextProvider = ({ children }) => {
  const [
    {
      currentSongs,
      currentIndex,
      isActive,
      isPlaying,
      activeSong,
      genreListId,
    },
    playerDispatch,
  ] = useReducer(playerReducer, initialState);

  return (
    <playerContext.Provider
      value={{
        currentSongs,
        currentIndex,
        isActive,
        isPlaying,
        activeSong,
        genreListId,
        playerDispatch,
      }}
    >
      {children}
    </playerContext.Provider>
  );
};

const usePlayer = () => useContext(playerContext);
export { usePlayer, PlayerContextProvider };
