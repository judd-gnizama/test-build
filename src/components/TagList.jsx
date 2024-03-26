
const API_KEY = process.env.API_KEY;

export default async function TagList({ movie, genre_ids }) {
    
    if(movie) {
        var genres = movie.genres;
    } else if (genre_ids) {
        const res = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
        )
    
        if(res.ok) {
            const data = await res.json();
            var genreList = data.genres;
        } else {
            var genreList = null;
        }

        if (genreList && genre_ids) {
            var genres = genreList.filter((genre)=>genre_ids.includes(genre.id))
        } else {
            var genres = null;
        }
    }

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
