import { ScaleInfo } from "../types/music"


type ScaleNotesProps = {
    currentScale: ScaleInfo,
}

export const ScaleNotes = ({currentScale} : ScaleNotesProps) => {
    return(
        <div className="text-slate-700 dark:text-slate-300 flex flex-col items-center gap-4 w-full justify-evenly my-12">
            <p className="font-semibold text-2xl">Notes</p>
            <div className="flex items-center justify-evenly lg:justify-center w-full my-12 px-4 gap-5 lg:gap-20">
                {currentScale?.notes.map((note,index) => (
                    <p key={index} className=" flex items-center justify-center rounded-lg   text-slate-800 text-2xl lg:text-4xl font-semibold">{note}</p>
                ))}
            </div>
        </div>
    )
}