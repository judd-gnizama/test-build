
const API_KEY = process.env.API_KEY;

export default async function MoviePage({ params }) {

    const movieId = params.movieId;
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    )

    const movie = await res.json();

  return (
    <div className="flex flex-col justify-center p-4 mx-auto">
      <h1 className="text-lg font-bold">Title:  {movie.name || movie.title}</h1>
      <p>Description:  {movie.overview}</p>
    </div>
  )
}
