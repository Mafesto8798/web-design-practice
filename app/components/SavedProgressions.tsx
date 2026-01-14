import { SavedProgression } from "../types/music"

type SavedProgressionProps = {
    savedProgressions:SavedProgression[],
    deleteProgression: (id:string) => void,
}

export const SavedProgressions = ({savedProgressions,deleteProgression} : SavedProgressionProps) => {


    return(
        <div>
            <p className="text-2xl">Saved Progressions</p>
            {savedProgressions.map((progression,index) => (
                <div key={index}>
                    <p>{progression.name}</p>
                    <span className="flex items-center">
                        {progression.chords.map((chord,index) => (
                            <p key={index} className="p-2 m-2 flex items-center justify-center rounded-lg inset-shadow-sm/50 inset-shadow-slate-800 shadow-slate-600 shadow-md/100 bg-amber-500 text-slate-300 text-2xl text-shadow-md/50 text-shadow-slate-600">{chord.name}</p>
                        )) }
                        <button className=" bg-red-400 w-6 h-6 rounded-md" onClick={() => deleteProgression(progression.id)}>X</button>
                    </span>
                </div>
            ))}
        </div>
    )
}