import { SavedProgression } from "../types/music"

type ProgressionProps = {
    progression: SavedProgression,
    deleteProgression: (id:string) => void,
    canDelete: boolean,
}

export const Progression = ({progression,deleteProgression,canDelete}:ProgressionProps) => {
    return(
        <div className="flex flex-col bg-slate-200 p-4 rounded-lg border-4 border-slate-400 w-full md:w-3/4 lg:w-1/2">
            <span className="flex items-center justify-between">
            <p className="text-center text-slate-800 font-bold">{progression.name}</p>
            {canDelete && <button className=" bg-red-400 w-8 h-8 rounded-lg font-bold" onClick={() => deleteProgression(progression.id)}>X</button>}
            </span>
            <p className="text-slate-600 font-semibold">{progression.key} {progression.mode}</p>
            <span className="flex flex-wrap items-center m-4 gap-2 bg-slate-400 p-4 rounded-lg justify-center">
            {progression.chords.map((chord,index) => (
                <>
                <p key={index} className="border-4 border-slate-400 flex items-center justify-center rounded-lg bg-slate-200 text-slate-800 text-2xl p-2">{chord.name}</p>
                {progression.chords.length > 1 && index < progression.chords.length - 1 && <span className="text-slate-700 text-2xl ">-</span>}
                </>
            )) }
                
            </span>
        </div>
    )
}