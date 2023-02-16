function getAverageAge(users) {
    let totSum = 0;

    for(let k=0; k<users.length; k++){
        totSum += users[0].age;
    }

    return totSum/users.length;
};

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) );