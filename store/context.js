import { createContext, useState } from "react";

export const WatchlistContext = createContext({
  ids: [],
  addWatchList: (id) => {},
  removeWatchList: (id) => {},
});

const WatchlistContextProvider = ({ children }) => {
  const [myWatchListIds, setMyWatchListIds] = useState([]);

  const addWatchList = (id) => {
    setMyWatchListIds((currentListIds) => [id, ...currentListIds]);
  };

  const removeWatchList = (id) => {
    setMyWatchListIds((currentListIds) =>
      currentListIds.filter((listId) => listId !== id)
    );
  };

  const value = {
    ids: myWatchListIds,
    addWatchList: addWatchList,
    removeWatchList: removeWatchList,
  };

  return (
    <WatchlistContext.Provider value={value}>
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistContextProvider;
