function someFunction (){
  let myArray = [1, 2, 3, 4, 5, 6];

  for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log('element: ', element);
  }
  
  for(let e of myArray){
    console.log('e: ', e);
  }

}

someFunction();