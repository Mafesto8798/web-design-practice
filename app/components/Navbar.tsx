"use client"
import Link from "next/link"

export const Navbar = () => {
    return(
        <nav className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full bg-slate-800 p-6 lg:p-10">
                <h1 className="text-white text-2xl  lg:text-4xl font-bold text-center lg:px-20 py-4 lg:py-0">Music Theory Key Explorer</h1>
                <span className="flex items-center justify-evenly w-full lg:w-1/4 lg:px-20">
                <Link href="/" className="bg-slate-200 text-slate-800 border-4 border-slate-800 transition-all duration-100 hover:scale-110 active:scale-85 lg:active:scale-95 active:text-sky-700 hover:cursor-pointer font-bold py-2 px-4 rounded-lg">Explorer</Link>
                <Link href="/progressions" className=" bg-slate-200 text-slate-800  border-4 border-slate-800 transition-all duration-100 hover:scale-110 active:scale-85 lg:active:scale-95 hover:cursor-pointer font-bold py-2 px-4 rounded-lg">Progressions</Link>
                </span>
        </nav>
    )
}