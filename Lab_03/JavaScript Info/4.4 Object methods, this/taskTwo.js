let calculator = {
    read: function() {
        this.a = +prompt("Input a: ", 0);
        this.b = +prompt("Input b: ", 0);
    },
    mul: function() {
        return this.a * this.b;
    },
    sum: function() {
        return this.a + this.b;
    },

};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );