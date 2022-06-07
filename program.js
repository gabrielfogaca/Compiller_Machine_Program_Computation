let currentLine = 1

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
    programNode.appendChild(div)
    let lineDiv = document.getElementById("line," + currentLine.toString())
    let lineSpan = document.createElement("span")
        lineSpan.textContent = currentLine.toString() + ":  "
        lineDiv.appendChild(lineSpan)
    
    let doOrIf = document.createElement("select")
        doOrIf.id = "doOrIfline," + currentLine.toString()
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

function buildInput(dom) {
    console.log(dom)
    let previousLine = currentLine - 1
    if (dom.Window) return
    let condition = document.createElement("select")
    condition.id = "condition" + previousLine.toString()
    let el = document.getElementById(dom.id)
    let elParent = el.parentNode

    if (dom.value === "faca") {
        if(document.getElementById("line," + previousLine.toString())) {
            document.getElementById("line," + previousLine.toString()).remove()
        }

        // let div = document.createElement("div")
        // div.id = "line," + currentLine.toString()
        // elParent.appendChild(div)

        let thisDiv = document.getElementById("line," + previousLine.toString())
        thisDiv.appendChild(condition)
        thisCondition = document.getElementById("condition"+previousLine.toString())
        console.log(thisCondition)
        for (index = 0 ; index < mocadao.sums.length ; index++) {
            let doInput = document.createElement("option")
            doInput.id = "sums," + mocadao.sums[index]
            doInput.text = "sums," + mocadao.sums[index]
            thisCondition.appendChild(doInput)
        }
        for (index = 0 ; index < mocadao.subs.length ; index++) {
            let doInput = document.createElement("option")
            doInput.id = "subs," + mocadao.sums[index]
            doInput.text = "subs," + mocadao.sums[index]
            thisCondition.appendChild(doInput)
        }
        let paragraph = document.createElement("span")
        paragraph.textContent = "va_para"
        thisDiv.appendChild(paragraph)

        let goToInput = document.createElement("input")
        goToInput.type = "number"
        goToInput.id = "input," + previousLine.toString()
        thisDiv.appendChild(goToInput)
    }

    if (dom.value === "se") {
        console.log(dom)
        // if(document.getElementById("line," + currentLine.toString())) {
        //     document.getElementById("line," + currentLine.toString()).remove()
        // }

        // let div = document.createElement("div")
        // div.id = "line," + currentLine.toString()
        // elParent.appendChild(div)

        // let thisDiv = document.getElementById("line," + currentLine.toString())
        // thisDiv.appendChild(condition)
        // thisCondition = document.getElementById("condition"+currentLine.toString())

        // for (index = 0 ; index < mocadao.ifZero.length ; index++) {
        //     let doInput = document.createElement("option")
        //     doInput.id = "ifZero," + mocadao.sums[index]
        //     doInput.text = "ifZero," + mocadao.sums[index]
        //     thisCondition.appendChild(doInput)
        // }

    }
    //console.log(elParent);
    
    
}