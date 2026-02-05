import { MusicalKey } from "../types/music"

type KeyButtonProps = {
    keyName :MusicalKey;
    handleClick: (key:MusicalKey) => void;
    isActive: boolean;
}

export const KeyButton = ({keyName,handleClick,isActive} : KeyButtonProps) => {

    return(
        <>
            <button className={`w-13 h-13 rounded-lg border-4 transition-all duration-100 lg:hover:scale-130 hover:cursor-pointer  ${isActive ? " bg-slate-800 text-slate-200 border-sky-700 scale-130" : " bg-slate-200 text-slate-800 border-slate-800"}  text-2xl font-semibold`} onClick={() => handleClick(keyName)}>
                {keyName}
            </button>
        </>
    )
}