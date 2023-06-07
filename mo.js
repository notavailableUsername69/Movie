// Add event listeners to all the "Watch Trailer" buttons
var buttons = document.getElementsByClassName("btn");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        // Replace the button text with "Loading..."
        this.innerText = "Loading...";

        // Simulate an API call to fetch the trailer
        setTimeout(() => {
            this.innerText = "Watch Trailer";
        }, 2000); // Replace with actual API call or video embedding logic
    });
}