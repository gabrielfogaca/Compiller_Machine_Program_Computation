var mocadoProg = {
	"program": [
		"se zero==c vá_para 0 senão vá_para 2",
		"faca sumsb vá_para 3",
		"faca sumsb vá_para 4",
		"faca subsc vá_para 5",
		"faca sumsb vá_para 1"
	]
}

var mocadoReg = {
	"regs": 4,
	"stores": [
		"a", "b","c"
	],
	"returns": [
		"d"
	],
	"ifZero": [
		"a", "b", "c"
	],
	"sums": [
		"b", "c", "d"
	],
	"subs": [
		"a", "b", "c"
	]
}

var inputValues = {}

var iters

var log = document.getElementById("comp-log")
var lb = document.createElement("br")

const form = document.querySelector('form');
form.addEventListener('submit', handleInputs);

if (mocadoReg.length !== 0 ) {
	let varsDiv = document.getElementById("vars").firstElementChild.firstElementChild
	

	mocadoReg.stores.forEach(regs => {

		let regInput = document.createElement("input")
			regInput.name = regs
			regInput.type = "number"
		let regLabel = document.createElement("label")
			regLabel.for = regs
			regLabel.innerText = regs
		let brakeLine = document.createElement("br")
		
		varsDiv.appendChild(regLabel)
		varsDiv.appendChild(regInput)
		varsDiv.appendChild(brakeLine)
		
	})
}

function handleInputs(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	inputValues = Object.fromEntries(data);

	console.log(inputValues);
	compute()
}

let currentLine = 0
let isntHalted = true

let plzStop = 0

function compute () {
	// currentLine !== 0 && currentLine !== mocadoProg.program.length
	while (isntHalted && plzStop < 400) {
		readLine(currentLine)
		plzStop++
	}
	
	// let firstLine = mocadoProg.program[0]

	// if (firstLine.includes("se")) {
	//     checkSe(firstLine)
	// }
}

function readLine (line) {
	let lineString = mocadoProg.program[line]
	
	// check if line is faca or se
	if(lineString.includes("se")){
		// checking first if it haves zero comparisson
		if (lineString.includes("zero")) {
			isntHalted = zeroComparisson(lineString, line)
			// if it hasnt halted yet, continues to read the string
			if (isntHalted) {
				vaPara(lineString)
			}
		}
	} else if(lineString.includes("faca")) {
		if (lineString.includes("sums")){
			currentLine = summation(lineString, line);
		}
		if (lineString.includes("subs")){
			currentLine = subtraction(lineString, line);
		}
	}

}

function zeroComparisson (lineString, line) {
    let register = lineString.charAt(9)
	let splitLine = lineString.split("vá_para ")
	console.log(splitLine)

    if(parseInt(inputValues["c"]) === 0) {
		let wentTo = splitLine[1].charAt(0)
		line++
        let logging = document.createElement("span")
			logging.innerText = "em " + line.toString() + ", como " + register + "=0, desviou para " + wentTo
		log.appendChild(logging)
		log.appendChild(lb)
		
		return false
    } else {
		let wentTo = splitLine[2]
		line++
        let logging = document.createElement("span")
			logging.innerText = "em " + line.toString() + ", como " + register + "!=0, desviou para " + wentTo
		log.appendChild(logging)
		log.appendChild(lb)
        return true
    }  
}

// func to get where to go from the 'se' condition is false
function vaPara(lineString) {
	// changes next line
	let splitLine = lineString.split("vá_para ")

	currentLine = parseInt(splitLine[2])
	currentLine--
}

function summation(lineString, line) {
	line++
	const register = lineString.charAt(9)
	let registerValue = parseInt(inputValues[register])

	registerValue++
	inputValues[register] = registerValue.toString()
	

	let splitNextLine =	lineString.split("vá_para ")
	let nextLine = parseInt(splitNextLine[1])
	

	let logging = document.createElement("span")
			logging.innerText = "em " + line.toString() + ", adicionou no registrador " + register + "e desviou para " + nextLine
		log.appendChild(logging)
		log.appendChild(lb)
	
	nextLine--
	return nextLine
}

function subtraction(lineString, line) {
	line++
	const register = lineString.charAt(9)
	let registerValue = parseInt(inputValues[register])

	registerValue--
	inputValues[register] = registerValue.toString()
	

	let splitNextLine =	lineString.split("vá_para ")
	let nextLine = parseInt(splitNextLine[1])
	

	let logging = document.createElement("span")
			logging.innerText = "em " + line.toString() + ", subtraiu do registrador " + register + "e desviou para " + nextLine
		log.appendChild(logging)
		log.appendChild(lb)

	nextLine--
	return nextLine
}