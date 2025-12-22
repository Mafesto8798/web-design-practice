import { Chord, ScaleInfo } from "../types/music"


type ScaleChordsProps = {
    currentScale: ScaleInfo,
    addToProgression: (newChord: Chord ) => void,
}

export const ScaleChords = ({currentScale,addToProgression} : ScaleChordsProps) => {
    return(
        <div className="text-slate-700 dark:text-slate-200 flex flex-col items-center gap-4 w-full justify-evenly p-2 my-6 ">
            <p className="font-semibold text-2xl">Chords</p>
            <p className="text-sm">(Click to add)</p>
            <div className="flex flex-wrap justify-around w-full gap-4 text-slate-200 ">
                {currentScale?.chords.map((chord,index) => (
                    <button key={index} className="w-20 h-20 flex flex-col items-center justify-center bg-blue-500 dark:border-amber-400 rounded-md p-2 inset-shadow-sm/20 inset-shadow-slate-800 shadow-slate-600 shadow-md/100" onClick={() => addToProgression(chord)}>
                    <p className="text-center pb-1 text-xl font-semibold text-shadow-md/40 text-shadow-slate-600">{chord?.name}</p>
                    <p className="text-center text-lg font-semibold text-shadow-md/40 text-shadow-slate-600 text-amber-300 dark:text-amber-400">{chord?.numeral}</p>
                    </button>
                ))}
            </div>
        </div>
    )
}