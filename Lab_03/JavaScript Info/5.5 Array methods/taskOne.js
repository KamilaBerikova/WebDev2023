function toCap(str) {
    return str[0].toUpperCase() + str.slice(1);
};

function camelize(str) {
    let res = "";
    let splitStr = str.split("-");
    for(let k=0; k<splitStr.split("-").length; k++){
        if (k==0) res += splitStr[k];
        else res += toCap(splitStr[k]);
    }

    return res;
}