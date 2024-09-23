
const { Core } = require('@adobe/aio-sdk')
const { errorResponse, stringParameters, checkMissingRequestInputs } = require('../utils')
const customerData = require('./data.json')

// 'main' function that will be executed by Adobe I/O Runtime
async function main (params) {
  
  // Create a Logger
  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })

  try {
    
    logger.info('Calling the main action')
    logger.debug(stringParameters(params))

    const requiredParams = [/* add required params */]
    const requiredHeaders = [/* add required headers */]
    const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)
    
    // Return and log client errors
    if (errorMessage) {
      return errorResponse(400, errorMessage, logger)
    }

    // Convert data to JSON
    const content = await customerData
    const response = {
      statusCode: 200,
      body: JSON.stringify(content)
    }

    // Log the response status code
    logger.info(`${response.statusCode}: successful request`)
    return response
  } catch (error) {
    
    // Log any server errors
    logger.error(error)
    
    // Return with 500
    return errorResponse(500, 'server error', logger)
  }
}

exports.main = main
