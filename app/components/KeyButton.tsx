import { MusicalKey } from "../types/music"

type KeyButtonProps = {
    keyName :MusicalKey;
    handleClick: (key:MusicalKey) => void;
    isActive: boolean;
}

export const KeyButton = ({keyName,handleClick,isActive} : KeyButtonProps) => {

    return(
        <>
            <button className={`w-13 h-13 lg:w-20 lg:h-20 rounded-lg border-4 transition-all duration-100 hover:scale-110 active:scale-85 lg:active:scale-95 hover:cursor-pointer  ${isActive ? " dark:bg-slate-800 bg-slate-800 dark:text-slate-200 text-slate-200 border-sky-700 scale-110" : " bg-slate-200 text-slate-800 border-slate-800"}  text-2xl lg:text-3xl font-semibold`} onClick={() => handleClick(keyName)}>
                {keyName}
            </button>
        </>
    )
}