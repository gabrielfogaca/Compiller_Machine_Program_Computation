let currentLine = 1
console.log(JSON.parse(sessionStorage.getItem('program')))
let mocadao = {
	"regs": 4,
	"stores": [
		"a", "b"
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
}

function buildInput(dom) {
	let previousLine = currentLine - 1
	if (dom.Window) return;
	
	let elParent = document.getElementById(dom.id).parentNode

	if (dom.value === "faca") {
		let getLineNumber = elParent.id.split("line,")
		let lineNumber = parseInt(getLineNumber[1])
		console.log(lineNumber);
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

		for (index = 0 ; index < mocadao.sums.length ; index++) {
			let doInput = document.createElement("option")
			doInput.id = "sums," + mocadao.sums[index]
			doInput.text = "sums," + mocadao.sums[index]
			condition.appendChild(doInput)
		}
		for (index = 0 ; index < mocadao.subs.length ; index++) {
			let doInput = document.createElement("option")
			doInput.id = "subs," + mocadao.sums[index]
			doInput.text = "subs," + mocadao.sums[index]
			condition.appendChild(doInput)
		}
		let paragraph = document.createElement("span")
			paragraph.textContent = "va_para"
		thisDiv.appendChild(paragraph)

		let goToInput = document.createElement("input")
			goToInput.type = "number"
			goToInput.name = "topics" + lineNumber
			goToInput.id = "input," + lineNumber
		thisDiv.appendChild(goToInput)
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

		for (index = 0 ; index < mocadao.ifZero.length ; index++) {
			let doInput = document.createElement("option")
			doInput.id = "zero==," + mocadao.ifZero[index]
			doInput.text = "zero==," + mocadao.ifZero[index]
			condition.appendChild(doInput)
		}

		let paragraph = document.createElement("span")
		paragraph.textContent = "entao va_para"
		thisDiv.appendChild(paragraph)

		let goToInput = document.createElement("input")
			goToInput.type = "number"
			goToInput.name = "topics" + lineNumber
			goToInput.id = "input," + lineNumber
		thisDiv.appendChild(goToInput)

		let paragraph2 = document.createElement("span")
		paragraph2.textContent = "senao va_para"
		thisDiv.appendChild(paragraph2)

		let goToInput2 = document.createElement("input")
			goToInput2.name = "topics" + lineNumber
			goToInput2.type = "input2," + lineNumber
			goToInput2.id = "input," + lineNumber
		thisDiv.appendChild(goToInput2)

	}
	// //console.log(elParent);
}

function generateProgram(event) {
	event.preventDefault();

	let data = new FormData(event.target);
	let value = Object.fromEntries(data.entries());
	
	for (let index = 1 ; index < currentLine ; index++){
		const dataKey = getDataKey(index);
		value[dataKey] = data.getAll(dataKey);
	}

	let builtedProgram = buildProgramJSON(value)
	displayProgramScreen(builtedProgram)
}

function getDataKey(topic) {
	return `topic${topic}`;
}

function buildProgramJSON (data) {
	// for(index = 0; index < currentLine - 1; index++) {
	//     console.log(data.eval("script" + index.toString()))
	// }
	let programFormated = {
		"program": []
	}

	for (var key in data) {
		if (data.hasOwnProperty(key)) {
			dataLine = data[key]
			if (dataLine[0] === "faca"){
			   const formatedLine = "faca " + dataLine[1] + " vá_para " + dataLine[2]
			   programFormated.program.push(formatedLine)
			} else if (dataLine[0] === "se") {
				const formatedLine = "se " + dataLine[1] + " vá_para " + dataLine[2] + " senão vá_para " + dataLine[3]
				programFormated.program.push(formatedLine)
			}
		}
	}
	return programFormated
}

function displayProgramScreen (data) {
	let title = document.getElementById("generated-title")
	let programContent = document.getElementById("program-content")
	console.log(programContent)
	title.textContent = "Programa gerado"
	let index = 1
	data.program.forEach(ele => {
		console.log(ele)
		let span = document.createElement("span").textContent = (index + ": " + ele)
		let lineBreak = document.createElement("br")
		programContent.append(span)
		programContent.append(lineBreak)
		index++
	});

}
const form = document.querySelector('form');
form.addEventListener('submit', generateProgram);