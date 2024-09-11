var database = firebase.database();
let count = 0;

// Read initial count from Firebase
database.ref('count').once('value').then(function(snapshot) {
    count = snapshot.val() || 0; // If no value, start at 0
    document.getElementById("counter").textContent = count;

   // Increase red intensity
   redValue = Math.max(0, redValue - 0.5); // Red decreases by 10 with each click
   document.body.style.backgroundColor = `rgb(255, ${redValue}, ${redValue})`; // More red with each click
});

document.getElementById("clickButton").addEventListener("click", function() {
    count++;
    document.getElementById("counter").textContent = count;

    // Update the count in Firebase
    database.ref('count').set(count);

    // Update background color
    let redValue = Math.min(255, count * 10);
    let greenBlueValue = Math.max(0, 255 - count * 10);
    document.body.style.backgroundColor = `rgb(${redValue}, ${greenBlueValue}, ${greenBlueValue})`;
});
