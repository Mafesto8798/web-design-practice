import { allModes } from "../lib/musicData"
import { Mode } from "../types/music"
import { ModeButton } from "./ModeButton"

type ModeSelectProps = {
    selectedMode: Mode,
    handleModeChange: (newMode:Mode) => void;
}

export const ModeSelect = ({selectedMode,handleModeChange} : ModeSelectProps) => {
    return(
      <div className="flex flex-col items-center justify-evenly w-full gap-4 my-12">
        <p className="text-2xl font-semibold text-slate-700 dark:text-slate-200">Select Mode</p>
        <span className="w-3/4 items-center justify-center flex">
                <hr className="w-3/4 lg:w-1/3 border-slate-200 border-2"/>
            </span>
        <div className="w-full lg:w-1/5 flex items-center justify-around gap-8 my-12">
        {allModes?.map((mode,index) => (
          <ModeButton modeName={mode} key={index} handleClick={handleModeChange} isActive={mode === selectedMode}/>
        ))}
        </div>
      </div>
    )
}