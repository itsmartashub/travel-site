class Person {
    constructor(fullName, favColor) {
        this.name = fullName;
        this.favoriteColor = favColor;
    }

    greet() {
        console.log("Hello there, my name is " + this.name + " and my fav color is " + this.favoriteColor);
    }
}

/*
    console.log("hello from Person.js")
    exports.nekiProperty = "NEka super vrednost";
    exports.nekaFunckija = function() {
        alert("ovo je neki primer");
    }
*/
// i umesto da ovako exportujemo stvari export.Property....export.nekaFunkcija itd, ponaosob,i ne zelimo da ono sto exportujemo objekat koji ce da sadrzi stvari iz Person, zelimo da ono sto exportujemo BUDE Person, tako da umesto exports.paNesto bolje da targetujemo exports object parenta, sto je zapravo objekat koji se zove module:
// module.exports = Person;

// es16 i posto koristimo es16 import nacin, trebalo bi i da koristimo es6 export nacin:
export default Person;