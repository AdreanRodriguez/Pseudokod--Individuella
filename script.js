// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
Totalsumma (1000kr) ska delas med 4 st vänner som ger en total dricks på 10% (0.10)

START

FUNCTION named "splitTheNota"(totalSumma, antalPersoner, dricksAndel)

    dricksPerPerson = totalSumma * (1 + dricksAndel) / antalPersoner

    //Returnera totala beloppet per person
    RETURN totalBeloppPerPerson
ENDFUNCTION


//Programmet
SET totalSumma = 1000
SET antalPersoner = 4
SET dricksAndel = 0.10

//Anropa funktionen och spara resultatet i en variabel
SET beloppPerPerson = splitTheNota(totalSuma, antalPersoner, dricksAndel)

//Resultatet
PRINT "Varje person ska betala:" + beloppPerPerson + SEK

END

*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*


function play() // Starta programmet
    SET startOrd till "FOUR"
    SET slutOrd till "FIVE"
    SET nuvarandeOrd till ""
    SET ordLista till [..., ..., ...] // Ordlista

    WHILE loopa tills startOrd är lika med slutOrd
        
        PRINT "Ange ett ord: "
        INPUT nuvarandeOrd

        // Kolla om ordet finns med i ordboken, alltså listan [..., ..., ...]
        IF nuvarandeOrd INTE finns i ordLista ELLER nuvarandeOrd är längre/kortare än startOrd
            PRINT "Ingen lösning hittades.";
        END IF

        ELSE
            // Kolla om endast ett tecken får ändras
            IF antalOlikaTecken(nuvarandeOrd, startOrd) inte är lika med 1
                PRINT "Endast ett tecken får lov att ändras!"
            END IF
            ELSE 
                // Ersätt startOrd med nuvarandeOrd
                SET startOrd till nuvarandeOrd
                PRINT "Du är ett steg närmare."
            END ELSE
        END ELSE
    END WHILE
    PRINT "Grattis!"

end function

// Funktion för att räkna antalet olika tecken mellan två ord
function antalOlikaTecken(ord1, ord2)
    SET diffCount till 0;

    // Loopa igenom varje position i orden och jämför tecknen
    FOR varje position i ord1
        // Jämför tecknen vid samma position
        IF ord1[position] inte är lika med ord2[position]
            // Öka diffCount med 1;
            INCREASE diffCount med 1;
        END IF
    END FOR

    // Returnera det räknade antalet olika tecken
    RETURN diffCount;
end function
*/