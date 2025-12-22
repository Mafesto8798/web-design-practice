import { Mode } from "../types/music"

type ModeButtonProps = {
    modeName: Mode,
    handleClick: (mode:Mode) => void;
    isActive: boolean,
}

export const ModeButton = ({modeName, handleClick,isActive} : ModeButtonProps) =>{

    return(
        <button className={`w-36 h-20 rounded-md text-shadow-md/30 text-shadow-slate-600 inset-shadow-sm/50 inset-shadow-slate-800 shadow-md/100 shadow-slate-600 ${isActive ? "bg-green-500" : "bg-blue-500"} text-3xl text-slate-200 font-semibold`} onClick={() => handleClick(modeName)}>
            {modeName == "major" ? "Major" : "Minor" }
        </button>
    )
}