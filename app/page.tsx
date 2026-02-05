"use client"
import Image from "next/image";
import { KeySelector } from "./components/KeySelector";
import { MusicalKey,Mode,Chord,SavedProgression } from "./types/music";
import {useState,useEffect} from "react";
import { getAllProgressions,deleteProgression,saveProgression } from "./lib/storage";
import { scaleData,allKeys,allModes } from "./lib/musicData";
import { ChordProgression } from "./components/ChordProgression";
import { ModeSelect } from "./components/ModeSelect";
import { ScaleNotes } from "./components/ScaleNotes";
import { ScaleChords } from "./components/ScaleChords";
import Link from "next/link";
import { HelperBar } from "./components/HelperBar";
import { Slide, ToastContainer,toast } from "react-toastify";  


export default function Home() {

  const [selectedKey,setSelectedKey] = useState<MusicalKey>("C");
  const [selectedMode,setSelectedMode] = useState<Mode>("major")
  const [progression,setProgression] = useState<Chord[]>([]);
  const [savedProgressions,setSavedProgressions] = useState<SavedProgression[]>([]);

  const testToast = ({data} : any) => {
    return(
      <div className="text-slate-800">
        <p>{data.title}</p>
        <p>{data.text}</p>
      </div>
    )
  }

  
  const handleKeyChange = (newKey: MusicalKey) => {
      setSelectedKey(newKey);
      setProgression([])
  }
  
  const handleModeChange = (newMode: Mode) => {
      setSelectedMode(newMode);
      setProgression([]);
  }
  
  const addToProgression = (chord:Chord) => {
      toast.info(testToast,{data:{text:`${chord.name} added to progression`},autoClose:1000,icon:false});
      setProgression([...progression,chord]);
  }
  
  const clearProgression = () => {
      setProgression([]);
  }
  

  const handleSave = (progression:Chord[],name:string) => {
    if(progression.length === 0){
      toast.error(testToast,{data:{title:"Oops!",text:"Cannot save an empty progression"},autoClose:1400,icon:false});
      return;
    }
    toast.success(testToast,{data:{title:"Success!",text:`${name} saved`},autoClose:1600,icon:false});
    saveProgression(progression,name);
    const updated = getAllProgressions();
    setSavedProgressions(updated);
  }

  const currentScale = scaleData[`${selectedKey}-${selectedMode}`]


  return (
    <div className="flex min-h-screen items-start justify-center font-sans  dark:bg-slate-800 ">
      <main className="flex min-h-screen w-full flex-col items-center justify-center pb-30 pt-10 px-5 bg-slate-300 dark:bg-slate-700 ">
        <KeySelector selectedKey={selectedKey} handleKeyChange={handleKeyChange}/>
        <ModeSelect selectedMode={selectedMode} handleModeChange={handleModeChange}/>
        <ScaleNotes currentScale={currentScale} />
        <ScaleChords currentScale={currentScale} addToProgression={addToProgression}/>
        <ChordProgression progression={progression} clearProgression={clearProgression} saveProgression={handleSave}/>
        <Link href="/progressions" className="bg-slate-200 text-slate-800 border-2 border-slate-800 font-bold py-2 px-4 m-4 rounded transition-all duration-100 hover:scale-110 active:scale-95">View Saved Progressions</Link>
        <HelperBar selectedKey={selectedKey} selectedMode={selectedMode} progression={progression}/>
        <ToastContainer />
      </main>
    </div>
  );
}
