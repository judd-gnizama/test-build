import Results from "@/components/Results";
import SearchBox from "@/components/SearchBox";

const API_KEY = process.env.API_KEY;

export default async function Home() {

  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);

  
  if(res.ok) {
    var data = await res.json();
    var results = data.results;
  } else {
    var results = res.status;
    // throw new Error('Failed to fetch data')
  }


  return (
    <div className="flex flex-col justify-center">
      <SearchBox/>
      <p>{results}</p>
      <Results results={results}/>
    
    </div>
  )
}
