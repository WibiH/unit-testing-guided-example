function sum(a, b) {
if (!a){
  return 0 + b;
} else if (!b){
  return a + 0;
} 
// I didn´t manage this one :(
else if (!a && !b){
  return 0 + 0;
}
else {
    return a + b;
}
}

function subtract(a, b) {
  if (!a){
    return 0-b;
  } else if (!b) {
    return a - 0;
  } else if (!a && !b){
    return 0 - 0;
  } else {
    return a - b;
}
}

function divide(a, b) {
  if (b === 0){
    throw new Error('An explanatory error message');
} else {
return a / b;
  }
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
