import { Chord, ScaleInfo } from "../types/music"


type ScaleChordsProps = {
    currentScale: ScaleInfo,
    addToProgression: (newChord: Chord ) => void,
}

export const ScaleChords = ({currentScale,addToProgression} : ScaleChordsProps) => {
    return(
        <div className="flex flex-col items-center gap-4 w-full justify-evenly my-12">
            <p className="font-semibold text-2xl">Chords</p>
            <p className="text-sm">(Click to add)</p>
            <div className="flex flex-wrap justify-center w-full gap-8 my-12 ">
                {currentScale?.chords.map((chord,index) => (
                    <button key={index} className="w-20 h-20 flex flex-col items-center justify-center border-4 border-sky-700 bg-slate-800 dark:border-amber-400 rounded-lg " onClick={() => addToProgression(chord)}>
                    <p className="text-center  text-xl font-semibold text-slate-200">{chord?.name}</p>
                    <p className="text-center text-lg text-slate-200 dark:text-slate-200">{chord?.numeral}</p>
                    </button>
                ))}
            </div>
        </div>
    )
}