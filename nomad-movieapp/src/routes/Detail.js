// Detail.js;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovieDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div key={movieDetail.id}>
          <title>{movieDetail.title}</title>
          <p>{movieDetail.description_intro}</p>
          <p>{movieDetail.description_full}</p>
          <img src={movieDetail.background_image} alt={movieDetail.title} />
          <ul>
            {movieDetail.genres.map((g) => {
              return <li key={g}>{g}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Detail;
