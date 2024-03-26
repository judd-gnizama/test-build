'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBox() {

    const [ search , setSearch ]  = useState('');
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        router.push(`/search/${search}`);
    }

    return (
        <div>
            <form className="flex justify-center mt-10 gap-2">
            <input className="p-2 text-gray-500" type="text" placeholder="Search for ... " onChange={(event)=> setSearch(event.target.value)}/>
            <button className="bg-amber-400 p-2 rounded-lg" type="submit" onClick={(event)=>handleSubmit(event)}>Search</button>
            </form>
        </div>
    )
}
