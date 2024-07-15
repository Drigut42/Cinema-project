import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMovieContext } from "../components/MovieProvider";

// if pathname changes then ...
// -> App.jsx

export default function ChangePath() {
  const { pathname } = useLocation();
  const { hideDetails } = useMovieContext();
  useEffect(() => {
    // ...close open movie details
    hideDetails();
    //... scroll to the top
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
