function calc_result(num_1, num_2, operator){
    if (operator === "+"){
        console.log(num_1 + num_2);
    }
    else if (operator === "-"){
        console.log(num_1 - num_2);
    }
    else if (operator === "*"){
        console.log(num_1 * num_2);
    }
    else if (operator === "/"){
        console.log(num_1 /num_2);
    }
    else if (operator === "%"){
        console.log(num_1 % num_2);
    }else if (operator === "**"){
        console.log(num_1 ** num_2);
    }
}


calc_result(5, 2, "+")
calc_result(5, 2, "-")
calc_result(5, 2, "*")
calc_result(5, 2, "/")
calc_result(5, 2, "%")
calc_result(5, 2, "**")