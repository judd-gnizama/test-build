import Results from "@/components/Results";
import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <div className="flex justify-center">
      <SearchBox/>
      <Results/>
    </div>
  )
}
