import Movie from "../components/Movie";
import movieIDs from "../components/fetch/movieIDs";
import MyCarousel from "../components/Carousel";

const Homepage = () => {
  return (
    <div className="color1 md:pb-32 pb-48">
      <MyCarousel />
      <div className="flex flex-wrap justify-around m-5">
        <Movie movieID={movieIDs.movie1} movieIndex={1} />
        <Movie movieID={movieIDs.movie2} movieIndex={2} />
        <Movie movieID={movieIDs.movie3} movieIndex={3} />
        <Movie movieID={movieIDs.movie4} movieIndex={4} />

        <Movie movieID={movieIDs.movie5} movieIndex={5} />
        <Movie movieID={movieIDs.movie6} movieIndex={6} />
        <Movie movieID={movieIDs.movie7} movieIndex={7} />
        <Movie movieID={movieIDs.movie8} movieIndex={8} />
      </div>
    </div>
  );
};

export default Homepage;
