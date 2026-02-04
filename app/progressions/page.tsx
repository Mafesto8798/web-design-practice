"use client"
import{useState,useEffect} from "react"
import { getAllProgressions,deleteProgression } from "../lib/storage"
import { SavedProgression } from "../types/music"
import { SavedProgressions } from "../components/SavedProgressions"
import Link from "next/link"

export default function ProgressionsPage() {
    const [savedProgressions,setSavedProgressions] = useState<SavedProgression[]>([]);

      useEffect(() => {
    const loaded = getAllProgressions();
    setSavedProgressions(loaded)
  },[])

   const handleDelete = (id:string) => {
      deleteProgression(id);
      const updated = getAllProgressions();
      setSavedProgressions(updated);
    }

    return(
        <div className="flex min-h-screen items-start justify-center font-sans dark:bg-slate-800">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start py-10 px-6 bg-slate-100 dark:bg-slate-800 sm:items-start"> 
              <Link href="/" className="self-start bg-slate-200 text-slate-800 border-4 border-slate-800 font-bold py-2 px-4 rounded mb-10">Back</Link>
              <h1 className="text-4xl text-center font-bold mb-6 text-slate-700 dark:text-slate-200">My Progressions</h1>
              <SavedProgressions savedProgressions={savedProgressions} deleteProgression={handleDelete}/>
            </main>
        </div>
    )
}