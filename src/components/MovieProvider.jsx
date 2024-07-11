import { createContext, useContext, useState } from "react";

// The visibility of Movie Details
// The useContext hook enables the sharing of functionality across multiple pages within the application.
// The Movie component is used not only on the HomePage but also on the ProgramPages, with useContext to share functionality between them."

// 1. Create context
const MovieContext = createContext();

// 2. Provider-Component
const MovieProvider = ({ children }) => {
  // State to track the index of the movie whose details are visible
  const [visibleIndex, setVisibleIndex] = useState(null);

  // Handler to set the visible movie details
  // Only one movie's details should be visible at a time; clicking on another movie will close the currently visible details
  const showDetails = (index) => {
    setVisibleIndex(index);
  };

  // Handler to close the visible movie details
  const hideDetails = () => {
    setVisibleIndex(null);
  };

  return (
    <MovieContext.Provider value={{ visibleIndex, showDetails, hideDetails }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;

// 3. useContext for the Consumer (Movie.jsx)
export const useMovieContext = () => useContext(MovieContext);
