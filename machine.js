var regNumber
letterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
var Registers = 0;

function tableCreate(row, col) {
	var regInput = document.getElementById("numbers-regs")
	col = 10
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

// Preencher a Tabela criada com o exercicio pradrão do quadro
Exemplo = ['0,1', '0,4', '0,5', '1,2', '1,3', '1,4', '2,1', '2,5', '3,1', '3,5', '4,2', '5,2', '5,3', '6,2', '6,4', '0,6', '1,6', '0,7', '1,7', '0,8', '2,8', '1,9', '4,9']
function preencherDefault() {
	for (let e = 0; e < Exemplo.length; e++) {
		document.getElementById(Exemplo[e]).checked = true;
	}
}

GenerateProgramArray = [];
TextLine = []
var machineName
function generateMachine() {
	machineName = document.getElementById('machine_name').value
	for (let col = 1; col < 10; col++) {
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

Armazenar = [];
Retornar = [];
Somar = [];
Subtrair = [];
Dividir = [];
multiplicar = [];
toZero = [];
greaterThenZero = [];
lessThenZero = [];

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
			// dividir = 5
			else if (TextLine[z][1] == 5) {
				Indexcompare = [];
				for (let l = 0; l < letterArr.length; l++) {
					Indexcompare = letterArr[l];
					if (TextLine[z][0] == letterArr.indexOf(Indexcompare))
						Dividir.push(Indexcompare);
				}
			}
			// multiplicar = 6
			else if (TextLine[z][1] == 6) {
				Indexcompare = [];
				for (let l = 0; l < letterArr.length; l++) {
					Indexcompare = letterArr[l];
					if (TextLine[z][0] == letterArr.indexOf(Indexcompare))
						multiplicar.push(Indexcompare);
				}
			}
			// =zero = 7
			else if (TextLine[z][1] == 7) {
				Indexcompare = [];
				for (let l = 0; l < letterArr.length; l++) {
					Indexcompare = letterArr[l];
					if (TextLine[z][0] == letterArr.indexOf(Indexcompare))
						toZero.push(Indexcompare);
				}
			}
			// Maior que Zero = 8
			else if (TextLine[z][1] == 8) {
				Indexcompare = [];
				for (let l = 0; l < letterArr.length; l++) {
					Indexcompare = letterArr[l];
					if (TextLine[z][0] == letterArr.indexOf(Indexcompare))
						greaterThenZero.push(Indexcompare);
				}
			}
			// Menor igual a Zero = 9
			else if (TextLine[z][1] == 9) {
				Indexcompare = [];
				for (let l = 0; l < letterArr.length; l++) {
					Indexcompare = letterArr[l];
					if (TextLine[z][0] == letterArr.indexOf(Indexcompare))
					lessThenZero.push(Indexcompare);
				}
			}
		}
	}
	// Limpar Arrays
	limparArray1 = Armazenar.filter((este, i) => Armazenar.indexOf(este) === i);
	limparArray2 = Retornar.filter((este, i) => Retornar.indexOf(este) === i);
	limparArray3 = Somar.filter((este, i) => Somar.indexOf(este) === i);
	limparArray4 = Subtrair.filter((este, i) => Subtrair.indexOf(este) === i);
	limparArray5 = Dividir.filter((este, i) => Dividir.indexOf(este) === i);
	limparArray6 = multiplicar.filter((este, i) => multiplicar.indexOf(este) === i);
	limparArray7 = toZero.filter((este, i) => toZero.indexOf(este) === i);
	limparArray8 = greaterThenZero.filter((este, i) => greaterThenZero.indexOf(este) === i);
	limparArray9 = lessThenZero.filter((este, i) => lessThenZero.indexOf(este) === i);

	var obj = new Object();
	obj.Name = machineName;
	obj.Registers = Registers
	obj.Armazenar = limparArray1
	obj.Retornar = limparArray2
	obj.Somar = limparArray3
	obj.Subtrair = limparArray4
	obj.Dividir = limparArray5
	obj.multiplicar = limparArray6
	obj.toZero = limparArray7
	obj.greaterThenZero = limparArray8
	obj.lessThenZero = limparArray9

	var myJsonString = JSON.stringify(obj);
	const Maquina = JSON.parse(myJsonString)


	console.log(Maquina);
	gerarTexto(Maquina);
	// mandar para a 3ª parte
	sessionStorage.setItem('Machine', "")
	sessionStorage.setItem('Machine', JSON.stringify(Maquina))
}


