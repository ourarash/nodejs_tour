
function myVeryLongFunction(param1, yourCallBack) {
  // use param1 to do your long work
  let data = 0;
  let err = null;
  for (let i = 0; i < 1000000; i++) {
    data += i;
    // if (overflow){
    //   err ="overflow";
    // }
  }
  yourCallBack(err, data);
}
