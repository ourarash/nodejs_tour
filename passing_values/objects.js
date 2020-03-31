function addDefaultName(person){
  person.firstName = "Tommy";
  person.lastName = "Trojan";
}

function main() {
  let p = {};
  addDefaultName(p);
  console.log('p: ', p);
}

main();

