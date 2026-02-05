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
            <div className="flex flex-wrap items-center justify-around w-full gap-8 my-12 lg:justify-center lg:gap-16  ">
                {currentScale?.chords.map((chord,index) => (
                    <button key={index} className="w-20 h-20 lg:w-30 lg:h-30 flex flex-col items-center justify-center hover:scale-110 hover:cursor-pointer transition-all duration-100 active:scale-95 active:bg-slate-800 active:text-slate-200 text-slate-800 border-4 border-sky-700 bg-slate-200  rounded-lg " onClick={() => addToProgression(chord)}>
                    <p className="text-center  text-xl lg:text-3xl font-bold ">{chord?.name}</p>
                    <p className="text-center text-lg lg:text-2xl font-semibold">{chord?.numeral}</p>
                    </button>
                ))}
            </div>
        </div>
    )
}