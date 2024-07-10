
require('./sample') // display automatically

const file=require('./sample') // function import
file.displayHello()

const {displayHello}=require('./sample') // function import using destructure
displayHello()