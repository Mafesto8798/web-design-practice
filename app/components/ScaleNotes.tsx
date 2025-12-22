import { ScaleInfo } from "../types/music"


type ScaleNotesProps = {
    currentScale: ScaleInfo,
}

export const ScaleNotes = ({currentScale} : ScaleNotesProps) => {
    return(
        <div className="text-slate-700 dark:text-slate-300 flex flex-col items-center gap-4 w-full justify-evenly my-6">
            <p className="m-2 font-semibold text-2xl">Notes</p>
            <div className="flex items-center justify-between w-full">
                {currentScale?.notes.map((note,index) => (
                    <p key={index} className="w-10 h-10 flex items-center justify-center rounded-lg inset-shadow-sm/50 inset-shadow-slate-800 shadow-slate-600 shadow-md/100 bg-green-500 text-slate-300 text-2xl text-shadow-md/30 text-shadow-slate-600">{note}</p>
                ))}
            </div>
        </div>
    )
}