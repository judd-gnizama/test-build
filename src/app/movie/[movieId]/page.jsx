import Ratings from '@/components/Ratings';
import TagList from '@/components/TagList';
import Image from 'next/image'

const API_KEY = process.env.API_KEY;

export default async function MoviePage({ params }) {

    const movieId = params.movieId;
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    )

    const movie = await res.json();

  return (
    <div className="flex flex-col justify-center items-center text-lg gap-4 p-4 mx-auto max-w-6xl">
      {movie.backdrop_path || movie.poster_path ? 
        <Image
        width={500}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
        alt="movie picture"
        style={{
          width: "100%",
          height: "100%",
          // objectFit: "cover",
        }}
        ></Image>
        : 
        <span 
          className="material-symbols-outlined bg-slate-400 text-center content-center"
          style={{
            width: "100%",
            aspectRatio: "16/9",
          }}
        >hide_image</span>
        }
        <article className="flex flex-col gap-4 text-left p-6">
          <h1 className=" text-4xl font-bold text-amber-300">{movie.name || movie.title}</h1>
          <p className="">
            <strong>Description: </strong>
            <br/>
            {movie.overview || "No Description Available"}
          </p>
          <p>
            <strong>Rating:</strong>
            <Ratings movie={movie}/>
          </p>
          
          <p>
            <strong>Tags:</strong>
            <br/>
            <TagList/>
          </p>
        </article>
    </div>
  )
}
