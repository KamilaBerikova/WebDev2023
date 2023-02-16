function multiplyNumeric(obj) {
    for (let key in obj) {
        if (obj[key] instanceof Number) {
            obj[key] *= 2;
        }
    }
};

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
multiplyNumeric(menu);

menu = {
    width: 400,
    height: 600,
    title: "My menu"
};