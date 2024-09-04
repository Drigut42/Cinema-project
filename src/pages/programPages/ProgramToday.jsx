import Movie from "../../components/Movie";
import { todayDateString } from "../../components/date";
import movies from "../../components/fetch/movies";

function ProgramToday() {
  return (
    <div className="">
      <h1>{todayDateString}</h1>
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

export default ProgramToday;
