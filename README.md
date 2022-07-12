# scalr

a website that takes a chord symbol and returns a list of viable scales that can
be used to improvise over the given chord.

## form


input fields 

- root note
    - a-g
    - natural, sharp, flat
- chord quality
    - major
    - minor
    - augmented
    - diminshed
- 7th type
    - none
    - major
    - minor (dominant)

- extensions - these will need to take sharp or flat parameters 
     - 9, 11, 13
     - sharp, flat

 - clefs - these will the output scales to a user's preferred clef
    - treble
    - bass
    - tenor
    - alto
 - instrument transposition
    - C
    - F
    - Bb
    - Eb
...

result object:
- scale name
- list of notes included in scale


output formats:
- text
    - html list
    - sibelius/xml
- graphic
    - VexFlow svg
    - jpg
    

Scale systems
- Major and minor
    - these scale centers are based on the tonalities found in J.S. Bach's Well Tempered Clavier as well as the modern circle of fiths (https://en.wikipedia.org/wiki/Circle_of_fifths) Major scales are organized chromatically starting with C, and minors are organized chormatically starting with A (as Bach did in WTC), including relevant enharmonic equvalents.
 - from Bach WTC key centers - 
    - CM/m, C#M/m(four sharps), DM/m, EbM/D#m(6 sharps), EM/m, FM/m, F#M/m, GM/m, AbM/G#m(5 sharps), AM/m, BbM/m(5 flats), BM/m
    - Eb minor, GbMajor, Cb Major, Db major are still included