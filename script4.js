const divc = document.querySelector('#container')

console.log(divc.textContent);

for (let i = 0; i < 4; i++) {
    const divrow = document.createElement('div');
    /*div.style.border = "black";
    div.style.flexGrow = 1
    div.style.flexShrink = 1
    div.style.flexBasis = "auto"
    div.style.position = "absolute"
    div.textContent = 1*/

    divc.appendChild(divrow).className = "row";

}

const rows = document.querySelectorAll(".row");

for (let j = 0; j < rows.length; j++) {
    for (let k = 0; k < 4; k++) {
        const divcol = document.createElement('div');

        rows[j].appendChild(divcol).className = "cell";
    }
}