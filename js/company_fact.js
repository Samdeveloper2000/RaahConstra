// Fetching footer content from footer.html and injecting it into the page
fetch("company_fact.html")
  .then((response) => response.text()) // Converting response to text
  .then((data) => {
    // Injecting footer content into the footer-container div
    document.getElementById("company_fact-container").innerHTML = data;
  })
  .catch((error) => console.error("Error loading footer:", error)); // Error handling