// gerar texto
// 10 é o numero de opções da maquina(Armazenar, Retornar, Somar, Subtrair, Dividir, Multiplicar, =Zero, maior que 0, menor que 0)
entryMachine = ['m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z', 'aa', 'ab']
entraMachineStorage = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
machineStorage = []
machineEntryList = []
function gerarTexto(Maquina) {
	// criar lista de registradores
	for (let clist = 0; clist < Maquina.Registers; clist++) {
		machineEntryList.push(entryMachine[clist])
		machineStorage.push(entraMachineStorage[clist])
	}
	// nome da maquina
	linhas = []
	for (const [key, value] of Object.entries(Maquina)) {
		switch (key) {
			// Nome
			case "Name":
				linhas.push(`${value} = N^${Maquina.Registers}, N^${Maquina.Armazenar.length}, N^${Maquina.Retornar.length}`)
				break;
			// Armazenar
			case "Armazenar":
				for (let i = 0; i < Maquina.Armazenar.length; i++) {
					linhas.push(`armazena_${Maquina.Armazenar[i]}: N^${Maquina.Registers} tal que, ∀neN, armazena_${Maquina.Armazenar[i]}(n) = (${padZeros(Maquina.Armazenar[i], Maquina.Registers)});`)
				}
				break;
			// Retornar
			case "Retornar":
				for (let rt = 0; rt < Maquina.Retornar.length; rt++) {
					linhas.push(`retorna_${Maquina.Retornar[rt]}: N^${Maquina.Registers} -> N tal que, ∀(${machineEntryList})∈N^${Maquina.Registers}, retorna_${Maquina.Retornar[rt]}(${padReturn(Maquina.Retornar[rt], Maquina.Registers)}) = ${Maquina.Retornar[rt]};`)
				}
				break;
			// Subtrair
			case "Subtrair":
				for (let sub = 0; sub < Maquina.Subtrair.length; sub++) {
					linhas.push(`subtrai_${Maquina.Subtrair[sub]}: N^${Maquina.Registers} -> N^${Maquina.Registers} tal que, ∀(${machineEntryList})∈N^${Maquina.Registers}, subtrai_${Maquina.Subtrair[sub]}(${machineEntryList}) = (${padSubtoZero(Maquina.Subtrair[sub], Maquina.length)}), se n≥0; subtrai_${Maquina.Subtrair[sub]}(${machineEntryList}) = (${machineEntryList}), se n = 0`)
				}
				break;
			// Somar
			case "Somar":
				for (let sum = 0; sum < Maquina.Somar.length; sum++) {
					linhas.push(`adiciona_${Maquina.Somar[sum]}: N^${Maquina.Registers} -> N^${Maquina.Registers} tal que, ∀(${machineEntryList})∈N^${Maquina.Registers}, adiciona_${Maquina.Somar[sum]}(${machineEntryList}) = (${padSum(Maquina.Somar[sum], Maquina.length)});`)
				}
				break;
			// ifZero
			case "toZero":
				for (let zer = 0; zer < Maquina.toZero.length; zer++) {
					linhas.push(`${Maquina.toZero[zer]}_zero -> {verdadeiro, falso} tal que, ∀(${machineEntryList}),∈N^${Maquina.Registers}, ${Maquina.toZero[zer]}_zero(${machineEntryList}) = verdadeiro, se ${Maquina.toZero[zer]} = 0; ${Maquina.toZero[zer]}_zero(${machineEntryList}) = falso, se ${Maquina.toZero[zer]} ≠ 0`)
				}
				break;
			// dividir
			case "Dividir":
				for (let d = 0; d < Maquina.toZero.length; d++) {
					linhas.push(`dividir_${Maquina.Dividir[d]}: N^${Maquina.Registers} -> N^${Maquina.Registers} tal que, ∀(${machineEntryList})∈N^${Maquina.Registers}, dividir_${Maquina.Dividir[d]}(${machineEntryList}) = (${padDividir(Maquina.Dividir[d], Maquina.length)});`)
				}
				break;
			// multiplicar
			case "multiplicar":
				for (let d = 0; d < Maquina.toZero.length; d++) {
					linhas.push(`multiplicar_${Maquina.multiplicar[d]}: N^${Maquina.Registers} -> N^${Maquina.Registers} tal que, ∀(${machineEntryList})∈N^${Maquina.Registers}, multiplicar_${Maquina.multiplicar[d]}(${machineEntryList}) = (${padMultiplicar(Maquina.multiplicar[d], Maquina.length)});`)
				}
				break;
			// maior que zero
			case "greaterThenZero":
				for (let d = 0; d < Maquina.greaterThenZero.length; d++) {
					// 
				}
				break;
			// menor igual a zero
			case "lessThenZero":
				for (let d = 0; d < Maquina.lessThenZero.length; d++) {
					// 
				}
				break;
			default:
				break;
		}
	};
	console.log(linhas.reduce((a, b) => {
		a += b;
		a += '\n';
		return a;
	}, ''))
	document.getElementById("textogerado").innerHTML = 'textGerado';
};

