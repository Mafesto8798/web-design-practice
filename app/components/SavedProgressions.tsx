import { SavedProgression } from "../types/music"
import { Progression } from "./Progression"

type SavedProgressionProps = {
    savedProgressions:SavedProgression[],
    deleteProgression: (id:string) => void,
}

export const SavedProgressions = ({savedProgressions,deleteProgression} : SavedProgressionProps) => {


    return(
        <div className="flex items-center flex-col justify-center w-full text-slate-700 dark:text-slate-200 gap-4 ">
            <p className="text-2xl">Saved Progressions</p>
            {savedProgressions.map((progression,index) => (
                <Progression key={index} progression={progression} deleteProgression={deleteProgression} />
            ))}
        </div>
    )
}