function main() {
  let cup = {
    color: "red", // String
    bought_year: 2002, //Number
    owners: ["Ari", "Jess", "Tom"], // Array
    tea :{
      temperature : 100,
      color: "black"
    },
    "1": 4
  };



  // console.log('cup: ', cup);

  // console.log("cup.1: ", cup["1"] );


  // console.log('cup.color: ', cup.color);
  // console.log('cup.color: ', cup["color"]);

  console.log("cup: ", JSON.stringify(cup, null, 2));

  // console.log("cup.1: ", cup["1"]);

  // // Access a property using dot
  // console.log("cup.color: ", cup.color);

  // // Access a property using []
  // console.log('cup["color"]: ', cup["color"]);

  // // You can add more properties:
  // cup["age"] = 12;

  // console.log("cup: ", JSON.stringify(cup, null, 2));
}

main();
