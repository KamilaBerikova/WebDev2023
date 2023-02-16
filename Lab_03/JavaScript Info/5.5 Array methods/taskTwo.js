function filterRange(arr, a, b) {
    return arr.filter(
        value => (a <= value && value <= b)
    );
};

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered);

alert(arr);