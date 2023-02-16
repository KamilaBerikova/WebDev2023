function unique(arr) {
    let uniqueRes = [];
    for(let k=0; k<arr.length; k++){
        if(!uniqueRes.indexOf(arr[k])) uniqueRes.push(arr[k]);
    }
    return uniqueRes;
};

let strings = [
    "Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(strings)); // Hare, Krishna, :-O