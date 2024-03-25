import Link from "next/link";

const API_KEY = process.env.API_KEY;

export default function Card({ result }) {
  return (
    <Link
        href={`/movie/${result.id}`}>
        <h2 className=" text-lg font-bold text-amber-300">{result.name || result.title}</h2>
        <p className="line-clamp-2">{result.overview}</p>
    </Link>
  )
}
