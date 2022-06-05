var regNumber

function tableCreate(row, col){
    var regInput = document.getElementById("numbers-regs")
    col = 6
    regInput = regInput.options[regInput.selectedIndex].value
    row = regInput
    regNumber = row
    console.log(regInput)
    let letterArr = ['a','b','c','d','e','f','g','h','f','g','h','i','j','k','l','m']
    let body = document.body;
    let tbl  = document.getElementById('machine-table');
    tbl.style.width  = 'auto';
    tbl.style.border = '1px solid black';

    for(let i = 0; i < row; i++){
        let tr = tbl.insertRow();
        for(let j = 0; j < col; j++){
                iString = i.toString()
                jString = j.toString()
                let checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                checkbox.name = "name";
                checkbox.value = "value";
                checkbox.id = iString+jString;
                let td = tr.insertCell();
                if(j == 0) {
                    td.appendChild(document.createTextNode(letterArr[i]))
                } else {
                    td.appendChild(checkbox)
                }
                td.style.border = '1px solid black';
            }     
    }
}

function generateMachine() {
    for(let col = 1; col < 6; col++) {
        for(let row = 0; row < regNumber; row++) {
            colString = col.toString()
            rowString = row.toString()
            cell = rowString + colString
            let isChecked = document.getElementById(cell)
            console.log("coluna + lingha: " + cell + "esta: " + isChecked.checked)
        }
    }
}