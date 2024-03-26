import Link from "next/link"



const Header = () => {
    return (
    <div className="flex justify-between bg-slate-700 p-4 items-center">
        <Link 
        href='/'
        className="text-3xl font-bold bg-amber-500 text-gray-800 p-2 px-4 rounded-lg cursor-pointer">MovieRef</Link>
        <ul className="flex gap-4 text-xl">
            <li className="cursor-pointer hover:text-amber-400">Home</li>
            <li className="cursor-pointer hover:text-amber-400">About</li>
            <li className="cursor-pointer hover:text-amber-400">Favorites</li>
        </ul>
    </div>
    )
}

export default Header
