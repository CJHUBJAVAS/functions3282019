var name = "Other Bruce";

const bruce = {
    name: "Bruce",
    bruceGreet: function() {
        console.log(name);
        this.name = "This Bruce";
        return `Hello ${this.name}`;
    }
};

console.log(bruce.bruceGreet());

var bruceCopy = bruce;
var x = 10;
var y = x;
y = 11;

bruceCopy.name = "BigBruce";


const madeline = {name: "Madeline"};
function greet() {
    return `Hello ${this.name}`;
}

madeline.greet = greet;

console.log(madeline.greet());
console.log(greet());