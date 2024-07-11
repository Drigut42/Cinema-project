import { useEffect, useRef, useState } from "react";
import fetchMovieData from "../components/fetch/FetchMovieData";
import { SquareLoader } from "react-spinners";
import { NavLink } from "react-router-dom";
import { useMovieContext } from "./MovieProvider";

// Id is for fetching the movie data, but index is for the self-defined order of the movies (added to the movieData)
// eslint-disable-next-line react/prop-types
const Movie = ({ movieID, movieIndex, clockTime }) => {
  const [movieData, setMovieData] = useState({});
  const [loaded, setLoaded] = useState(false);
  // Hide movie details
  const { hideDetails, visibleIndex, showDetails } = useMovieContext();

  const showMovieDetails = () => {
    showDetails(movieIndex);
  };

  const detailsVisible = visibleIndex === movieIndex;
  // const { visibleIndex, showDetails } = useMovieContext();

  // const [detailsVisible, setDetailsVisible] = useState(false);
  const refToScroll = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovieData(movieID);
        // the MovieData-Object should contain an index for further processing (calendar:Date assignment)
        const newData = {
          ...data,
          index: movieIndex,
        };
        // update movieData-state
        setMovieData(newData);
        // AND save movie data in localStorage
        localStorage.setItem(`movie${movieIndex}`, JSON.stringify(newData));

        // + Data has been loaded: update loaded-state
        setLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };
    const movie = localStorage.getItem(`movie${movieIndex}`);
    setTimeout(() => {
      if (movie) {
        // if data already exists in localStorage update movieData-state:
        setMovieData(JSON.parse(movie));
        setLoaded(true);
      } else {
        fetchData();
      }
    }, 500);
  }, [movieID, movieIndex]);

  // Clickhandler: show details
  // const showDetails = () => {
  //   setDetailsVisible(!detailsVisible);
  // };

  // Second useEffect for scrolling to the details of the movieComponent after rendering by clicking the image
  // ref assigned to this element AFTER rendering the element by click (detailsVisible updated)
  useEffect(() => {
    if (refToScroll.current) {
      refToScroll.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [detailsVisible]);

  // render MovieDATA---------------------------

  return (
    <div
      //position relative for the spinner-position
      className={`flex justify-center items-center text-white bg-zinc-800 rounded-sm border-4 border-gray-300 relative ${
        detailsVisible ? "w-full order-first" : " w-[300px] h-[400px]  m-5"
      }  `}
    >
      {" "}
      {/* If data is fetched/loaded, it is rendered otherwise the spinner is displayed */}
      {loaded ? (
        <div
          className={`h-full flex flex-wrap justify-center items-center bg-red-950 px-5   ${
            detailsVisible ? "" : "flex-col"
          }`}
        >
          {/* Program pages have a clock time*/}
          {clockTime ? <div>{clockTime}</div> : null}

          <img
            src={movieData.poster}
            alt="movie-poster"
            // img width and height adjusted
            style={{ width: "200px", height: "300px" }}
            onClick={() => showMovieDetails()}
            className={`object-fill ${
              !detailsVisible
                ? "hover:scale-110 transition-all outline-gray-200 hover:outline-dotted"
                : "m-4"
            }`}
          />
          <div
            ref={refToScroll}
            className={!detailsVisible ? "hidden" : "relative w-96 p-5"}
          >
            <h2 className="font-extrabold border-b-2">{movieData.title}</h2>

            <p className="text-sm  mt-1">
              <b>Director: </b>
              {movieData.director},<br /> <b>Writer: </b>
              {movieData.writer}
              <br />
              <b>Main Actors: </b>
              {movieData.actors}
            </p>
            <p className="text-semibold m-2 outline outline-1 p-2">
              {movieData.plot}
            </p>
            <p className="text-sm">
              <b>Genre: </b>
              {movieData.genre}
              <br />
              <b>Runtime: </b>
              {movieData.runtime}
            </p>
            <p>little calender-table</p>
            {/* to do:Button-css-class */}

            <NavLink to="/cart">
              <button className="text-white background  opacity-80  absolute bottom-5 right-5 border-2 px-2 hover:bg-red-700 active:text-white hover:scale-110 transition-all ">
                Buy Tickets
              </button>
            </NavLink>
            {/* text-white background opacity-80 border-2 px-6 hover:bg-red-700 active:text-white hover:scale-110 transition-all mt-4 */}
            <button
              onClick={() => hideDetails()}
              className="absolute top-5 right-5 w-5 h-5 pb-1 rounded-full opacity-80  border-2 text-xs text-white  hover:bg-red-700 
            background
             hover:scale-110 transition-all"
            >
              x
            </button>
          </div>
          <NavLink to="/cart">
            <button
              className={
                detailsVisible
                  ? "hidden"
                  : "text-white background opacity-80 border-2 px-6 hover:bg-red-700 active:text-white hover:scale-110 transition-all mt-4"
              }
            >
              Buy Tickets
            </button>
          </NavLink>
        </div>
      ) : (
        <SquareLoader color="rgb(69 10 10)" size={100} />
      )}
    </div>
  );
};

export default Movie;
