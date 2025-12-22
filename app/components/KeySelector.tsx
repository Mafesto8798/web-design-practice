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
        <div className="flex flex-col items-center justify-evenly w-full my-6">
            <div className="grid grid-cols-6 gap-4 my-4">
            {allKeys?.map((musicalKey,index) => (
                <KeyButton keyName={musicalKey} key={index} handleClick={handleKeyChange} isActive={musicalKey === selectedKey}/>
            ))}
            </div>
        </div>
    </>
)


}