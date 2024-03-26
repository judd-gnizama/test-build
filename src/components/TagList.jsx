
export default function TagList({ movie }) {

    const genres = movie.genres;

  return (
    <div className="flex flex-wrap gap-2 py-2">
        {genres && genres.length > 0 ? 
        genres.map((genre)=>(
            <span className="border rounded-full p-1 px-3" key={genre.id}>{genre.name}</span>
        ))
        : <div>No Genres</div>}
    </div>
  )
}
