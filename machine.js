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
// Arrays de armazenamento
Armazenar = [];
Retornar = [];
Somar = [];
Subtrair = [];
Dividir = [];
multiplicar = [];
toZero = [];
greaterThenZero = [];
lessThenZero = [];
// Arrays de texto
txtArmazenar = [];
txtRetornar = [];
txtSomar = [];
txtSubtrair = [];
txtDividir = [];
txtmultiplicar = [];
txttoZero = [];
txtgreaterThenZero = [];
txtlessThenZero = [];

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
					if (TextLine[z][0] == letterArr.indexOf(Indexcompare)) {
						Armazenar.push(Indexcompare);
						txtArmazenar.push('Armazena_' + Indexcompare)
					}
				}
			}
			// retorna = 2
			else if (TextLine[z][1] == 2) {
				Indexcompare = [];
				for (let l = 0; l < letterArr.length; l++) {
					Indexcompare = letterArr[l];
					if (TextLine[z][0] == letterArr.indexOf(Indexcompare)) {
						Retornar.push(Indexcompare);
						txtRetornar.push('Retornar_' + Indexcompare)
					}
				}
			}
			// soma = 3
			else if (TextLine[z][1] == 3) {
				Indexcompare = [];
				for (let l = 0; l < letterArr.length; l++) {
					Indexcompare = letterArr[l];
					if (TextLine[z][0] == letterArr.indexOf(Indexcompare)) {
						Somar.push(Indexcompare);
						txtSomar.push('Somar_' + Indexcompare)
					}
				}
			}
			// subtrair = 4
			else if (TextLine[z][1] == 4) {
				Indexcompare = [];
				for (let l = 0; l < letterArr.length; l++) {
					Indexcompare = letterArr[l];
					if (TextLine[z][0] == letterArr.indexOf(Indexcompare)) {
						Subtrair.push(Indexcompare);
						txtSubtrair.push('Subtrair_' + Indexcompare)
					}
				}
			}
			// dividir = 5
			else if (TextLine[z][1] == 5) {
				Indexcompare = [];
				for (let l = 0; l < letterArr.length; l++) {
					Indexcompare = letterArr[l];
					if (TextLine[z][0] == letterArr.indexOf(Indexcompare)) {
						Dividir.push(Indexcompare);
						txtDividir.push('Dividir_' + Indexcompare)
					}
				}
			}
			// multiplicar = 6
			else if (TextLine[z][1] == 6) {
				Indexcompare = [];
				for (let l = 0; l < letterArr.length; l++) {
					Indexcompare = letterArr[l];
					if (TextLine[z][0] == letterArr.indexOf(Indexcompare)) {
						multiplicar.push(Indexcompare);
						txtmultiplicar.push('multiplicar_' + Indexcompare)
					}
				}
			}
			// =zero = 7
			else if (TextLine[z][1] == 7) {
				Indexcompare = [];
				for (let l = 0; l < letterArr.length; l++) {
					Indexcompare = letterArr[l];
					if (TextLine[z][0] == letterArr.indexOf(Indexcompare)) {
						toZero.push(Indexcompare);
						txttoZero.push('toZero_' + Indexcompare)
					}
				}
			}
			// Maior que Zero = 8
			else if (TextLine[z][1] == 8) {
				Indexcompare = [];
				for (let l = 0; l < letterArr.length; l++) {
					Indexcompare = letterArr[l];
					if (TextLine[z][0] == letterArr.indexOf(Indexcompare)) {
						greaterThenZero.push(Indexcompare);
						txtgreaterThenZero.push('greaterThenZero_' + Indexcompare)
					}
				}
			}
			// Menor igual a Zero = 9
			else if (TextLine[z][1] == 9) {
				Indexcompare = [];
				for (let l = 0; l < letterArr.length; l++) {
					Indexcompare = letterArr[l];
					if (TextLine[z][0] == letterArr.indexOf(Indexcompare)) {
						lessThenZero.push(Indexcompare);
						txtlessThenZero.push('lessThenZero_' + Indexcompare)
					}
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

	ArrayArmazenar = txtArmazenar.filter((este, i) => txtArmazenar.indexOf(este) === i);
	ArraytoZero = txttoZero.filter((este, i) => txttoZero.indexOf(este) === i);
	Arraymultiplicar = txtmultiplicar.filter((este, i) => txtmultiplicar.indexOf(este) === i);
	ArrayDividir = txtDividir.filter((este, i) => txtDividir.indexOf(este) === i);
	ArrayRetornar = txtRetornar.filter((este, i) => txtRetornar.indexOf(este) === i);
	ArraySomar = txtSomar.filter((este, i) => txtSomar.indexOf(este) === i);
	ArraygreaterThenZero = txtgreaterThenZero.filter((este, i) => txtgreaterThenZero.indexOf(este) === i);
	ArraySubtrair = txtSubtrair.filter((este, i) => txtSubtrair.indexOf(este) === i);
	ArraylessThenZero = txtlessThenZero.filter((este, i) => txtlessThenZero.indexOf(este) === i);

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


	// console.log(Maquina);
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
			// Nome ok
			case "Name":
				linhas.push(`Nome: ${value} = (N^${Maquina.Registers}, N^${Maquina.Armazenar.length}, N^${Maquina.Retornar.length}, ${ArrayArmazenar}, ${ArrayRetornar}, {${ArraySomar}, ${ArraySubtrair}, ${ArrayDividir}, ${Arraymultiplicar}},{${ArraytoZero}, ${ArraygreaterThenZero}, ${ArraylessThenZero}})`)
				linhas.push(`N^${Maquina.Registers} - Conjuntos de Memória`)
				linhas.push(`N^${Maquina.Armazenar.length} - Entradas`)
				linhas.push(`N^${Maquina.Retornar.length} - Conjuntos de Saída`)
				break;
			// Armazenar ok 
			case "Armazenar":
				for (let i = 0; i < Maquina.Armazenar.length; i++) {
					linhas.push(`armazena_${Maquina.Armazenar[i]}: N^${Maquina.Registers} tal que, ∀n∈N, armazena_${Maquina.Armazenar[i]}(n) = (${padZeros(Maquina.Armazenar[i], Maquina.Registers)});`)
				}
				break;
			// Retornar
			case "Retornar":
				for (let rt = 0; rt < Maquina.Retornar.length; rt++) {
					linhas.push(`retorna_${Maquina.Retornar[rt]}: N^${Maquina.Registers} -> N tal que, ∀(${machineEntryList})∈N^${Maquina.Registers}, retorna_${Maquina.Retornar[rt]}(${machineEntryList}) = ${padReturn(Maquina.Retornar[rt], machineEntryList.length)};`)
				}
				break;
			// Subtrair
			case "Subtrair":
				for (let sub = 0; sub < Maquina.Subtrair.length; sub++) {
					linhas.push(`subtrai_${Maquina.Subtrair[sub]}: N^${Maquina.Registers} -> N^${Maquina.Registers} tal que, ∀(${machineEntryList})∈N^${Maquina.Registers}, subtrai_${Maquina.Subtrair[sub]}(${machineEntryList}) = (${padSubtoZero(Maquina.Subtrair[sub], machineEntryList.length)}), se ${padSubtoZeroFinal(Maquina.Subtrair[sub], machineEntryList.length)}≥0; subtrai_${Maquina.Subtrair[sub]}(${machineEntryList}) = (${machineEntryList}), se ${padSubtoZeroFinal(Maquina.Subtrair[sub], machineEntryList.length)} = 0`)
				}
				break;
			// Somar
			case "Somar":
				for (let sum = 0; sum < Maquina.Somar.length; sum++) {
					// console.log(Maquina.length)
					linhas.push(`adiciona_${Maquina.Somar[sum]}: N^${Maquina.Registers} -> N^${Maquina.Registers} tal que, ∀(${machineEntryList})∈N^${Maquina.Registers}, adiciona_${Maquina.Somar[sum]}(${machineEntryList}) = (${padSum(Maquina.Somar[sum], machineEntryList.length)});`)
				}
				break;
			// ifZero
			case "toZero":
				for (let d = 0; d < Maquina.toZero.length; d++) {
					linhas.push(`${Maquina.toZero[d]}_zero -> {verdadeiro, falso} tal que, ∀(${machineEntryList}),∈N^${Maquina.Registers}, ${Maquina.toZero[d]}_zero(${machineEntryList}) = verdadeiro, se ${equalZero(Maquina.toZero[d], machineEntryList.length)} = 0; ${Maquina.toZero[d]}_zero(${machineEntryList}) = falso, se ${equalZero(Maquina.toZero[d], machineEntryList.length)} ≠ 0`)
				}
				break;
			// dividir
			case "Dividir":
				for (let d = 0; d < Maquina.Dividir.length; d++) {
					linhas.push(`dividir_${Maquina.Dividir[d]}/2: N^${Maquina.Registers} -> N^${Maquina.Registers} tal que, ∀(${machineEntryList})∈N^${Maquina.Registers}, dividir_${Maquina.Dividir[d]}(${machineEntryList}) = (${padDividir(Maquina.Dividir[d], machineEntryList.length)});`)
				}
				break;
			// multiplicar
			case "multiplicar":
				for (let d = 0; d < Maquina.toZero.length; d++) {
					linhas.push(`multiplicar_${Maquina.multiplicar[d]}*2: N^${Maquina.Registers} -> N^${Maquina.Registers} tal que, ∀(${machineEntryList})∈N^${Maquina.Registers}, multiplicar_${Maquina.multiplicar[d]}(${machineEntryList}) = (${padMultiplicar(Maquina.multiplicar[d], machineEntryList.length)});`)
				}
				break;
			// maior que zero
			case "greaterThenZero":
				for (let d = 0; d < Maquina.greaterThenZero.length; d++) {
					linhas.push(`${Maquina.greaterThenZero[d]}_greaterThanZero -> {verdadeiro, falso} tal que, ∀(${machineEntryList}),∈N^${Maquina.Registers}, ${Maquina.greaterThenZero[d]}_greaterThanZero(${machineEntryList}) = verdadeiro, se ${padgreaterThenZero(Maquina.greaterThenZero[d], machineEntryList.length)} > 0; ${Maquina.greaterThenZero[d]}_greaterThanZero(${machineEntryList}) = falso, se ${padgreaterThenZero(Maquina.greaterThenZero[d], machineEntryList.length)} ≤ 0`)
				}
				break;
			// menor que zero
			case "lessThenZero":
				for (let d = 0; d < Maquina.lessThenZero.length; d++) {
					linhas.push(`${Maquina.lessThenZero[d]}_lessThanZero -> {verdadeiro, falso} tal que, ∀(${machineEntryList}),∈N^${Maquina.Registers}, ${Maquina.lessThenZero[d]}_lessThanZero(${machineEntryList}) = verdadeiro, se ${padlessThanZero(Maquina.lessThenZero[d], machineEntryList.length)} < 0; ${Maquina.lessThenZero[d]}_lessThanZero(${machineEntryList}) = falso, se ${padlessThanZero(Maquina.lessThenZero[d], machineEntryList.length)} ≥ 0`)
				}
				break;
			default:
				break;
		}
	};
	for (let i = 0; i < linhas.length; i++) {
		var x = document.createElement("div");
		var t = document.createTextNode(linhas[i]);
		x.appendChild(t);
		document.getElementById('textogerado').appendChild(x);
	}
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
 * letterArr
 */
