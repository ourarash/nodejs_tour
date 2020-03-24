function main() {
  let cup = {
    color: "red", // String
    bought_year: 2002, //Number
    owners: ["Ari", "Jess", "Tom"] // Array
  };

  console.log("cup: ", JSON.stringify(cup, null, 2));

  // Access a property using dot
  console.log("cup.color: ", cup.color);

  // Access a property using []
  console.log('cup["color"]: ', cup["color"]);

  // You can add more properties:
  cup["age"] = 12;

  console.log("cup: ", JSON.stringify(cup, null, 2));
}

main();
