'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {

    const [ search , setSearch ]  = useState('');
    // const [ category, setCategory ] = useState(1);
    const router = useRouter();

    const handleSubmit = (event) => {
        router.push(`/search/${search}`);
        event.preventDefault();
    }

    const handleCancel = () => {
        setSearch('');
    }

    return (
        <div className="w-full flex  justify-center items-center p-12">
            <form className="max-sm:grid flex flex-1 max-w-6xl justify-center items-center gap-2 text-xl">
                {/* <select 
                    name="select__category" 
                    id="select__category" 
                    placeholder="Filter"
                    className="bg-amber-400 text-slate-800 p-2">
                    <option value="1">All</option>
                    <option value="2">Movies</option>
                    <option value="3">TV Series</option>
                </select> */}
                <div className="flex items-center flex-1 relative">
                    <input 
                        type="text" 
                        placeholder="Search for ... " 
                        onChange={(event)=> setSearch(event.target.value)}
                        onSubmit={(event)=> handleSubmit(event)}
                        value={search}
                        className="p-2 pr-10 text-gray-500 w-full" 
                    />
                    <button
                        type='reset'
                        className="material-symbols-outlined absolute text-black right-2 cursor-pointer disabled:hidden"
                        disabled={search===''}
                        onClick={handleCancel}
                    >
                    cancel</button>
                </div>
                <button 
                    type="submit" 
                    onClick={(event)=>handleSubmit(event)}
                    className="bg-amber-400 text-slate-800 font-bold p-2 px-4 rounded-lg disabled:text-slate-300 disabled:bg-slate-400" 
                    disabled={search===''}
                >Search</button>
            </form>
        </div>
    )
}
