import { allModes } from "../lib/musicData"
import { Mode } from "../types/music"
import { ModeButton } from "./ModeButton"

type ModeSelectProps = {
    selectedMode: Mode,
    handleModeChange: (newMode:Mode) => void;
}

export const ModeSelect = ({selectedMode,handleModeChange} : ModeSelectProps) => {
    return(
      <div className="flex flex-col items-center justify-evenly w-full my-6">
          <div className="grid grid-cols-2 gap-4 my-4">
          {allModes?.map((mode,index) => (
              <ModeButton modeName={mode} key={index} handleClick={handleModeChange} isActive={mode === selectedMode}/>
          ))}
          </div>
      </div>
    )
}