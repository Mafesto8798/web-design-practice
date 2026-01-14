import { Chord } from "../types/music"

type ChordProgressionProps = {
    progression: Chord[],
    clearProgression : () => void;
    saveProgression: (progression:Chord[],name:string) => void;

} 

export const ChordProgression = ({progression,clearProgression,saveProgression} : ChordProgressionProps) => {

    return(
        <>
        <div className="text-slate-700 dark:text-slate-200 flex flex-col items-center gap- w-full justify-evenly p-2 my-6">
            <p className="text-2xl font-semibold">Current Chord Progression</p>
            <span className="flex items-center justify-center w-1/2">
            <button className="mx-2 my-2 px-4 py-1 inset-shadow-sm/50 inset-shadow-slate-800 shadow-slate-600 shadow-md/100 bg-blue-500 text-slate-300 text-xl text-shadow-md/30 font-semibold text-shadow-slate-600 rounded-md" onClick={() => clearProgression()}>Clear</button>
            <button className="mx-2 my-2 px-4 py-1 inset-shadow-sm/50 inset-shadow-slate-800 shadow-slate-600 shadow-md/100 bg-green-500 text-slate-300 text-xl text-shadow-md/30 font-semibold text-shadow-slate-600 rounded-md" onClick={() => saveProgression(progression,"Test")}>Save</button>
            </span>
            <div className="flex flex-wrap items-center justify-center w-full my-6">
                {progression.map((chord,index) => (
                    (
                        <p key={index} className="p-2 m-2 flex items-center justify-center rounded-lg inset-shadow-sm/50 inset-shadow-slate-800 shadow-slate-600 shadow-md/100 bg-amber-500 text-slate-300 text-2xl text-shadow-md/50 text-shadow-slate-600">{chord.name}</p>
                    )
                ))}
            </div>
        </div>
        </>
    )
}