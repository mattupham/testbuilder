// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var two = cardNumber.slice(0,2);
  var one = cardNumber.slice(0,1);
  var four = cardNumber.slice(0,4);
  var three = cardNumber.slice(0,3);
  var six = cardNumber.slice(0,6)
  var len = cardNumber.length;
  // console.log('len: ' + len);
  var output;

  if ( (two === '38' || two === '39') && len === 14){
    output = "Diner's Club";
  } else if ((two === '34' || two === '37') && len === 15) {
    output = "American Express";
  } else if ( (four === '4903'|| four === '4905' || four === '4911' || four === '4936' || six === '564182' || six === '633110' || four === '6333' || four === '6759') && (len === 16 || len === 18 || len === 19) ) {
    output = "Switch";
  } else if ( (one === '4') && (len === 13 || len === 16 || len === 19) ) {
    output = "Visa";
  } else if ( (two === '51' || two === '52' || two === '53' || two === '54' || two === '55') && (len === 16) ) {
    output = "MasterCard";
  } else if ( (four === '6011' || three === '644' || three === '645' || three === '646' || three === '647' || three === '648' || three === '649' || two === '65') && (len === 16 || len === 19) ) {
    output = "Discover";
  } else if ( (four === '5018' || four === '5020' || four === '5038' || four === '6304') && (len >= 12 || len <= 19) ) {
    output = "Maestro";
  } else if ( (parseInt(six) >= 622126 && parseInt(six) <= 622925) || (parseInt(three) >= 624 && parseInt(three) <= 626) || (parseInt(four) >= 6282 && parseInt(four) <= 6288) && (len >= 16 || len <= 19) ) {
    output = "UnionPay";
  } else {
    output = "Other Card";
  }

  return output;
};


detectNetwork('38345678901234');
detectNetwork('39345678901234');
detectNetwork('343456789012345');
detectNetwork('373456789012345');
detectNetwork('4123456789012');
detectNetwork('4123456789012345');
detectNetwork('4123456789012345678');
detectNetwork('5112345678901234');
detectNetwork('5212345678901234');
detectNetwork('5312345678901234');
detectNetwork('5412345678901234');
detectNetwork('5512345678901234');



