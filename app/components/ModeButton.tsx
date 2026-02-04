import { Mode } from "../types/music"

type ModeButtonProps = {
    modeName: Mode,
    handleClick: (mode:Mode) => void;
    isActive: boolean,
}

export const ModeButton = ({modeName, handleClick,isActive} : ModeButtonProps) =>{

    return(
        <button className={`w-36 h-20 rounded-lg border-4 ${isActive ? "bg-slate-800 text-slate-200 border-sky-700" : "bg-slate-200 text-slate-800 border-slate-800"} text-3xl  font-semibold`} onClick={() => handleClick(modeName)}>
            {modeName == "major" ? "Major" : "Minor" }
        </button>
    )
}