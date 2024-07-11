import Movie from "../../components/Movie";
import { tomorrowDateString } from "../../components/date";
import movies from "../../components/fetch/movies";

function ProgramTomorrow() {
  return (
    <div>
      <h1>{tomorrowDateString}</h1>
      <div className="flex flex-wrap justify-center m-5">
        {movies.map((movie) => {
          return (
            <Movie
              key={movie.movieID}
              movieID={movie.movieID}
              movieIndex={movie.movieIndex}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProgramTomorrow;
