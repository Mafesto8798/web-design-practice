"use client"
import Image from "next/image";
import { KeySelector } from "./components/KeySelector";
import { MusicalKey,Mode,Chord } from "./types/music";
import {useState} from "react";
import { scaleData,allKeys,allModes } from "./lib/musicData";
import { ChordProgression } from "./components/ChordProgression";
import { ModeSelect } from "./components/ModeSelect";
import { ScaleNotes } from "./components/ScaleNotes";
import { ScaleChords } from "./components/ScaleChords";


export default function Home() {

  const [selectedKey,setSelectedKey] = useState<MusicalKey>("C");
  const [selectedMode,setSelectedMode] = useState<Mode>("major")
  const [progression,setProgression] = useState<Chord[]>([]);
  
  const handleKeyChange = (newKey: MusicalKey) => {
      setSelectedKey(newKey);
      setProgression([])
  }
  
  const handleModeChange = (newMode: Mode) => {
      setSelectedMode(newMode);
      setProgression([]);
  }
  
  const addToProgression = (chord:Chord) => {
      setProgression([...progression,chord]);
  }
  
  const clearProgression = () => {
      setProgression([]);
  }
  
  const currentScale = scaleData[`${selectedKey}-${selectedMode}`]


  return (
    <div className="flex min-h-screen items-start justify-start font-sans dark:bg-indigo-950">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start py-10 px-6 bg-amber-100 dark:bg-slate-800 sm:items-start">
        <h1 className="text-5xl font-extrabold text-center text-slate-700 dark:text-white sm:text-6xl my-4">
         Music Buddy
        </h1>
        <KeySelector selectedKey={selectedKey} handleKeyChange={handleKeyChange}/>
        <ModeSelect selectedMode={selectedMode} handleModeChange={handleModeChange}/>
        <ScaleNotes currentScale={currentScale} />
        <ScaleChords currentScale={currentScale} addToProgression={addToProgression}/>
        <ChordProgression progression={progression} clearProgression={clearProgression}/>
      </main>
    </div>
  );
}
