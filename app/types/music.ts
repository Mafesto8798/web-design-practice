
export type MusicalKey = "C" | "C#" | "D" | "Eb" | "E" | "F" | "F#" | "G" | "Ab" | "A" | "Bb" | "B" ;

export type Mode = "major" | "minor";

export type Chord = {
    numeral: string;
    name: string;
    type: "major" | "minor" | "diminished";
}

export type SavedProgression = {
    id:string,
    name:String,
    chords: Chord[],
    createdAt: string
}

export type ScaleInfo = {
    notes: string[];
    chords: Chord[];
}