function padReturn(rt, length) {
	for (i = 0; i < length; i++) {
		if (letterArr[i] == rt) {
			const output = machineEntryList[i]
			return output
		}
	}
}

/**
 * Soma
 * @param {string} sum
 * @param {number} length
 * @returns
 */
function padSum(sum, length) {
	for (i = 0; i < length; i++) {
		if (letterArr[i] == sum) {
			const savememory = machineEntryList[i]
			let templateListString = machineEntryList.toString();
			let asciiDistanceToA = sum.charCodeAt(0) - 97
			const output = templateListString.substring(0, asciiDistanceToA * 2) +
				savememory + '+1' +
				templateListString.substring(asciiDistanceToA * 2 + 1)
			return output
		}
	}
}

/**
 * Dividir
 * @param {string} d
 * @param {number} length
 * @returns
 */
function padDividir(d, length) {
	for (i = 0; i < length; i++) {
		if (letterArr[i] == d) {
			const savememory = machineEntryList[i]
			let templateListString = machineEntryList.toString();
			let asciiDistanceToA = d.charCodeAt(0) - 97
			const output = templateListString.substring(0, asciiDistanceToA * 2) +
				savememory + '/2' +
				templateListString.substring(asciiDistanceToA * 2 + 1)
			return output
		}
	}
}

