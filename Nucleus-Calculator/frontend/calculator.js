import { calculator_buttons, data } from "./ui_data.js";

// SELECTING ELEMENTS
const calcBody = document.querySelector(".calc-container");
const output_element = document.querySelector(".output");
const input_element = document.querySelector(".input");
const output_operation_element = document.querySelector(".operation .value");
const output_result_element = document.querySelector(".result .value");

const history_button = document.getElementById("history-button");
const settings_button = document.getElementById("settings-button");
const history_list = document.querySelector(".history-inactive");
const settings = document.querySelector(".settings-inactive");
const close_button1 = document.getElementById("ggclose1")
const close_button2 = document.getElementById("ggclose2")
const error_message = document.querySelector(".error-msg");
const main_history_list = document.getElementById("history_last10_list");
const main_settings_list = document.getElementById("settings_allLogs_list");

// creating the ans button memory
let last_answer = 0;
function lastAns(last_data = []) {
        data.operation.push(last_answer);
        data.formula.push(last_answer);
        addToOutputOperation(last_answer);
};

// Adding blur style to calculator-container when history and settings pages are opened:
let calcBody_blur = function(add_or_remove) {
    if (add_or_remove == 'add') { calcBody.classList.add("but-active"); output_element.classList.add("output-inactive"); }
    else if (add_or_remove == 'remove') {calcBody.classList.remove("but-active"); output_element.classList.remove("output-inactive"); }
    else {console.error('The argument passed to calcBody_blur function is not defined!');}
}

// HISTORY BUTTON
history_button.addEventListener("click", () => {
    calcBody_blur('add');
    get_history_data();
    history_list.classList.add("history-active");
});
// History CLOSE BUTTON
close_button2.addEventListener("click", () => {
    calcBody_blur('remove');
    history_list.classList.remove("history-active");
    remove_list(main_history_list);
})

// SETTINGS BUTTON
settings_button.addEventListener("click", () => {
    calcBody_blur('add');
    get_logs_data();
    settings.classList.add("settings-active");
});
// Settings CLOSE BUTTON
close_button1.addEventListener("click", () => {
    calcBody_blur('remove');
    settings.classList.remove("settings-active");
    remove_list(main_settings_list);
})

// BUTTONS:
const btns_per_row = 10;
let added_btns = 0;
calculator_buttons.forEach( (button) => {
    if (added_btns % btns_per_row == 0) {
        input_element.innerHTML += `<div class="row"></div>`;
    }
    let row = document.querySelector(".row:last-child");
        row.innerHTML += `<button class="${button.name}">${button.symbol}</button>`;
        added_btns ++;
});

// BUTTON FUNCTIONALITIES:
input_element.addEventListener("click", (event) => {
    const target_btn = event.target;
    calculator_buttons.forEach( (button) => {
                if ( (button.name == target_btn.className) ) {calculator_function(button);}
    });

});

// SEPERATE KEY FUNCTIONALITIES
function calculator_function(button) {

        let ans_check_click = 0;

    if (button.type == 'operator') {
        data.operation.push(button.symbol);
        data.formula.push(button.formula);

    } else if (button.type == 'number') {
        data.operation.push(button.symbol);
        data.formula.push(button.formula);

    } else if (button.type == 'trigo_function') {
        data.operation.push(button.symbol + "( ");
        data.formula.push(button.formula);

    } else if (button.type == 'math_function') { 
        let symbol, formula;
                if (button.name.includes("factorial mid")) {
                    symbol = "!( ";
                    formula = button.formula;
                    data.operation.push(symbol);
                    data.formula.push(formula);

                } else if (button.name.includes("power mid")) {
                    symbol = "^( ";
                    formula = "^(";
                    data.operation.push(symbol);
                    data.formula.push(formula);

                } else if (button.name.includes("square mid")) {
                    symbol = "^( 2 )";
                    formula = "^(" + button.formula;
                    data.operation.push(symbol);
                    data.formula.push(formula);

                } else if (button.name.includes("square-root mid")) {
                    symbol = "^( 0.5 )";
                    formula = button.formula;
                    data.operation.push(symbol);
                    data.formula.push(formula);

                } else {
                    symbol = button.symbol + "( ";
                    formula = button.formula + "(";
                    data.operation.push(symbol);
                    data.formula.push(formula);
                };

    } else if (button.type == 'key') {
            if ( button.name == 'clear' ) {
                data.operation = [];
                data.formula = [];
                    updateOutputResult(0);
            } else if ( button.name == 'delete' ) {
                    data.operation.pop();
                    data.formula.pop();
            } else if ( button.name.includes("Ans operators") ) {
                ans_check_click = 1;
            };

    } else if (button.type == 'calculate') {
        let formula_str = data.formula.join('');
        let result = get_num_res(formula_str);
            last_answer = result;
                updateOutputResult(result);
    };
    if ( ans_check_click == 1 ) {lastAns(last_answer)} else if (ans_check_click == 0) {updateOutputOperation( data.operation.join('') )};
};

// Gettiing Results into JS from Py
async function get_num_res(exp_num) {
    let result = await eel.get_num_data(exp_num)();
    console.log(result);
    last_answer = result;
    updateOutputResult(result);
    return result;
};

// FINAL OUTPUTTING FUNCTIONS
function addToOutputOperation(new_operation) {
    output_operation_element.innerHTML += new_operation;
};
function updateOutputOperation(operation) {
    output_operation_element.innerHTML = operation;
};
function updateOutputResult(result) {
    output_result_element.innerHTML = result;
};

// Fetching last 10 history
async function get_history_data() {
    let last_10_history = await eel.get_history_data()();
    last_10_history.forEach( (item) => {
        main_history_list.innerHTML += `<li id="each_history_list"> ${item} </li>`
    });
};

// Fetching all logs
async function get_logs_data() {
    let all_logs = await eel.get_logs_data()();
    all_logs.forEach( (item) => {
        main_settings_list.innerHTML += `<li id="each_settings_list"> ${item} </li>`
    });
};

// Closing lists
function remove_list(list_element) {
    return list_element.innerHTML = '';
};


// THE ENTIRE CODEBASE IS ORIGINALLY WRITTEN BY THE DEVELOPER OF NUCLEUS CALCULATOR APP, PARSA SABETZADEH.