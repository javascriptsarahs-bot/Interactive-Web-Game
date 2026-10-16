
document.getElementById("playButton").addEventListener("click", function () {

  // Step 1: Get user input
  let adjective = prompt("Enter an adjective:");

  // TODO 1: Ask the user for a noun
  let noun = "";

  // TODO 2: Ask the user for a place
  let place = "";

  // Step 2: Create the song
  let song = `Twinkle, twinkle, ${adjective} ${noun},
How I wonder what you are!

Like a diamond in the ${place}.

How I wonder what you are!`;

  // TODO 3: Complete the two missing lines
  // in the template literal above.

  // Step 3: Display the song

  // TODO 4: Use document.getElementById()
  // and textContent to display the song.

});
