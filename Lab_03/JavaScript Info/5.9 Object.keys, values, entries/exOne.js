function sumSalaries(salaries) {

    let sum = 0;
    for (let key of salaries) {
        sum += salaries[key];
    }

    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(sumSalaries(salaries));