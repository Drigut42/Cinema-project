import Movie from "../../components/Movie";
import movieIDs from "../../components/fetch/movieIDs";

import { todayDate } from "../../components/date";

function ProgramToday() {
  return (
    <div>
      <h1>
        {todayDate.day} {todayDate.date}.{todayDate.month}.{todayDate.year}
      </h1>
      <div className="flex flex-wrap justify-center m-5">
        <h2>11am</h2>
        <Movie movieID={movieIDs.movie1} movieIndex={1} />
        <h2>2pm</h2>
        <Movie movieID={movieIDs.movie2} movieIndex={2} />
        <h2>5pm</h2>
        <Movie movieID={movieIDs.movie3} movieIndex={3} />
        <h2>8pm</h2>
        <Movie movieID={movieIDs.movie4} movieIndex={4} />
      </div>
    </div>
  );
}

export default ProgramToday;
