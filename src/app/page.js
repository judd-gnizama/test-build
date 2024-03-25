import Results from "@/components/Results";
import SearchBox from "@/components/SearchBox";

const API_KEY = process.env.API_KEY;

export default async function Home() {

  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);

  const results = null;
  
  if(!res.ok) {
    // throw new Error('Failed to fetch data')
  } else {
    const data = await res.json();
    const results = data.results;
  }


  return (
    <div className="flex flex-col justify-center">
      <SearchBox/>
      <Results results={results}/>
    </div>
  )
}
