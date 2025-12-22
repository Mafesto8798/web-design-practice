import {ScaleInfo,MusicalKey,Mode} from "../types/music";
//Major
const CM : ScaleInfo = {
    notes: ["C","D","E","F","G","A","B"],
    chords: [
        {
            numeral: "I",
            name: "C",
            type: "major"
        },{
            numeral: "ii",
            name: "Dm",
            type: "minor"
        },{
            numeral: "iii",
            name: "Em",
            type: "minor"
        },{
            numeral: "IV",
            name: "F",
            type: "major"
        },{
            numeral: "V",
            name: "G",
            type: "major"
        },{
            numeral: "vi",
            name: "Am",
            type: "minor"
        },{
            numeral: "vii°",
            name: "Bdim",
            type: "diminished"
        }
    ]
}
const CsM : ScaleInfo = {
      notes: ["C#","D#","E#","F#","G#","A#","B#"],
    chords: [
        {
            numeral: "I",
            name: "C#",
            type: "major"
        },{
            numeral: "ii",
            name: "D#m",
            type: "minor"
        },{
            numeral: "iii",
            name: "E#m",
            type: "minor"
        },{
            numeral: "IV",
            name: "F#",
            type: "major"
        },{
            numeral: "V",
            name: "G#",
            type: "major"
        },{
            numeral: "vi",
            name: "A#m",
            type: "minor"
        },{
            numeral: "vii°",
            name: "B#dim",
            type: "diminished"
        }
    ]
}
const DM : ScaleInfo = {
    notes: ["D","E","F#","G","A","B","C#"],
    chords: [
        {
            numeral: "I",
            name: "D",
            type: "major"
        },{
            numeral: "ii",
            name: "Em",
            type: "minor"
        },{
            numeral: "iii",
            name: "F#m",
            type: "minor"
        },{
            numeral: "IV",
            name: "G",
            type: "major"
        },{
            numeral: "V",
            name: "A",
            type: "major"
        },{
            numeral: "vi",
            name: "Bm",
            type: "minor"
        },{
            numeral: "vii°",
            name: "C#dim",
            type: "diminished"
        }
    ]
}
const EbM : ScaleInfo = {
    notes: ["Eb","F","G","Ab","Bb","C","D"],
    chords: [
        {
            numeral: "I",
            name: "Eb",
            type: "major"
        },{
            numeral: "ii",
            name: "Fm",
            type: "minor"
        },{
            numeral: "iii",
            name: "Gm",
            type: "minor"
        },{
            numeral: "IV",
            name: "Ab",
            type: "major"
        },{
            numeral: "V",
            name: "Bb",
            type: "major"
        },{
            numeral: "vi",
            name: "Cm",
            type: "minor"
        },{
            numeral: "vii°",
            name: "Ddim",
            type: "diminished"
        }
    ]
}
const EM : ScaleInfo = {
    notes: ["E","F#","G#","A","B","C#","D#"],
    chords: [
        {
            numeral: "I",
            name: "E",
            type: "major"
        },{
            numeral: "ii",
            name: "F#m",
            type: "minor"
        },{
            numeral: "iii",
            name: "G#m",
            type: "minor"
        },{
            numeral: "IV",
            name: "A",
            type: "major"
        },{
            numeral: "V",
            name: "B",
            type: "major"
        },{
            numeral: "vi",
            name: "C#m",
            type: "minor"
        },{
            numeral: "vii°",
            name: "D#dim",
            type: "diminished"
        }
    ]
}
const FM : ScaleInfo = {
    notes: ["F","G","A","Bb","C","D","E"],
    chords: [
        {
            numeral: "I",
            name: "F",
            type: "major"
        },{
            numeral: "ii",
            name: "Gm",
            type: "minor"
        },{
            numeral: "iii",
            name: "Am",
            type: "minor"
        },{
            numeral: "IV",
            name: "Bb",
            type: "major"
        },{
            numeral: "V",
            name: "C",
            type: "major"
        },{
            numeral: "vi",
            name: "Dm",
            type: "minor"
        },{
            numeral: "vii°",
            name: "Edim",
            type: "diminished"
        }
    ]
}
const FsM : ScaleInfo = {
    notes: ["F#","G#","A#","B","C#","D#","E#"],
    chords: [
        {
            numeral: "I",
            name: "F#",
            type: "major"
        },{
            numeral: "ii",
            name: "G#m",
            type: "minor"
        },{
            numeral: "iii",
            name: "A#m",
            type: "minor"
        },{
            numeral: "IV",
            name: "B",
            type: "major"
        },{
            numeral: "V",
            name: "C#",
            type: "major"
        },{
            numeral: "vi",
            name: "D#m",
            type: "minor"
        },{
            numeral: "vii°",
            name: "E#dim",
            type: "diminished"
        }
    ]
}
const GM : ScaleInfo = {
    notes: ["G","A","B","C","D","E","F#"],
    chords: [
        {
            numeral: "I",
            name: "G",
            type: "major"
        },{
            numeral: "ii",
            name: "Am",
            type: "minor"
        },{
            numeral: "iii",
            name: "Bm",
            type: "minor"
        },{
            numeral: "IV",
            name: "C",
            type: "major"
        },{
            numeral: "V",
            name: "D",
            type: "major"
        },{
            numeral: "vi",
            name: "Em",
            type: "minor"
        },{
            numeral: "vii°",
            name: "F#dim",
            type: "diminished"
        }
    ]
}
const AbM : ScaleInfo = {
    notes: ["Ab","Bb","C","Db","Eb","F","G"],
    chords: [
        {
            numeral: "I",
            name: "Ab",
            type: "major"
        },{
            numeral: "ii",
            name: "Bbm",
            type: "minor"
        },{
            numeral: "iii",
            name: "Cm",
            type: "minor"
        },{
            numeral: "IV",
            name: "Db",
            type: "major"
        },{
            numeral: "V",
            name: "Eb",
            type: "major"
        },{
            numeral: "vi",
            name: "Fm",
            type: "minor"
        },{
            numeral: "vii°",
            name: "Gdim",
            type: "diminished"
        }
    ]
}
const AM : ScaleInfo = {
    notes: ["A","B","C#","D","E","F#","G#"],
    chords: [
        {
            numeral: "I",
            name: "A",
            type: "major"
        },{
            numeral: "ii",
            name: "Bm",
            type: "minor"
        },{
            numeral: "iii",
            name: "C#m",
            type: "minor"
        },{
            numeral: "IV",
            name: "D",
            type: "major"
        },{
            numeral: "V",
            name: "E",
            type: "major"
        },{
            numeral: "vi",
            name: "F#m",
            type: "minor"
        },{
            numeral: "vii°",
            name: "G#dim",
            type: "diminished"
        }
    ]
}
const BbM : ScaleInfo = {
    notes: ["Bb","C","D","Eb","F","G","A"],
    chords: [
        {
            numeral: "I",
            name: "Bb",
            type: "major"
        },{
            numeral: "ii",
            name: "Cm",
            type: "minor"
        },{
            numeral: "iii",
            name: "Dm",
            type: "minor"
        },{
            numeral: "IV",
            name: "Eb",
            type: "major"
        },{
            numeral: "V",
            name: "F",
            type: "major"
        },{
            numeral: "vi",
            name: "Gm",
            type: "minor"
        },{
            numeral: "vii°",
            name: "Adim",
            type: "diminished"
        }
    ]
}
const BM : ScaleInfo = {
    notes: ["B","C#","D#","E","F#","G#","A#"],
    chords: [
        {
            numeral: "I",
            name: "B",
            type: "major"
        },{
            numeral: "ii",
            name: "C#m",
            type: "minor"
        },{
            numeral: "iii",
            name: "D#m",
            type: "minor"
        },{
            numeral: "IV",
            name: "E",
            type: "major"
        },{
            numeral: "V",
            name: "F#",
            type: "major"
        },{
            numeral: "vi",
            name: "G#m",
            type: "minor"
        },{
            numeral: "vii°",
            name: "A#dim",
            type: "diminished"
        }
    ]
}
//Minor
const Cm : ScaleInfo = {
    notes: ["C","D","Eb","F","G","Ab","Bb"],
    chords: [
        {
            numeral: "i",
            name: "Cm",
            type: "minor"
        },{
            numeral: "ii°",
            name: "Ddim",
            type: "diminished"
        },{
            numeral: "III",
            name: "Eb",
            type: "major"
        },{
            numeral: "iv",
            name: "Fm",
            type: "minor"
        },{
            numeral: "v",
            name: "Gm",
            type: "minor"
        },{
            numeral: "VI",
            name: "Ab",
            type: "major"
        },{
            numeral: "VII",
            name: "Bb",
            type: "major"
        }
    ]
}
const Csm : ScaleInfo = {
      notes: ["C#","D#","E","F#","G#","A","B"],
    chords: [
        {
            numeral: "i",
            name: "C#m",
            type: "minor"
        },{
            numeral: "ii°",
            name: "D#dim",
            type: "diminished"
        },{
            numeral: "III",
            name: "E",
            type: "major"
        },{
            numeral: "iv",
            name: "F#m",
            type: "minor"
        },{
            numeral: "v",
            name: "G#m",
            type: "minor"
        },{
            numeral: "VI",
            name: "A",
            type: "major"
        },{
            numeral: "VII",
            name: "B",
            type: "major"
        }
    ]
}
const Dm : ScaleInfo = {
      notes: ["D","E","F","G","A","Bb","C"],
    chords: [
        {
            numeral: "i",
            name: "Dm",
            type: "minor"
        },{
            numeral: "ii°",
            name: "Edim",
            type: "diminished"
        },{
            numeral: "III",
            name: "F",
            type: "major"
        },{
            numeral: "iv",
            name: "Gm",
            type: "minor"
        },{
            numeral: "v",
            name: "Am",
            type: "minor"
        },{
            numeral: "VI",
            name: "Bb",
            type: "major"
        },{
            numeral: "VII",
            name: "C",
            type: "major"
        }
    ]
}
const Ebm : ScaleInfo = {
      notes: ["Eb","F","Gb","Ab","Bb","Cb","Db"],
    chords: [
        {
            numeral: "i",
            name: "Ebm",
            type: "minor"
        },{
            numeral: "ii°",
            name: "Fdim",
            type: "diminished"
        },{
            numeral: "III",
            name: "Gb",
            type: "major"
        },{
            numeral: "iv",
            name: "Abm",
            type: "minor"
        },{
            numeral: "v",
            name: "Bbm",
            type: "minor"
        },{
            numeral: "VI",
            name: "Cb",
            type: "major"
        },{
            numeral: "VII",
            name: "Db",
            type: "major"
        }
    ]
}
const Em : ScaleInfo = {
      notes: ["E","F#","G","A","B","C","D"],
    chords: [
        {
            numeral: "i",
            name: "Em",
            type: "minor"
        },{
            numeral: "ii°",
            name: "F#dim",
            type: "diminished"
        },{
            numeral: "III",
            name: "G",
            type: "major"
        },{
            numeral: "iv",
            name: "Am",
            type: "minor"
        },{
            numeral: "v",
            name: "Bm",
            type: "minor"
        },{
            numeral: "VI",
            name: "C",
            type: "major"
        },{
            numeral: "VII",
            name: "D",
            type: "major"
        }
    ]
}
const Fm : ScaleInfo = {
      notes: ["F","G","Ab","Bb","C","Db","Eb"],
    chords: [
        {
            numeral: "i",
            name: "Fm",
            type: "minor"
        },{
            numeral: "ii°",
            name: "Gdim",
            type: "diminished"
        },{
            numeral: "III",
            name: "Ab",
            type: "major"
        },{
            numeral: "iv",
            name: "Bbm",
            type: "minor"
        },{
            numeral: "v",
            name: "Cm",
            type: "minor"
        },{
            numeral: "VI",
            name: "Db",
            type: "major"
        },{
            numeral: "VII",
            name: "Eb",
            type: "major"
        }
    ]
}
const Fsm : ScaleInfo = {
      notes: ["F#","G#","A","B","C#","D","E"],
    chords: [
        {
            numeral: "i",
            name: "F#m",
            type: "minor"
        },{
            numeral: "ii°",
            name: "G#dim",
            type: "diminished"
        },{
            numeral: "III",
            name: "A",
            type: "major"
        },{
            numeral: "iv",
            name: "Bm",
            type: "minor"
        },{
            numeral: "v",
            name: "C#m",
            type: "minor"
        },{
            numeral: "VI",
            name: "D",
            type: "major"
        },{
            numeral: "VII",
            name: "E",
            type: "major"
        }
    ]
}
const Gm : ScaleInfo = {
      notes: ["G","A","Bb","C","D","Eb","F"],
    chords: [
        {
            numeral: "i",
            name: "Gm",
            type: "minor"
        },{
            numeral: "ii°",
            name: "Adim",
            type: "diminished"
        },{
            numeral: "III",
            name: "Bb",
            type: "major"
        },{
            numeral: "iv",
            name: "Cm",
            type: "minor"
        },{
            numeral: "v",
            name: "Dm",
            type: "minor"
        },{
            numeral: "VI",
            name: "Eb",
            type: "major"
        },{
            numeral: "VII",
            name: "F",
            type: "major"
        }
    ]
}
const Abm : ScaleInfo = {
      notes: ["Ab","Bb","Cb","Db","Eb","Fb","Gb"],
    chords: [
        {
            numeral: "i",
            name: "Abm",
            type: "minor"
        },{
            numeral: "ii°",
            name: "Bbdim",
            type: "diminished"
        },{
            numeral: "III",
            name: "Cb",
            type: "major"
        },{
            numeral: "iv",
            name: "Dbm",
            type: "minor"
        },{
            numeral: "v",
            name: "Ebm",
            type: "minor"
        },{
            numeral: "VI",
            name: "Fb",
            type: "major"
        },{
            numeral: "VII",
            name: "Gb",
            type: "major"
        }
    ]
}
const Am : ScaleInfo = {
      notes: ["A","B","C","D","E","F","G"],
    chords: [
        {
            numeral: "i",
            name: "Am",
            type: "minor"
        },{
            numeral: "ii°",
            name: "Bdim",
            type: "diminished"
        },{
            numeral: "III",
            name: "C",
            type: "major"
        },{
            numeral: "iv",
            name: "Dm",
            type: "minor"
        },{
            numeral: "v",
            name: "Em",
            type: "minor"
        },{
            numeral: "VI",
            name: "F",
            type: "major"
        },{
            numeral: "VII",
            name: "G",
            type: "major"
        }
    ]
}
const Bbm : ScaleInfo = {
      notes: ["Bb","C","Db","Eb","F","Gb","Ab"],
    chords: [
        {
            numeral: "i",
            name: "Bbm",
            type: "minor"
        },{
            numeral: "ii°",
            name: "Cdim",
            type: "diminished"
        },{
            numeral: "III",
            name: "Db",
            type: "major"
        },{
            numeral: "iv",
            name: "Ebm",
            type: "minor"
        },{
            numeral: "v",
            name: "Fm",
            type: "minor"
        },{
            numeral: "VI",
            name: "Gb",
            type: "major"
        },{
            numeral: "VII",
            name: "Ab",
            type: "major"
        }
    ]
}
const Bm : ScaleInfo = {
      notes: ["B","C#","D","E","F#","G","A"],
    chords: [
        {
            numeral: "i",
            name: "Bm",
            type: "minor"
        },{
            numeral: "ii°",
            name: "C#dim",
            type: "diminished"
        },{
            numeral: "III",
            name: "D",
            type: "major"
        },{
            numeral: "iv",
            name: "Em",
            type: "minor"
        },{
            numeral: "v",
            name: "F#m",
            type: "minor"
        },{
            numeral: "VI",
            name: "G",
            type: "major"
        },{
            numeral: "VII",
            name: "A",
            type: "major"
        }
    ]
}





export const scaleData : Record<string, ScaleInfo> = {
    "C-major": CM,
    "C-minor": Cm,
    "C#-major":CsM,
    "C#-minor":Csm,
    "D-major":DM,
    "D-minor":Dm,
    "Eb-major": EbM,
    "Eb-minor":Ebm,
    "E-major":EM,
    "E-minor":Em,
    "F-major":FM,
    "F-minor":Fm,
    "F#-major":FsM,
    "F#-minor":Fsm,
    "G-major":GM,
    "G-minor":Gm,
    "Ab-major":AbM,
    "Ab-minor":Abm,
    "A-major":AM,
    "A-minor":Am,
    "Bb-major":BbM,
    "Bb-minor":Bbm,
    "B-major":BM,
    "B-minor":Bm,
}

export const allKeys: MusicalKey[] = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];

export const allModes: Mode[] = ["major" , "minor"]