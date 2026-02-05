"use client"

import { Chord, Mode, MusicalKey } from "../types/music"

type HelperBarProps = {
    selectedKey: MusicalKey,
    selectedMode: Mode,
    progression: Chord[],
}

export const HelperBar = ({selectedKey,selectedMode,progression} : HelperBarProps) => {
    return(
    <div className="fixed bottom-0 left-0 right-0 bg-slate-700 text-white p-6 flex justify-center items-center shadow-xl">
        <span className="font-semibold text-2xl lg:text-4xl">Key: {selectedKey} {selectedMode}</span>
    </div>
    )
}