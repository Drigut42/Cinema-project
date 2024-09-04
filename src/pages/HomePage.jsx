import Movie from "../components/Movie";
import movies from "../components/fetch/movies";
import MyCarousel from "../components/Carousel";

const Homepage = () => {
  return (
    <div className="color1 md:pb-32 pb-48">
      <MyCarousel />
      <div className="flex flex-wrap justify-around m-5">
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
};

export default Homepage;
