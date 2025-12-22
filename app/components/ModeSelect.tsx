import { allModes } from "../lib/musicData"
import { Mode } from "../types/music"
import { ModeButton } from "./ModeButton"

type ModeSelectProps = {
    selectedMode: Mode,
    handleModeChange: (newMode:Mode) => void;
}

export const ModeSelect = ({selectedMode,handleModeChange} : ModeSelectProps) => {
    return(
        <div className="flex items-center justify-evenly w-full my-8 ">
            {allModes?.map((mode,index) => (
                <ModeButton key={index} modeName={mode} handleClick={handleModeChange} isActive={mode === selectedMode}/>
            ))}
        </div>
    )
}