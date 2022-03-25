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
    - svg
    - jpg