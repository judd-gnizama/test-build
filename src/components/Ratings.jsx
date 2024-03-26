
export default function Ratings({ movie, wide }) {

  return (
    <div className="flex gap-4 text-lg max-sm:flex-wrap">
        
        <div className="flex gap-1">
            <span class="material-symbols-outlined">star</span>
            {movie.vote_average}
        </div>
        <div className="flex gap-1">
            <span class="material-symbols-outlined">thumb_up</span>
            {movie.vote_count}

        </div>
        
        {wide === "true" && 
        <>
            <div className="flex gap-1">
                <span class="material-symbols-outlined">keyboard_double_arrow_up</span>
                {`${movie.popularity}`}
            </div>
            <div className="flex gap-1">
                <span class="material-symbols-outlined">paid</span>
                {movie.revenue}
            </div>        
        </>
        }
        
        
    </div>
  )
}
