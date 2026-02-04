import { SavedProgression } from "../types/music"

type SavedProgressionProps = {
    savedProgressions:SavedProgression[],
    deleteProgression: (id:string) => void,
}

export const SavedProgressions = ({savedProgressions,deleteProgression} : SavedProgressionProps) => {


    return(
        <div className="flex items-center flex-col justify-center w-full text-slate-700 dark:text-slate-200 gap-4 ">
            <p className="text-2xl">Saved Progressions</p>
            {savedProgressions.map((progression,index) => (
                <div key={index}>
                    <p>{progression.name}</p>
                    <span className="flex items-center my-2 gap-2">
                        {progression.chords.map((chord,index) => (
                            <p key={index} className="border-4 border-slate-800 flex items-center justify-center rounded-lg bg-slate-200 text-slate-800 text-2xl p-2">{chord.name}</p>
                        )) }
                        <button className=" bg-red-400 w-10 h-10 rounded-lg border-slate-800 border-4 font-bold" onClick={() => deleteProgression(progression.id)}>X</button>
                    </span>
                </div>
            ))}
        </div>
    )
}