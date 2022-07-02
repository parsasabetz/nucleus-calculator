

let calculator_buttons = [

    {
        name : "num 7",
        symbol : 7,
        formula : 7,
        type : "number"
    },
    {
        name : "num 8",
        symbol : 8,
        formula : 8,
        type : "number"
    },
    {
        name : "num 9",
        symbol : 9,
        formula : 9,
        type : "number"
    },
    {
        name : "addition operators",
        symbol : " + ",
        formula : " + ",
        type : "operator"
    },
    // ----------------------------
    {
        name : "open-parenthesis mid",
        symbol : "( ",
        formula : "( ",
        type : "number"
    },
    {
        name : "close-parenthesis mid",
        symbol : " )",
        formula : " )",
        type : "number"
    },
    ,{
        name : "percent mid",
        symbol : "%",
        formula : "/100",
        type : "number"
    },
    // ----------------------------
    {
        name : "Ans operators",
        symbol : "Ans",
        formula : "ans",
        type : "key"
    },
    {
        name : "clear",
        symbol : "C",
        formula : false,
        type : "key"
    },
    {
        name : "delete",
        symbol : "⌫",
        formula : false,
        type : "key"
    },
    // ----------------------------
    {
        name : "num 4",
        symbol : 4,
        formula : 4,
        type : "number"
    },
    {
        name : "num 5",
        symbol : 5,
        formula : 5,
        type : "number"
    },
    {
        name : "num 6",
        symbol : 6,
        formula : 6,
        type : "number"
    },
    {
        name : "subtraction operators",
        symbol : " – ",
        formula : " - ",
        type : "operator"
    },
    {
        name : "log mid",
        symbol : "log<sub style='font-size:1rem;'>10</sub>",
        formula : "log",
        type : "math_function"
    },
    {
        name : "ln mid",
        symbol : "ln",
        formula : "Ln",
        type : "math_function"
    },
    {
        name : "factorial mid",
        symbol : "×!",
        formula : "factorial(",
        type : "math_function"
    },
    {
        name : "sin num",
        symbol : "sin",
        formula : "sin( ",
        type : "trigo_function"
    },
    {
        name : "cos num",
        symbol : "cos",
        formula : "cos( ",
        type : "trigo_function"
    },
    {
        name : "tan num",
        symbol : "tan",
        formula : "tan( ",
        type : "trigo_function"
    },
    {
        name : "num 1",
        symbol : 1,
        formula : 1,
        type : "number"
    },
    {
        name : "num 2",
        symbol : 2,
        formula : 2,
        type : "number"
    },
    {
        name : "num 3",
        symbol : 3,
        formula : 3,
        type : "number"
    },
    {
        name : "multiplication operators",
        symbol : " × ",
        formula : "*",
        type : "operator"
    },
    {
        name : "square mid",
        symbol : "x²",
        formula : "2)",
        type : "math_function"
    },
    {
        name : "power mid",
        symbol : "x<span>y</span>",
        formula : ")",
        type : "math_function"
    },
    {
        name : "square-root mid",
        symbol : "√",
        formula : "^(0.5)",
        type : "math_function"
    },
    {
        name : "cot num",
        symbol : "cot",
        formula : "1/tan( ",
        type : "trigo_function"
    },
    {
        name : "calculate",
        symbol : "=",
        formula : "=",
        type : "calculate"
    },
    {
        name : "ip imd",
        symbol : "π",
        formula : "pi",
        type : "number"
    },
    {
        name : "num zero",
        symbol : 0,
        formula : 0,
        type : "number"
    },
    {
        name : "comma mid",
        symbol : ".",
        formula : ".",
        type : "number"
    },
    {
        name : "division operators",
        symbol : " ÷ ",
        formula : "/",
        type : "operator"
    },
    {
        name : "e mid",
        symbol : "e",
        formula : "e",
        type : "number"
    },
    {
        name : "pi mid",
        symbol : "π",
        formula : "pi",
        type : "number"
    }
];


let data = {
    operation : [],
    formula : [],
};

export {calculator_buttons, data};