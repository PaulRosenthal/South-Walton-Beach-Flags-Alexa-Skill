var axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');


// Define an async function that takes a URL as an argument and returns a promise
async function getFlagDescription(url) {
  // Use axios to send a GET request to the URL
  return axios.get(url)
    .then(function(response) {
      // Get the data from the response
      var data = response.data;
      const dom = new JSDOM(response.data);
      try {
        const flagStatusText = dom.window.document.querySelector('.flag-status').textContent;
        // Check if the element exists
        if (flagStatusText) {
          // Extract the color or colors from the flag status text
          const colors = flagStatusText.match(/(green|yellow|red|double red|purple)/gi);
          // Join the colors into a single string separated by the word "and"
          const colorsString = colors.join(", ").replace(/, ([^,]*)$/, ' and $1');
          // Add text to the beginning of the string that prefaces the status
          const finalString = "The beach safety flags in Walton County are " + colorsString + ".";
          // Return the color or colors as a string
          return finalString;
        } else {
          // Throw an error
          throw new Error("No flag description found in the flag status text that was retrieved.");
        }
      } catch {
        // Throw an error
        throw new Error("The script couldn't retrieve the flag status text.");
      }
    })
    // Define a callback function that runs when the request is rejected
    .catch(function(error) {
      // Throw an error
      throw error;
    });
}

// Define an async function that calls getFlagDescription and prints the result
async function main() {
  // Call getFlagDescription with the URL and await for the promise to resolve
  var url = "https://www.swfd.org/";
  var result = await getFlagDescription(url);
  // Print the result
  console.log(result);

  fs.writeFile(__dirname + '/../current-flag-status.txt', result, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('The output has been saved to the file.');
    }
  });
}

// Call main
main();
