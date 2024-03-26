'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {

    const [ search , setSearch ]  = useState('');
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        router.push(`/search/${search}`);
    }

    return (
        <div className="w-full flex  justify-center items-center p-4">
            <form className="flex flex-1 justify-center gap-2">
                <select 
                    name="select__category" 
                    id="select__category" 
                    placeholder="Filter"
                    className="bg-amber-400 text-slate-800 p-2">
                    <option value="1">All</option>
                    <option value="2">Movies</option>
                    <option value="3">TV Series</option>
                    <option value="4">Keywords</option>
                </select>
                <input 
                    type="text" 
                    placeholder="Search for ... " 
                    onChange={(event)=> setSearch(event.target.value)}
                    className="p-2 text-gray-500 w-full" 
                />
                <button 
                    type="submit" 
                    onClick={(event)=>handleSubmit(event)}
                    className="bg-amber-400 text-slate-800 font-bold p-2 px-4 rounded-lg" 
                >Search</button>
            </form>
        </div>
    )
}
