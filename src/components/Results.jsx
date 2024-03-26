import Card from "./Card";

export default function Results({results}) {

  return (
    <div className="grid grid-cols-3 max-w-6xl gap-3 p-3 mx-auto">
        {results && results.length > 0 ? (
            results.map((result) => <Card key={result.id} result={result}/>
            )
        ): <h1 className="text-3xl">No Results Found.</h1>}
    </div>
  )
}
