function displayNumers(val) {
    document.getElementById("field").value += val;
    return val;
}

function solveCalculus() {
    let field = document.getElementById("field").value;
    let solve = eval(field);
    document.getElementById("field").value = solve;
    return solve;
}

function clean() {
    document.getElementById("field").value = "";
}