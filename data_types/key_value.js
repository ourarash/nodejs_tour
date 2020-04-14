function someFunction (){
  let myObj = {
    firstName: "Ari",
    lastName: "Saif"
  }

  let keys = Object.keys(myObj);
  let values = Object.values(myObj);

  console.log('keys: ', keys);
  console.log('values: ', values);

  for (let [key, value] of Object.entries(myObj)) {
    console.log(`${key}: ${value}`);
  }
}

someFunction();