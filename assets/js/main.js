
const gameTable = document.getElementById("game-table");
let maxSquareNumber = 100;
const playBtn = document.getElementById("start-btn")
const difficulty = document.getElementById("levels")

playBtn.addEventListener("click", function () {

    

    let levels = difficulty.value;

    if (levels === "1") {
        createTable(gameTable, 100);

    } else if (levels === "2") {
        
        createTable(gameTable, 81);

    } else if (levels === "3") {
        createTable(gameTable, 49);
    }
});


function createTable(DOMelement, maxSquareNumber) {
    for (let i = 0; i < maxSquareNumber; i++) {
        const square = document.createElement("div");
       
        square.className = "square";
        square.append(i+1);
        gameTable.append(square);

        playBtn.classList.add("d-none");
        difficulty.classList.add("d-none");
        
        square.addEventListener("click", function () {
            square.classList.toggle("green-square");
            console.log("Clic sulla casella " + (i + 1));
        })
    }
}
