import { MusicalKey } from "../types/music"

type KeyButtonProps = {
    keyName :MusicalKey;
    handleClick: (key:MusicalKey) => void;
    isActive: boolean;
}

export const KeyButton = ({keyName,handleClick,isActive} : KeyButtonProps) => {

    return(
        <>
            <button className={`w-12 h-12 rounded-full inset-shadow-sm/50 inset-shadow-slate-800  shadow-slate-600  ${isActive ? "shadow-md/100 bg-green-500" : "shadow-md/50 bg-blue-500"} text-slate-200 text-2xl text-shadow-lg`} onClick={() => handleClick(keyName)}>
                {keyName}
            </button>
        </>
    )
}