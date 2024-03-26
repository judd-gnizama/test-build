import Card from "./Card";

export default function Results({results}) {

  return (
    <div className="">
      {results && results.length > 0 ? (
        <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3 max-w-6xl gap-3 p-3 mx-auto">
          {results.map((result) => <Card key={result.id} result={result}/>)}
        </div>
      ): <h1 className="text-3xl text-center">No Results Found.</h1>}
    </div>
    
    
  )
}
