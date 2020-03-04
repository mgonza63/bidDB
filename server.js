var text;
var favDrink = prompt("? Would you like to [POST] an auction or [BID] on an auction?");
switch (favDrink) {
    case "Martini":
        text = "Excellent choice! Martini is good for your soul.";
        break;
    case "Daiquiri":
        text = "Daiquiri is my favorite too!";
        break;
    case "Cosmopolitan":
        text = "Really? Are you sure the Cosmopolitan is your favorite?";
        break;
    default:
        text = "I have never heard of that one..";
        break;
}