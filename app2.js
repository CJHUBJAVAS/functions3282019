const bruce = {
    name: "Bruce",
    greet: function() {
        return `Hello ${this.name}`;
    }
};

console.log(bruce.greet());

const madeline = {name: "Madeline"};

function greet() {
    return `Hello ${this.name}`;
}

madeline.greet = greet;

console.log(madeline.greet());
console.log(greet());