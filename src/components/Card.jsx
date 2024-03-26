import Link from "next/link";
import Image from 'next/image';
import Ratings from "./Ratings";
import TagList from "./TagList";

export default function Card({ result }) {
  console.log(result)
  return (
    <Link
        className=" border rounded-md p-4 flex flex-col gap-4 hover:bg-amber-800 transition-all duration-300 overflow-hidden"
        href={`/movie/${result.id}`}>
        
        {result.backdrop_path || result.poster_path ? 
        <Image
        width={500}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
        alt="movie picture"
        style={{
          width: "500",
          aspectRatio: "16/9",
          objectFit: "cover",
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
        <article className=" text-left">
          <h2 className=" text-lg font-bold text-amber-300">{result.name || result.title}</h2>
          <p className="line-clamp-2">{result.overview || "No Description Available"}</p>
        </article>
        <Ratings movie={result} wide="false"/>
        <TagList genre_ids={result.genre_ids}/>
    </Link>
  )
}
