let calculator_buttons = [
    ,{
        name : "0",
        symbol : 0,
        formula : 0,
        type : "number"
    }
    ,{
        name : "1",
        symbol : 1,
        formula : 1,
        type : "number"
    },{
        name : "2",
        symbol : 2,
        formula : 2,
        type : "number"
    },{
        name : "3",
        symbol : 3,
        formula : 3,
        type : "number"
    },{
        name : "4",
        symbol : 4,
        formula : 4,
        type : "number"
    },{
        name : "5",
        symbol : 5,
        formula : 5,
        type : "number"
    },{
        name : "6",
        symbol : 6,
        formula : 6,
        type : "number"
    },{
        name : "7",
        symbol : 7,
        formula : 7,
        type : "number"
    },{
        name : "8",
        symbol : 8,
        formula : 8,
        type : "number"
    },{
        name : "9",
        symbol : 9,
        formula : "9",
        type : "number"
    },{
        name : "cos",
        symbol : "cos",
        formula : "Math.cos(",
        type : "trigo_function"
    },{
        name : "sin",
        symbol : "sin",
        formula : "Math.sin(",
        type : "trigo_function"
    },{
        name : "tan",
        symbol : "tan",
        formula : "Math.tan(",
        type : "trigo_function"
    },{
        name : "division",
        symbol : "÷",
        formula : "/",
        type : "operator"
    },{
        name : "multiplication",
        symbol : "x",
        formula : "*",
        type : "operator"
    },{
        name : "addition",
        symbol : "+",
        formula : "+",
        type : "operator"
    },{
        name : "subtraction",
        symbol : "-",
        formula : "-",
        type : "operator"
    },{
        name : "percent",
        symbol : "%",
        formula : "/100",
        type : "number"
    },{
        name : "calculate",
        symbol : "=",
        formula : "=",
        type : "calculate"
    },{
        name : "clear",
        symbol : "AC",
        formula : false,
        type : "key"
    },
    {
        name : "delete",
        symbol : "DEL",
        formula : false,
        type : "key"
    },,
    {
        name : "decimal",
        symbol : ".",
        formula : false,
        type : "key"
    },{
        name : "close-parenthesis",
        symbol : ")",
        formula : ")",
        type : "number"
    },{
        name : "open-parenthesis",
        symbol : "(",
        formula : "(",
        type : "number"
    }, {
        name : "square-root",
        symbol : "√",
        formula : "Math.sqrt",
        type : "math_function"
    },
     {
        name : "log",
        symbol : "log",
        formula : "Math.log10",
        type : "math_function"
    },{
        name : "power",
        symbol : "x<span>y</span>",
        formula : "POWER",
        type : "math_function"
    },{
        name : "square",
        symbol : "x²",
        formula : "POWER",
        type : "math_function"
    },
    {
        name : "ANS",
        symbol : "ANS",
        formula : "ans",
        type : "number"
    },{
        name : "comma",
        symbol : ".",
        formula : ".",
        type : "number"
    },
]


const previousOperandScreen = document.getElementsByClassName("previous-operand ")[0]
const currentOperandScreen = document.getElementsByClassName("current-operand ")[0]
const mainCalculator = document.getElementsByClassName('calculator-grid')[0]

//Some Variables
const Operators = ["+", "-", "*", "/"]


let data = {
    operation : [],
    formula : [],  
}

let POWER = "POWER)";
//Event Listener
mainCalculator.addEventListener('click', event => {
    const target_btn = event.target
    calculator_buttons.forEach(button => {
        if(button.symbol == target_btn.innerHTML) calculator(button) 
    
    })
    
})


//Calculator 

function calculator(button) {
    if(button.type == "operator") { 
        {data.operation.push(button.symbol)
        data.formula.push(button.formula)  
    }
}
    else if(button.type == "number") {
            data.operation.push(button.symbol);
            data.formula.push(button.formula);
    } if(button.type == "trigo_function") {
        data.operation.push(button.symbol + "(")
        data.formula.push(button.formula)
    } else if(button.type == "math_function") {
        let symbol, formula;
      //  console.log(button.name);
         if(button.name == "square") {
            symbol = "^(";
            formula = button.formula
            data.operation.push(symbol)
            data.formula.push(formula)

            data.operation.push("2)")
            data.formula.push("2)")
        } else if(button.name == "power") {
            symbol = "^(";
            formula = button.formula
            data.operation.push(symbol)
            data.formula.push(formula)
        } else{
            symbol = button.symbol + "("
            formula = button.formula + "("
            data.operation.push(symbol);
            data.formula.push(formula);
        }
    } else if(button.type == "key") {
        if(button.name == "clear") {
            data.operation= []
            data.formula = []
            updateOutputResult('')
        } else if (button.name == "delete") {
            data.operation.pop()
            data.formula.pop()
        }        
    } else if(button.type == "calculate") {
        formula_str = data.formula.join('');
        let result;
        try{
            result = eval(formula_str);
        } catch(error) {
            if(error instanceof SyntaxError) {
                result = "syntax error"
                console.log("<h4>result</h4>");
                updateOutputResult(result)
                return;
            }
        }
        ans = result;
        data.operation = [result]
        data.formula = [result]
        updateOutputResult(result)
    }

    updateOutputOperation(data.operation.join(''));
}

function updateOutputOperation(operation) {
    previousOperandScreen.innerHTML = operation
}

function updateOutputResult(result) {
    currentOperandScreen.innerHTML = result
}

 