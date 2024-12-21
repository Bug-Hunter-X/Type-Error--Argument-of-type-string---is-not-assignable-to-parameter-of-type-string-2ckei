function greeter(person: string[]): string {
  return "Hello, " + person.join(', ');
}

let user = ["Jane Doe", "John Smith"];
console.log(greeter(user)); //Correct

//Alternative solution
function greeter2(person: string): string {
    return "Hello, " + person;
}

let user2 = ["Jane Doe", "John Smith"];
user2.forEach(user => console.log(greeter2(user))); //Correct