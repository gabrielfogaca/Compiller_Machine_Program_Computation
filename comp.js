// var programCode = {
// 	"program": [
// 		"se zero==c vá_para 0 senão vá_para 2",
// 		"faca sumsb vá_para 3",
// 		"faca sumsb vá_para 4",
// 		"faca subsc vá_para 5",
// 		"faca sumsb vá_para 1"
// 	]
// }

var mocadoReg = {
    "Name": "asd",
    "Registers": "7",
    "Armazenar": [
        "a",
        "c",
        "d",
		"b"
    ],
    "Retornar": [
        "b",
        "e",
        "f",
        "g"
    ],
    "Somar": [
        "b",
        "f"
    ],
    "Subtrair": [
        "a",
        "b",
        "g"
    ],
    "Dividir": [
        "a",
        "c",
        "d"
    ],
    "multiplicar": [
        "a",
        "b"
    ],
    "toZero": [
        "a",
        "b"
    ],
    "greaterThenZero": [
        "a",
        "c"
    ],
    "lessThenZero": [
        "b",
        "e"
    ]
}

var inputValues = {}

var iters

let currentLine = 0
let isntHalted = true

let plzStop = 0

var log = document.getElementById("comp-log")
var lb = document.createElement("br")

const form = document.querySelector('form');
form.addEventListener('submit', handleInputs);

// code and machine built in previes pages
let programCode = {}
let registerInfo = {}

