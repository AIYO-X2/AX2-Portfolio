window.onload = function() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-+=_{}[]\/?";
    const numStrings = 10;
    const stringLength = 10;
    
    function generateRandomStrings() {
      // Create an empty array to store the random strings
      const randomStrings = [];
    
      // Generate the random strings
      for (let i = 0; i < numStrings; i++) {
        let randomString = "";
        for (let j = 0; j < stringLength; j++) {
          randomString += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        randomStrings.push(randomString);
      }
    
      // Store the generated random strings in local storage
      localStorage.setItem("randomStrings", JSON.stringify(randomStrings));
    }
    
    function displayRandomStrings() {
      // Get the stored random strings from local storage
      const storedRandomStrings = JSON.parse(localStorage.getItem("randomStrings"));
    
      // If the stored random strings are not available, generate new random strings
      if (!storedRandomStrings) {
        generateRandomStrings();
        storedRandomStrings = JSON.parse(localStorage.getItem("randomStrings"));
      }
    
      // Update the HTML div with the stored or generated random strings
      const div = document.getElementById("random-strings");
      div.innerHTML = "";
      for (const string of storedRandomStrings) {
        div.innerHTML += `<p>${string}</p>`;
      }
    }
    
    // Display the random strings initially
    displayRandomStrings();
    
    // Set an interval to generate new random strings every 24 hours (in milliseconds) based on PST time
    const currentTime = new Date();
    const pstTimeZoneOffset = -8; // PST is 8 hours behind UTC
    const pstTime = new Date(currentTime.getTime() + pstTimeZoneOffset * 60 * 60 * 1000);
    const pstMidnight = new Date(pstTime.getFullYear(), pstTime.getMonth(), pstTime.getDate(), 0, 0, 0, 0);
    const timeUntilPstMidnight = pstMidnight.getTime() - pstTime.getTime();
    setInterval(generateRandomStrings, 24 * 60 * 60 * 1000, timeUntilPstMidnight);
    
}