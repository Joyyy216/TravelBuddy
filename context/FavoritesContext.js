import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (destination) => {
    const alreadyExists = favorites.find(
      (item) => item.id === destination.id
    );

    if (!alreadyExists) {
      setFavorites([...favorites, destination]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(
      favorites.filter((item) => item.id !== id)
    );
  };

  const isFavorite = (id) => {
    return favorites.some(
      (item) => item.id === id
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};