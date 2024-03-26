import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;


export default async function SearchPage( {params} ) {

    const searchTerm = params.searchTerm;

    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${API_KEY}`
    );

    if (res.ok) {
        const data = await res.json();
        var results = data.results;
    } else {
        var results = null;
    }

    return (
        <div>
            <Results results={results}/>
        </div>
    )
}
