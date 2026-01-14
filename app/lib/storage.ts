import { Chord,SavedProgression } from "../types/music"



export const saveProgression = (progression: Chord[], name: string) => {
    const existing = localStorage.getItem('progressions');
    const progressions: SavedProgression[] = existing ? JSON.parse(existing) : [];

    const newProgression: SavedProgression = {
        id: Date.now().toString(),
        name:name,
        chords: progression,
        createdAt: new Date().toISOString()
    }

    if(newProgression.chords.length > 1){
        progressions.push(newProgression);
    }

    localStorage.setItem('progressions',JSON.stringify(progressions));


}

export const getAllProgressions = (): SavedProgression[] => {
    const existing = localStorage.getItem('progressions')
    const progressions: SavedProgression[] = existing ? JSON.parse(existing) : [];

    return progressions;
}

export const deleteProgression = (id: string) => {
    const existing = localStorage.getItem('progressions');
    const progressions:SavedProgression[] = existing ? JSON.parse(existing) : [];

    const updatedProgressions = progressions.filter((item) => item.id !== id)

    localStorage.setItem('progressions',JSON.stringify(updatedProgressions))
}