/**
 * Armazena
 * @param {string} i 
 * @param {number} length 
 * @returns 
 */
function padZeros(i, length) {
	let template = '0';
	for (let p = 1; p < length; p++) {
		template += ',0';
	}
	let asciiDistanceToA = i.charCodeAt(0) - 97
	const output = template.substring(0, asciiDistanceToA * 2) +
		i +
		template.substring(asciiDistanceToA * 2 + 1)
	return output
}

/**
 * Retorna
 * @param {string} rt
 * @param {number} length
 * @returns
 */
function padReturn(rt, length) {
	let templateListString = machineEntryList.toString();
	let asciiDistanceToA = rt.charCodeAt(0) - 97
	const output = templateListString.substring(0, asciiDistanceToA * 2) +
		rt +
		templateListString.substring(asciiDistanceToA * 2 + 1)
	return output
}

/**
 * Soma
 * @param {string} sum
 * @param {number} length
 * @returns
 */
function padSum(sum, length) {
	let templateListString = machineEntryList.toString();
	let asciiDistanceToA = sum.charCodeAt(0) - 97
	const output = templateListString.substring(0, asciiDistanceToA * 2) +
	sum +'+1' +
		templateListString.substring(asciiDistanceToA * 2 + 1)
	return output
}

/**
 * Dividir
 * @param {string} d
 * @param {number} length
 * @returns
 */
function padDividir(d, length) {
	let templateListString = machineEntryList.toString();
	let asciiDistanceToA = d.charCodeAt(0) - 97
	const output = templateListString.substring(0, asciiDistanceToA * 2) +
		d +'/2' +
		templateListString.substring(asciiDistanceToA * 2 + 1)
	return output
}

/**
 * Dividir
 * @param {string} d
 * @param {number} length
 * @returns
 */
function padMultiplicar(d, length) {
	let templateListString = machineEntryList.toString();
	let asciiDistanceToA = d.charCodeAt(0) - 97
	const output = templateListString.substring(0, asciiDistanceToA * 2) +
		d + '*2' +
		templateListString.substring(asciiDistanceToA * 2 + 1)
	return output
}

/**
 * Diminui >=0
 * @param {string} sub
 * @param {number} length
 * @returns
 */
function padSubtoZero(sub, length) {
	let templateListString = machineEntryList.toString();
	let asciiDistanceToA = sub.charCodeAt(0) - 97
	const output = templateListString.substring(0, asciiDistanceToA * 2) +
		sub + '-1' +
		templateListString.substring(asciiDistanceToA * 2 + 1)
	return output
}

/**
 * Diminui =0
 * @param {string} sub
 * @param {number} length
 * @returns
 */
function padSubEqualZero(sub, length) {
	let templateListString = machineEntryList.toString();
	let asciiDistanceToA = sub.charCodeAt(0) - 97
	const output = templateListString.substring(0, asciiDistanceToA * 2) +
		'0' +
		templateListString.substring(asciiDistanceToA * 2 + 1)
	return output
}