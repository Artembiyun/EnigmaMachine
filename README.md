# EnigmaMachine
Copy of iconic WW2 cipher machine 

First Commit

References: 
Enigma Machine Parts Overview http://enigma.louisedade.co.uk/howitworks.html
Enigma Machine Specifications: https://www.cryptomuseum.com/crypto/enigma/wiring.htm
Enigma Machine Runthrough Diagram: http://enigma.louisedade.co.uk/wiringdiagram.png

I love history and I love to view history from a "live" perspective, that is, whenever I learn about a period I always try to be as blind to the future as the participants of the historical period I'm learning about were. This opens up history to a number of different persectives and not just the historical consesus. The Enigma being a historical object I could rebuild instantly got my attention. 

The decription mechanism today is very simple but for 1930 - 1945, it was something new and something else.

The mechanism works in the following chain of conversions

1. Key is pressed (lets represent the key value with i)
2. i goes through plug board
  // plug board pairs letter, normally there are 10 key pairs, but the pairs can vary from anywhere from 4 to 12.
  // the plug board was introduced to the enigma machine when it was adopted by the german army
3. The static wheel
  //the static wheel does nothing
4. The three rotors
  // each rotor has 26 keys representing letters of the alphabet
  //there are two sets of these keys per rotor, one is the "base" the other is a scrambled alphabet.
  //with each Key press the Rotors turn by 1, (so they turn before the key pressed enters the rotors)
  // the rotor positions can be represented by an array [26, 26, 26] rotor 1, 2 and 3
    //i will elaborate on this section more later
5. The reflector then takes the letter from the rotors and returns a hard wired pair character back in a reverse path through the rotors
6. (4 but backwards)
7. (2 again)
8. Bam, super encripted letter

The only way an enigma message can be decripted is by typing it back though the enigma machine set back to the same settings as the one the message was originally written on. 

There are 150,738,274,937,250 possible outcomes FOR EACH KEY

Enjoy! (the machine currently works, despite lacking customization complexity)
