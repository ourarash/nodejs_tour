function addDefaultName(person) {
  person.firstName = "Tommy";
  person.lastName = "Trojan";
  p2 = {
    firstName: "Ari",
    lastName: "jones"
  };

  person = p2;
}

function main() {
  let p = {};
  addDefaultName(p);
  console.log("p: ", p);
}

main();