/**
 * Multiplicar
 * @param {string} d
 * @param {number} length
 * @returns
 */
function padMultiplicar(d, length) {
	for (i = 0; i < length; i++) {
		if (letterArr[i] == d) {
			const savememory = machineEntryList[i]
			let templateListString = machineEntryList.toString();
			let asciiDistanceToA = d.charCodeAt(0) - 97
			const output = templateListString.substring(0, asciiDistanceToA * 2) +
				savememory + '*2' +
				templateListString.substring(asciiDistanceToA * 2 + 1)
			return output
		}
	}
}

/**
 * Diminui >=0
 * @param {string} sub
 * @param {number} length
 * @returns
 */
function padSubtoZero(sub, length) {
	for (i = 0; i < length; i++) {
		if (letterArr[i] == sub) {
			const savememory = machineEntryList[i]
			let templateListString = machineEntryList.toString();
			let asciiDistanceToA = sub.charCodeAt(0) - 97
			const output = templateListString.substring(0, asciiDistanceToA * 2) +
				savememory + '-1' +
				templateListString.substring(asciiDistanceToA * 2 + 1)
			return output
		}
	}
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

/**
 * subtrair final
 * @param {string} sub
 * @param {number} length
 * @returns
 */
function padSubtoZeroFinal(sub, length) {
	for (i = 0; i < length; i++) {
		if (letterArr[i] == sub) {
			const output = machineEntryList[i]
			return output
		}
	}
}

/**
 * =zero
 * @param {string} d
 * @param {number} length
 * @returns
 */
function equalZero(d, length) {
	for (i = 0; i < length; i++) {
		if (letterArr[i] == d) {
			const output = machineEntryList[i]
			return output
		}
	}
}


/**
 * menor que zero
 * @param {string} d
 * @param {number} length
 * @returns
 */
function padgreaterThenZero(d, length) {
	for (i = 0; i < length; i++) {
		if (letterArr[i] == d) {
			const output = machineEntryList[i]
			return output
		}
	}
}

/**
 * Maior que zero
 * @param {string} d
 * @param {number} length
 * @returns
 */
function padlessThanZero(d, length) {
	for (i = 0; i < length; i++) {
		if (letterArr[i] == d) {
			const output = machineEntryList[i]
			return output
		}
	}
}