
const gameTable = document.getElementById("game-table");
let maxSquareNumber = 100;
const playBtn = document.getElementById("start-btn")
const difficulty = document.getElementById("levels")
let bombs = [];
let safeNumbers;
playBtn.addEventListener("click", function () {



    let levels = difficulty.value;

    if (levels === "1") {
        createTable(gameTable, 100);
        safeNumbers = 84;

        while (bombs.length < 16) {
            let randomNumber;
            do {
                randomNumber = Math.floor(Math.random() * 100) + 1;
            } while (bombs.includes(randomNumber));

            bombs.push(randomNumber);
        }

        console.log(bombs);


    } else if (levels === "2") {
        createTable(gameTable, 81);
        safeNumbers = 65;

        while (bombs.length < 16) {
            let randomNumber;
            do {
                randomNumber = Math.floor(Math.random() * 81) + 1;
            } while (bombs.includes(randomNumber));

            bombs.push(randomNumber);
        }

        console.log(bombs);


    } else if (levels === "3") {
        createTable(gameTable, 49);
        safeNumbers = 33;


        while (bombs.length < 16) {
            let randomNumber;
            do {
                randomNumber = Math.floor(Math.random() * 49) + 1;
            } while (bombs.includes(randomNumber));

            bombs.push(randomNumber);
        }

        console.log(bombs);

    }
});


function createTable(DOMelement, maxSquareNumber) {

    let gameIsNotOver = true;
    let score = 0;
    

    for (let i = 0; i < maxSquareNumber; i++) {
        const square = document.createElement("div");

        square.className = "square";
        square.style.width = `calc(100% / ${Math.sqrt(maxSquareNumber)})`;
        square.append(i + 1);
        gameTable.append(square);

        playBtn.classList.add("d-none");
        difficulty.classList.add("d-none");

        square.addEventListener("click", function () {


            if (gameIsNotOver && !square.classList.contains("green-square")) {
                square.classList.add("green-square");
                let squareClickedNumber = i + 1;
                   
                    score++;

                console.log(score);
                console.log("Clic sulla casella " + squareClickedNumber);
                if (score === safeNumbers) {
                    gameIsNotOver = false
                    console.log("Complimenti, Hai vinto!");
                }


                if (bombs.includes(squareClickedNumber)) {
                    gameIsNotOver = false
                    console.log("Hai perso");
                    square.classList.add("red-square");
                    console.log("Punteggio: " + (score - 1));
                }
            }
        })
    }
}
