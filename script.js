// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

START
    INPUT summa;
    INPUT antalVänner;
    INPUT dricks;           // decimalform
    
    FUNCTION betala (summa, antalVänner, dricks):
        CALCULATE dricksSumma = summa * dricks;
        CALCULATE totalt = summa + dricksSumma;
        CALCULATE perPerson = totalt / antalVänner;
        PRINT ("Varje person ska betala " + perPerson);
    ENDFUNCTION

    CALL FUNCTION betala;

END


*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om

/*

START
    //Start by explaining how the game works by giving an example

    PRINT ("You are given two words. You have to get from Word1 to Word2 by changing one letter at a time. You can only input valid words, and the words have to be the same length. Try using as few steps as possible.")
    PRINT ("Here is an example - Word 1: FOUR, Word 2: FIVE")
    PRINT ("FOUR -> FOUL -> FOOL -> FOOT -> FORT -> FORE -> FIRE -> FIVE")
    PRINT ("Good luck!")

    //Define the words for the new puzzle

    PRINT ("Your words are: Word 1: EYE, Word 2: LID")

    SET startWord = "eye";
    SET endWord = "lid";
    SET steps = 0;
    SET currentWord = startWord;
    SET myLittleArray = [];      //We create an array to store each word the user inputs

    //Define the functions
    FUNCTION wordPuzzle(startWord, endWord):
        //Get user input
        currentWord = prompt("Enter the next word");
        CALL FUNCTION isOneLetterApart(startWord, endWord);
    ENDFUNCTION

    FUNCTION isOneLetterApart(wordOne, wordTwo):
        //check if the words have the same amount of letters
        IF currentWord.length != startWord.length:
            RETURN false;
            PRINT ("The words are not the same length");
        ELSE IF currentWord NOT IN onlineDictionary:
            RETURN false;
            PRINT ("That is not a valid word")
        ELSE IF user changed more than 1 letter in currentWord:  //I`m a bit unsure how i would code this
            RETURN false;
            PRINT ("Your word needs to have only 1 letter different from the previous word");   //This would also prevent the same word being entered twice, without having to check the array all the time
        ELSE:
            RETURN true;
            myLittleArray.push(currentWord);
            steps++;
    ENDFUNCTION

    FUNCTION play()
        LOOP   
            WHILE (currentWord !=== endWord):                       //As long as the current word is not the same as the last one, the function keeps being called
                CALL FUNCTION wordPuzzle(startWord, endWord);
            ELSE:
                BREAK;
                PRINT ("Yay! You did it!");
                PRINT ("It took you " + steps + " steps!");
                PRINT ("Your solution is: " + startWord + myLittleArray.join('-') + endWord);    //Shows the user all the words that were entered, plus the first and last one
        END LOOP


//Run the code
    CALL FUNCTION play();

*/

/* My solution would be something like eye-dye-doe-dog-log-leg-led-lid. Hope i understood how it works, otherwise my code is doomed :P */
/* I attached the algorithm as a .jpg file in the repo */
