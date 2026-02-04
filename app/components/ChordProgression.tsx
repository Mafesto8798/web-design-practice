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
            <span className="flex items-center justify-center w-1/2 my-6">
            <button className="mx-2 my-2 px-6 py-3  border-4 border-sky-700 bg-slate-800 text-slate-200 text-xl  font-semibold rounded-lg" onClick={() => clearProgression()}>Clear</button>
            <button className="mx-2 my-2 px-6 py-3  border-4 border-sky-700 bg-slate-800 text-slate-200 text-xl  font-semibold  rounded-lg" onClick={() => saveProgression(progression,"Test")}>Save</button>
            </span>
            <div className="flex flex-wrap items-center justify-center w-full my-6">
                {progression.map((chord,index) => (
                    (
                        <p key={index} className="min-w-12 h-12 max-w-22 p-2 mx-2 my-3 flex items-center justify-center rounded-lg border-4 border-slate-800 bg-slate-200 text-slate-800 text-2xl">{chord.name}</p>
                    )
                ))}
            </div>
        </div>
        </>
    )
}