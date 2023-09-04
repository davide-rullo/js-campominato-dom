
const gameTable = document.getElementById("game-table");
const maxSquareNumber = 100;
const playBtn = document.getElementById("start-btn")
playBtn.addEventListener("click", function () {
    createTable(gameTable, 100)
});


function createTable(DOMelement, maxSquareNumber) {
    for (let i = 0; i < maxSquareNumber; i++) {
        const square = document.createElement("div");
       
        square.className = "square";
        square.append(i+1);
        gameTable.append(square);

        playBtn.classList.add("d-none");
        
        square.addEventListener("click", function () {
            square.classList.toggle("green-square");
            console.log("Clic sulla casella " + (i + 1));
        })
    }
}
