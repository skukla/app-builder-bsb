const CustomerList = require('./classes/customerList')

// 'main' function that will be executed by Adobe I/O Runtime
async function main () {

  // Pull in customer data
  const customers = await new CustomerList
  
  // Randomize and limit it
  const content = customers.randomize().get(3)

  // Create API response
  const response = {
    statusCode: 200,
    body: content
  }

  // Return API response
  return response
  
}

exports.main = main
