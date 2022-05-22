
var operationsButtons = document.getElementById('operations-button')
var input1 = document.getElementById('number1')
var input2 = document.getElementById('number2')

function Operation(operationCod) {

    var number1 = Number(input1.value)
    var number2 = Number(input2.value)

    if (operationCod === "+") {
        var result = number1 + number2
    } else if (operationCod === "-") {
        var result = number1 - number2
    } else if (operationCod === "*") {
        var result = number1 * number2
    } else if (operationCod === "/") {
        var result = number1 / number2
    } else {
        window.alert("error")
    }
    window.alert(result)
}

function onOperationsClick(eventObject) {
    var clikedElement = eventObject.currentTarget
    var OperationCliked = clikedElement.innerHTML
    Operation(OperationCliked)
}

function addCommonEventListener(i) {
}

var operationsButtons = [Plus, Minus, Multiply, Devide]

for (var i = 0; i < operationsButtons.length; i++) {
    var button = operationsButtons[i]
    button.addEventListener('click', onOperationsClick)
}