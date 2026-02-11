import { MusicalKey,Mode,Chord } from "../types/music";
import {useState} from "react";
import { scaleData,allKeys,allModes } from "../lib/musicData";
import { KeyButton } from "./KeyButton";
import { ModeButton } from "./ModeButton";
import { ChordProgression } from "./ChordProgression";

type KeySelectProps = {
    selectedKey: MusicalKey,
    handleKeyChange: (newKey:MusicalKey) => void,
}

export const KeySelector = ({selectedKey,handleKeyChange} : KeySelectProps) => {
return(
    <>
        <div className="flex flex-col items-center justify-evenly w-full my-12 gap-4">
            <p className="text-2xl font-semibold text-slate-700 dark:text-slate-200">Select Key</p>
            <span className="w-3/4 items-center justify-center flex">
                <hr className="w-3/4 lg:w-1/3 border-slate-200 border-2"/>
            </span>
            <div className="grid grid-cols-6 gap-4 my-12 lg:grid-cols-12 lg:gap-6">
            {allKeys?.map((musicalKey,index) => (
                <KeyButton keyName={musicalKey} key={index} handleClick={handleKeyChange} isActive={musicalKey === selectedKey}/>
            ))}
            </div>
        </div>
    </>
)


}