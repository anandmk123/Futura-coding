// Define three example functions, but one of them contains asynchronous code
function first() {
    console.log(1)
  }
  
//setTimeout, which sets a timer and performs an action after a specified amount of time. setTimeout needs to be asynchronous, 
//otherwise the entire browser would remain frozen during the waiting, which would result in a poor user experience.

  function second() {
    setTimeout(() => {
      console.log(2)
    }, 0)
  }
  
  function third() {
    console.log(3)
  }

  // Execute the functions
first()
second()
third()

//output: 1 3 2

//Whether you set the timeout to zero seconds or five minutes will make no difference—the console.log 
//called by asynchronous code will execute after the synchronous top-level functions.