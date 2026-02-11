import { SavedProgression } from "../types/music"

type ProgressionProps = {
    progression: SavedProgression,
    deleteProgression: (id:string) => void,
}

export const Progression = ({progression,deleteProgression}:ProgressionProps) => {
    return(
        <div>
            <p>{progression.name}</p>
            <span className="flex items-center my-2 gap-2">
            {progression.chords.map((chord,index) => (
                <p key={index} className="border-4 border-slate-800 flex items-center justify-center rounded-lg bg-slate-200 text-slate-800 text-2xl p-2">{chord.name}</p>
            )) }
                <button className=" bg-red-400 w-10 h-10 rounded-lg border-slate-800 border-4 font-bold" onClick={() => deleteProgression(progression.id)}>X</button>
            </span>
        </div>
    )
}