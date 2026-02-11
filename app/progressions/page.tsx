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
        <div className="flex flex-col min-h-screen items-start justify-start font-sans bg-slate-700">
            <main className="flex min-h-screen w-full flex-col items-center justify-start py-12 px-6 bg-slate-100 dark:bg-slate-700 sm:items-start"> 
              <h1 className="w-full text-4xl text-center font-bold mb-6 text-slate-700 dark:text-slate-200">My Progressions</h1>
              <SavedProgressions savedProgressions={savedProgressions} deleteProgression={handleDelete}/>
            </main>
        </div>
    )
}