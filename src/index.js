```javascript
// Import required modules
const dotenv = require('dotenv');
const api = require('./api');
const utils = require('./utils');

// Load environment variables from .env file
dotenv.config();

// Check if OPENAI_API_KEY is set
if (!process.env.OPENAI_API_KEY) {
  console.error('Missing OPENAI_API_KEY in .env file');
  process.exit(1);
}

// Main function
async function main() {
  try {
    // Use the API key to do something with the OpenAI API
    const result = await api.doSomethingWithOpenAI(process.env.OPENAI_API_KEY);
    
    // Use some utility function
    utils.doSomething(result);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Run the main function
main();
```
