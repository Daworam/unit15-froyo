//create a function that takes in a string of items separated by commas via prompt
//function takes user input string, separated by commas and creates an array
// function takes items from the array
// function determines if any input items are duplicates
//function outputs an object with a count of how many times each input is registered

const orderInput = prompt("Please list what flavor you would for like each scoop:")
const testOrder = 'vanilla,vanilla,vanilla,strawberry,coffee,coffee'


const flavorConverter = (inputFlavors) => {
  const flavorArray = inputFlavors.split(',')
  return flavorArray
}



const addToOrder = (flavors) => {

  let flavorsIn = flavorConverter(flavors)
  let orderObj = {}

  for(i = 0; i < flavorsIn.length; i++){
    
  if(orderObj[flavorsIn[i]]){
    orderObj[flavorsIn[i]]++;
  }else{
    orderObj[flavorsIn[i]] = 1
  }
}


return orderObj

}

console.log(addToOrder(orderInput))