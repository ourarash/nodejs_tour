function addDefaultName(person) {
  person.firstName = "Tommy";
  person.lastName = "Trojan";
  p2 = {
    firstName: "Ari",
    lastName: "jones"
  };
  
  person = p2;
  return person;
}

function main() {
  let p = {};
  p = addDefaultName(p);
  console.log("p: ", p);
}

main();
