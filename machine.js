var regNumber
letterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
var Registers = 0;

function tableCreate(row, col) {
    var regInput = document.getElementById("numbers-regs")
    col = 6
    regInput = regInput.options[regInput.selectedIndex].value
    Registers = regInput;
    row = regInput
    regNumber = row
    let body = document.body;
    let tbl = document.getElementById('machine-table');
    tbl.style.width = 'auto';
    tbl.style.border = '1px solid black';

    for (let i = 0; i < row; i++) {
        let tr = tbl.insertRow();
        for (let j = 0; j < col; j++) {
            iString = i.toString()
            jString = j.toString()
            let checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "name";
            checkbox.value = "value";
            checkbox.id = i + ',' + j;
            let td = tr.insertCell();
            if (j == 0) {
                td.appendChild(document.createTextNode(letterArr[i]))
            } else {
                td.appendChild(checkbox)
            }
            td.style.border = '1px solid black';
        }
    }
}

GenerateProgramArray = [];
TextLine = []
function generateMachine() {
    for (let col = 1; col < 6; col++) {
        for (let row = 0; row < regNumber; row++) {
            cell = row + ',' + col
            let isChecked = document.getElementById(cell)
            if (isChecked.checked == true) {
                GenerateProgramArray.push(cell);
            }
        }
    }
    CreateTextLine();
}


Armazenar = []
Retornar = []
Somar = []
Subtrair = []
toZero = []

function CreateTextLine() {
    for (let i = 0; i < GenerateProgramArray.length; i++) {
        TextLine.push(GenerateProgramArray[i].split(","));
        for (let z = 0; z < TextLine.length; z++) {
            // armazenar = 1
            if (TextLine[z][1] == 1) {
                // comparar letras
                // for para percorrer o array de letras
                Indexcompare = [];
                for (let l = 0; l < letterArr.length; l++) {
                    Indexcompare = letterArr[l];
                    if (TextLine[z][0] == letterArr.indexOf(Indexcompare))
                    Armazenar.push(Indexcompare);
                }
            }
            // retorna = 2
            else if (TextLine[z][1] == 2) {
                Indexcompare = [];
                for (let l = 0; l < letterArr.length; l++) {
                    Indexcompare = letterArr[l];
                    if (TextLine[z][0] == letterArr.indexOf(Indexcompare))
                    Retornar.push(Indexcompare);
                }
            }
            // soma = 3
            else if (TextLine[z][1] == 3) {
                Indexcompare = [];
                for (let l = 0; l < letterArr.length; l++) {
                    Indexcompare = letterArr[l];
                    if (TextLine[z][0] == letterArr.indexOf(Indexcompare))
                    Somar.push(Indexcompare);
                }
            }
            // subtrair = 4
            else if (TextLine[z][1] == 4) {
                Indexcompare = [];
                for (let l = 0; l < letterArr.length; l++) {
                    Indexcompare = letterArr[l];
                    if (TextLine[z][0] == letterArr.indexOf(Indexcompare))
                    Subtrair.push(Indexcompare);
                }
            }
            // =zero = 5
            else if (TextLine[z][1] == 5) {
                Indexcompare = [];
                for (let l = 0; l < letterArr.length; l++) {
                    Indexcompare = letterArr[l];
                    if (TextLine[z][0] == letterArr.indexOf(Indexcompare))
                    toZero.push(Indexcompare);
                }
            }
        }
    }
    // Limpar Arrays
    // console.log('Arm '+Armazenar,'Ret '+Retornar,'Som '+Somar,'Sub '+Subtrair,'Zero '+toZero);
    limparArray1 = Armazenar.filter((este, i) => Armazenar.indexOf(este) === i);
    // console.log(limparArray1);
    limparArray2 = Retornar.filter((este, i) => Retornar.indexOf(este) === i);
    // console.log(limparArray2);
    limparArray3 = Somar.filter((este, i) => Somar.indexOf(este) === i);
    // console.log(limparArray3);
    limparArray4 = Subtrair.filter((este, i) => Subtrair.indexOf(este) === i);
    // console.log(limparArray4);
    limparArray5 = toZero.filter((este, i) => toZero.indexOf(este) === i);
    // console.log(limparArray5);
    
    var obj = new Object();
    obj.Registers = Registers
    obj.Armazenar = limparArray1
    obj.Retornar = limparArray2
    obj.Somar = limparArray3
    obj.Subtrair = limparArray4
    obj.toZero = limparArray5

    var myJsonString = JSON.stringify(obj);
    const Maquina = JSON.parse(myJsonString)
    console.log(Maquina);
}