// getting JSON values and parsing it, also populating input reg fields
if (sessionStorage.getItem('program').length !== 0 ) {
	let varsDiv = document.getElementById("vars").firstElementChild.firstElementChild
	programCode = JSON.parse(sessionStorage.getItem('program'))
	console.log(programCode)

	mocadoReg.Armazenar.forEach(regs => {

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


function compute () {
	// currentLine !== 0 && currentLine !== programCode.program.length
	while (isntHalted && plzStop < 400) {
		readLine(currentLine)
		plzStop++
	}
	
	// let firstLine = programCode.program[0]

	// if (firstLine.includes("se")) {
	//     checkSe(firstLine)
	// }
}

function readLine (line) {
	let lineString = programCode.program[line]
	
	// check if line is faca or se
	if(lineString.includes("se")){
		// checking first if it haves zero comparisson
		if (lineString.includes("zero")) {
			isntHalted = zeroComparisson(lineString, line)
			// if it hasnt halted yet, continues to read the string
			if (isntHalted) {
				vaPara(lineString)
			}
		} else if (lineString.includes("<")) {
			isntHalted = lessThenZeroComparisson(lineString, line)
			// if it hasnt halted yet, continues to read the string
			if (isntHalted) {
				vaPara(lineString)
			}
		} else if (lineString.includes(">")) {
			isntHalted = greaterThenZero(lineString, line)
			// if it hasnt halted yet, continues to read the string
			if (isntHalted) {
				vaPara(lineString)
			}
		}
	} else if(lineString.includes("faca")) {
		if (lineString.includes("sums")){
			currentLine = summation(lineString, line);
		} else if (lineString.includes("subs")){
			currentLine = subtraction(lineString, line);
		} else if (lineString.includes("dividir")) {
			currentLine = division(lineString, line)
		} else if (lineString.includes("multiplicar")) {
			currentLine = multiply(lineString, line)
		}
	}

}

function zeroComparisson (lineString, line) {
    let register = lineString.charAt(9)
	let splitLine = lineString.split("vá_para ")

    if(parseInt(inputValues[register]) === 0) {
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

function lessThenZeroComparisson (lineString, line) {
	let register = lineString.charAt(3)
	let splitLine = lineString.split("vá_para ")

	let registerValue
	if (inputValues[register].includes(".")) {
		registerValue = parseFloat(inputValues[register])
	} else {
		registerValue = parseInt(inputValues[register])
	}

	if(registerValue < 0) {
		let wentTo = splitLine[1].charAt(0)
		line++
        let logging = document.createElement("span")
			logging.innerText = "em " + line.toString() + ", como " + register + "< 0, desviou para " + wentTo
		log.appendChild(logging)
		log.appendChild(lb)
		
		return false
    } else {
		let wentTo = splitLine[2]
		line++
        let logging = document.createElement("span")
			logging.innerText = "em " + line.toString() + ", como " + register + "> 0, desviou para " + wentTo
		log.appendChild(logging)
		log.appendChild(lb)
        return true
    }  
}

function greaterThenZero (lineString, line) {
	let register = lineString.charAt(3)
	let splitLine = lineString.split("vá_para ")


	let registerValue
	if (inputValues[register].includes(".")) {
		registerValue = parseFloat(inputValues[register])
	} else {
		registerValue = parseInt(inputValues[register])
	}
	if(registerValue > 0) {
		let wentTo = splitLine[1].charAt(0)
		line++
        let logging = document.createElement("span")
			logging.innerText = "em " + line.toString() + ", como " + register + "> 0, desviou para " + wentTo
		log.appendChild(logging)
		log.appendChild(lb)
		
		return false
    } else {
		let wentTo = splitLine[2]
		line++
        let logging = document.createElement("span")
			logging.innerText = "em " + line.toString() + ", como " + register + "< 0, desviou para " + wentTo
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
	let registerValue
	if (inputValues[register].includes(".")) {
		registerValue = parseFloat(inputValues[register])
	} else {
		registerValue = parseInt(inputValues[register])
	}

	registerValue++
	inputValues[register] = registerValue.toString()
	

	let splitNextLine =	lineString.split("vá_para ")
	let nextLine = parseInt(splitNextLine[1])
	

	let logging = document.createElement("span")
			logging.innerText = "em " + line.toString() + ", adicionou no registrador " + register + " e desviou para " + nextLine
		log.appendChild(logging)
		log.appendChild(lb)
	
	nextLine--
	return nextLine
}

function subtraction(lineString, line) {
	line++
	const register = lineString.charAt(9)
	let registerValue
	if (inputValues[register].includes(".")) {
		registerValue = parseFloat(inputValues[register])
	} else {
		registerValue = parseInt(inputValues[register])
	}

	registerValue--
	inputValues[register] = registerValue.toString()
	

	let splitNextLine =	lineString.split("vá_para ")
	let nextLine = parseInt(splitNextLine[1])
	

	let logging = document.createElement("span")
			logging.innerText = "em " + line.toString() + ", subtraiu do registrador " + register + " e desviou para " + nextLine
		log.appendChild(logging)
		log.appendChild(lb)

	nextLine--
	return nextLine
}

function division(lineString, line) {
	line++
	const register = lineString.charAt(13)
	let registerValue = parseFloat(inputValues[register])
	
	splitDividend = lineString.split("por ")
	let splitNextLine =	splitDividend[1].split(" vá_para ")
	
	const dividend = parseInt(splitNextLine[0])
	let nextLine = parseInt(splitNextLine[1])
	
	inputValues[register] = (registerValue / dividend).toString()
	console.log(inputValues);
	let logging = document.createElement("span")
			logging.innerText = "em " + line.toString() + ", dividiu por " + dividend + " o registrador  " + register + " e desviou para " + nextLine
		log.appendChild(logging)
		log.appendChild(lb)

	nextLine--
	return nextLine
}

function multiply(lineString, line) {
	line++
	const register = lineString.charAt(13)
	let registerValue = parseFloat(inputValues[register])
	
	splitMultiplier = lineString.split("por ")
	let splitNextLine =	splitMultiplier[1].split(" vá_para ")
	
	const multiplier = parseInt(splitNextLine[0])
	let nextLine = parseInt(splitNextLine[1])
	
	inputValues[register] = (registerValue / multiplier).toString()
	console.log(inputValues);
	let logging = document.createElement("span")
			logging.innerText = "em " + line.toString() + ", multiplicou por " + multiplier + " o registrador  " + register + " e desviou para " + nextLine
		log.appendChild(logging)
		log.appendChild(lb)

	nextLine--
	return nextLine
}