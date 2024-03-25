import Card from "./Card";

export default function Results({results}) {

  return (
    <div className="grid grid-cols-3 gap-3 p-3">
        {results && results.length > 0 ? (
            results.map((result) => <Card key={result.id} result={result}/>
            )
        ): <div>No</div>}
    </div>
  )
}
