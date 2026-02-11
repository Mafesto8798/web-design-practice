import { Chord } from "../types/music"

type ChordProgressionProps = {
    progression: Chord[],
    progressionName: string;
    updateProgressionName?: (name:string) => void;
    clearProgression : () => void;
    saveProgression: (progression:Chord[],name:string) => void;

} 

export const ChordProgression = ({progression,clearProgression,saveProgression,progressionName,updateProgressionName} : ChordProgressionProps) => {




    return(
        <>
        <div className="text-slate-700 dark:text-slate-200 flex flex-col items-center gap-4 w-full justify-evenly p-2 my-12">
            <p className="text-2xl font-semibold">Progression</p>
            <span className="w-3/4 items-center justify-center flex">
                <hr className="w-3/4 lg:w-1/3 border-slate-200 border-2"/>
            </span>
            <input type="text" placeholder="Progression Name" className="w-5/8 lg:w-1/5 p-2 border-2 border-slate-800 rounded-lg bg-slate-200 text-slate-800" value={progressionName} onChange={(e) => updateProgressionName?.(e.target.value)} />
            <span className="flex items-center justify-around w-3/4 lg:w-1/5 my-6">
            <button className="mx-2 my-2 px-6 py-3  border-4 border-sky-700 bg-slate-800 text-slate-200 text-xl  font-semibold active:text-sky-400 rounded-lg transition-all duration-100 hover:scale-110 active:scale-85 lg:active:scale-95 hover:cursor-pointer" onClick={() => clearProgression()}>Clear</button>
            <button className="mx-2 my-2 px-6 py-3  border-4 border-green-700 bg-slate-800 text-slate-200 text-xl  font-semibold active:text-green-400 rounded-lg transition-all duration-100 hover:scale-110 active:scale-85 lg:active:scale-95 hover:cursor-pointer" onClick={() => saveProgression(progression,progressionName)}>Save</button>
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