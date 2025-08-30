// Fetching footer content from footer.html and injecting it into the page
fetch("footer.html")
  .then((response) => response.text()) // Converting response to text
  .then((data) => {
    // Injecting footer content into the footer-container div
    document.getElementById("footer-container").innerHTML = data;
  })
  .catch((error) => console.error("Error loading footer:", error)); // Error handling
