/*
JavaScript Functions
*/


// Function Name ( Function parameter)
function name(firstName, lastName) {
    console.log('Hello ' + firstName + ' ' + lastName);
  }
  name('Shahidul', 'Alam');
  
  // Function as Variable
  let sayHello = function () {
    return ('Hi');
  }
  
  console.log(sayHello());
  
  
  
  function math(number) {
    return number + number;
  }
  
  console.log(math(6));