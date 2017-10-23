function sum(a,b){ //eslint-disable-line
  var theSum = a + b;
  var message = 'The sum of ' + a + ' and ' + b + ' is ' + theSum + '.';
  console.log (message)
  return [theSum, message];
}
//
// // TODO: Here is the test for sum(); uncomment it to run it
testSum(4, 7);
