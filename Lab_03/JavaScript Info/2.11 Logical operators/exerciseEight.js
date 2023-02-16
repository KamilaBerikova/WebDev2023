let who = prompt("Who is there", ""),
    password = "";

if (who == "Admin") {
    password = prompt("Your password", "");

    if (password == "TheMaster") alert("Welcome!");
    else if (password === "" || password === null) alert("Canceled");
    else alert("Wrong password");
}
else if (who === "" || who === null) alert("Canceled");
else alert("I don't know you");
