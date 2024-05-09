const cMajor = [["C", "D", "E", "F", "G"],
["A", "H", "C", "D", "E"],
["F", "G", "A", "H", "C"]];

function createKeys() {
    const container = document.getElementById("keyboard");

    for (let row = 0; row < 3; row++) {
        const rowDiv = document.createElement('div');

        for (let col = 0; col < 5; col++) {
            const button = document.createElement('button');
            button.textContent = cMajor[row][col];
            button.classList.add('keyButton');
            rowDiv.appendChild(button);
        }
        container.appendChild(rowDiv);
    }
}
createKeys();