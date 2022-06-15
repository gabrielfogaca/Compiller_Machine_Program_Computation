let currentLine = 1

let mocadao = {
	"Name": "ASD",
    "Registers": "7",
    "Armazenar": [
        "a",
        "c",
        "d"
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

function createLine() {
	let programNode = document.getElementById("input-form")

	let div = document.createElement("div")
		div.id = "line," + currentLine.toString()
		div.setAttribute("class", "input-div")
	programNode.appendChild(div)
	let lineDiv = document.getElementById("line," + currentLine.toString())
	let lineSpan = document.createElement("span")
		lineSpan.textContent = currentLine.toString() + ":  "
		lineDiv.appendChild(lineSpan)
	
	let doOrIf = document.createElement("select")
		doOrIf.id = "doOrIfline," + currentLine.toString()
		doOrIf.name = "topics" + currentLine.toString()
		doOrIf.onchange = function() { buildInput(this); };
	lineDiv.appendChild(doOrIf)
	let doOrIfEle = document.getElementById("doOrIfline," + currentLine.toString())
	let se = document.createElement("option")
			se.text = "se"
			se.value = "se"
			se.id = "se"
			doOrIfEle.appendChild(se)
	let faca = document.createElement("option")
			faca.text = "faça"
			faca.value = "faca"
			faca.id = "faca"
			doOrIfEle.appendChild(faca)
	
	currentLine++

}

function deleteLine() {
	let programNode = document.getElementById("input-form")
	programNode.lastChild.remove()
	currentLine --

	if (currentLine === 0) {
		currentLine = 1
	}
}

let globalLine
function buildInput(dom) {
	let previousLine = currentLine - 1
	if (dom.Window) return;
	
	let elParent = document.getElementById(dom.id).parentNode

	if (dom.value === "faca") {
		let getLineNumber = elParent.id.split("line,")
		let lineNumber = parseInt(getLineNumber[1])
		globalLine = lineNumber
		console.log(lineNumber);
		if(document.getElementById("generatedInputs," + lineNumber)) {
			document.getElementById("generatedInputs," + lineNumber).remove()
		}
		let condition = document.createElement("select")
			condition.id = "condition" + lineNumber
			condition.name = "topics" + lineNumber
			condition.onchange = function () { logicOperations(this) }
		
		let div = document.createElement("div")
			div.id = "generatedInputs," + lineNumber
			elParent.appendChild(div)
		
		
		let thisDiv = document.getElementById("generatedInputs," + lineNumber)


		thisDiv.appendChild(condition)
			thisCondition = document.getElementById("condition" + lineNumber)

		for (index = 0 ; index < mocadao.Somar.length ; index++) {
			let doInput = document.createElement("option")
				doInput.id = "sums" + mocadao.Somar[index]
				doInput.text = "sums" + mocadao.Somar[index]
			condition.appendChild(doInput)
		}
		for (index = 0 ; index < mocadao.Subtrair.length ; index++) {
			let doInput = document.createElement("option")
				doInput.id = "subs" + mocadao.Subtrair[index]
				doInput.text = "subs" + mocadao.Subtrair[index]
			condition.appendChild(doInput)
		}
		for (index = 0 ; index < mocadao.multiplicar.length ; index++) {
			let doInput = document.createElement("option")
				doInput.id = "multiplicar" + mocadao.multiplicar[index]
				doInput.text = "multiplicar " + mocadao.multiplicar[index]
			condition.appendChild(doInput)
		}
		for (index = 0 ; index < mocadao.Dividir.length ; index++) {
			let doInput = document.createElement("option")
				doInput.id = "dividir" + mocadao.Dividir[index]
				doInput.text = "dividir " + mocadao.Dividir[index]
			condition.appendChild(doInput)
		}


		
		// let multiply = document.createElement("option")
		// 		multiply.id = "multiply"
		// 		multiply.text = "Multiplicar"
		// condition.appendChild(multiply)
		
		// let subtract = document.createElement("option")
		// 		subtract.id = "subtract"
		// 		subtract.text = "Dividir"
		// condition.appendChild(subtract)
	}

	if (dom.value === "se") {
		let getLineNumber = elParent.id.split("line,")
		let lineNumber = getLineNumber[1]

		if(document.getElementById("generatedInputs," + lineNumber)) {
			document.getElementById("generatedInputs," + lineNumber).remove()
		}

		let condition = document.createElement("select")
			condition.id = "condition" + lineNumber
			condition.name = "topics" + lineNumber

		let div = document.createElement("div")
			div.id = "generatedInputs," + lineNumber
			elParent.appendChild(div)


		let thisDiv = document.getElementById("generatedInputs," + lineNumber)

		thisDiv.appendChild(condition)
			thisCondition = document.getElementById("condition" + lineNumber)

		for (index = 0 ; index < mocadao.toZero.length ; index++) {
			let doInput = document.createElement("option")
			doInput.id = "zero==" + mocadao.toZero[index]
			doInput.text = "zero==" + mocadao.toZero[index]
			condition.appendChild(doInput)
		}
		for (index = 0 ; index < mocadao.greaterThenZero.length ; index++) {
			let doInput = document.createElement("option")
			doInput.id =  mocadao.greaterThenZero[index] + ">0" 
			doInput.text =  mocadao.greaterThenZero[index] + " > 0"
			condition.appendChild(doInput)
		}
		for (index = 0 ; index < mocadao.lessThenZero.length ; index++) {
			let doInput = document.createElement("option")
			doInput.id =  + mocadao.lessThenZero[index] + " < 0"
			doInput.text =  mocadao.lessThenZero[index] + " < 0"
			condition.appendChild(doInput)
		}

		let paragraph = document.createElement("span")
			paragraph.textContent = "entao va_para"
			paragraph.className = "delete-comp" + lineNumber
		thisDiv.appendChild(paragraph)

		let goToInput = document.createElement("input")
			goToInput.type = "number"
			goToInput.className = "delete-comp" + lineNumber
			goToInput.name = "topics" + lineNumber
			goToInput.id = "input," + lineNumber
		thisDiv.appendChild(goToInput)

		let paragraph2 = document.createElement("span")
			paragraph2.textContent = "senao va_para"
			paragraph2.className = "delete-comp" + lineNumber
		thisDiv.appendChild(paragraph2)

		let goToInput2 = document.createElement("input")
			goToInput2.name = "topics" + lineNumber
			goToInput2.className = "delete-comp" + lineNumber
			goToInput2.type = "input2," + lineNumber
			goToInput2.id = "input," + lineNumber
		thisDiv.appendChild(goToInput2)

	}
	// //console.log(elParent);
}

function logicOperations(params) {
	let thisDiv = document.getElementById("generatedInputs," + globalLine)
	console.log(globalLine)

	const deleteCheck = document.querySelectorAll(".delete-oper" + globalLine)
	if(deleteCheck.length > 0) {
		deleteCheck.forEach(divs => {
			divs.remove()
		})
	}

	if (params.value.includes("multiplicar")) {
		let paragraph = document.createElement("span")
			paragraph.textContent = " por "
			paragraph.className = "delete-oper" + globalLine
		thisDiv.appendChild(paragraph)
		let secondReg = document.createElement("input")
			secondReg.name = "topics" + globalLine
			secondReg.type = "number"
			secondReg.className = "delete-oper" + globalLine
			secondReg.id = "constM" + globalLine
		thisDiv.appendChild(secondReg)
		
		let paragraph2 = document.createElement("span")
		paragraph2.textContent = "va_para"
		paragraph2.className = "delete-oper" + globalLine
		thisDiv.appendChild(paragraph2)
		
		let goToInput = document.createElement("input")
		goToInput.type = "number"
		goToInput.className = "delete-oper" + globalLine
		goToInput.name = "topics" + globalLine
		goToInput.id = "input," + globalLine
		thisDiv.appendChild(goToInput)

	} else if (params.value.includes("dividir")) {
		let paragraph = document.createElement("span")
			paragraph.textContent = " por "
			paragraph.className = "delete-oper" + globalLine
		thisDiv.appendChild(paragraph)
		let secondReg = document.createElement("input")
			secondReg.name = "topics" + globalLine
			secondReg.type = "number"
			secondReg.className = "delete-oper" + globalLine
			secondReg.id = "constD" + globalLine
		thisDiv.appendChild(secondReg)
		
		let paragraph2 = document.createElement("span")
		paragraph2.textContent = "va_para"
		paragraph2.className = "delete-oper" + globalLine
		thisDiv.appendChild(paragraph2)
		
		let goToInput = document.createElement("input")
		goToInput.type = "number"
		goToInput.className = "delete-oper" + globalLine
		goToInput.name = "topics" + globalLine
		goToInput.id = "input," + globalLine
		thisDiv.appendChild(goToInput)
	} else {
		let paragraph2 = document.createElement("span")
		paragraph2.textContent = "va_para"
		paragraph2.className = "delete-oper" + globalLine
		thisDiv.appendChild(paragraph2)
		
		let goToInput = document.createElement("input")
		goToInput.type = "number"
		goToInput.className = "delete-oper" + globalLine
		goToInput.name = "topics" + globalLine
		goToInput.id = "input," + globalLine
		thisDiv.appendChild(goToInput)
	}
}
function generateProgram(event) {
    event.preventDefault();
    console.log(event)
    let data = new FormData(event.target);

    let value = Object.fromEntries(data.entries());
    let t = 'topics'
    for (let index = 1 ; index < currentLine ; index++){
        switch (index) {
            case 1:
                value.topics1 = data.getAll("topics1");
            case 2:
                value.topics2 = data.getAll("topics2");
            case 3:
                value.topics3 = data.getAll("topics3");
            case 4:
                value.topics4 = data.getAll("topics4");
            case 5:
                value.topics5 = data.getAll("topics5");
            case 6:
                value.topics6 = data.getAll("topics6");
            case 7:
                value.topics7 = data.getAll("topics7");
            case 8:
                value.topics8 = data.getAll("topics8");
            case 9:
                value.topics9 = data.getAll("topics9");
            case 10:
                value.topics10 = data.getAll("topics10");
            case 11:
                value.topics11 = data.getAll("topics11");
            case 12:
                value.topics12 = data.getAll("topics12");
            case 13:
                value.topics13 = data.getAll("topics13");
            case 14:
                value.topics14 = data.getAll("topics14");
            case 15:
                value.topics15 = data.getAll("topics15");
            case 16:
                value.topics16 = data.getAll("topics16");
        }
    }
    //value.topics1 = data.getAll("topics1");
    console.log( value );
    console.log( currentLine );
    let builtedProgram = buildProgramJSON(value)
    displayProgramScreen(builtedProgram)
}

function buildProgramJSON (data) {
	// for(index = 0; index < currentLine - 1; index++) {
	//     console.log(data.eval("script" + index.toString()))
	// }
	let programFormated = {
		"program": []
	}
	console.log(data)
	for (var key in data) {
		if (data.hasOwnProperty(key)) {
			dataLine = data[key]
			const teste = dataLine[1]
			console.log(teste);
			if (dataLine.length > 0) {
				if (dataLine[0] === "faca" && !dataLine[1].includes("multiplicar") && !dataLine[1].includes("dividir")){
				const formatedLine = "faca " + dataLine[1] + " vá_para " + dataLine[2]
				programFormated.program.push(formatedLine)
				} else if (dataLine[0] === "se") {
					const formatedLine = "se " + dataLine[1] + " vá_para " + dataLine[2] + " senão vá_para " + dataLine[3]
					programFormated.program.push(formatedLine)
				} else if (teste.includes("multiplicar")) {
					const formatedLine = "faca " + dataLine[1] + " por " +  dataLine[2] + " vá_para" + dataLine[3]
					programFormated.program.push(formatedLine)
				} else if (teste.includes("dividir")) {
					const formatedLine = "faca " + dataLine[1] + " por " +  dataLine[2] + " vá_para" + dataLine[3]
					programFormated.program.push(formatedLine)
				}
			}
		}
	}
	// saving program on session
	sessionStorage.setItem('program', "")
	sessionStorage.setItem('program', JSON.stringify(programFormated))

	return programFormated
}

function displayProgramScreen (data) {
	let title = document.getElementById("generated-title")
	let programContent = document.getElementById("program-content")
	console.log(programContent)
	title.textContent = "Programa gerado"
	let index = 1
	// console.log(data)
	data.program.forEach(ele => {
		console.log(ele)
		let span = document.createElement("span").textContent = (index + ": " + ele)
		let lineBreak = document.createElement("br")

		programContent.append(span)
		programContent.append(lineBreak)
		
		index++
	});

	let goToNextPage = document.createElement("a")
		  goToNextPage.href = "./comp.html"
		  goToNextPage.innerText = "Computar"
		  goToNextPage.className = "next-page"
	programContent.append(goToNextPage)

}
const form = document.querySelector('form');
form.addEventListener('submit', generateProgram);