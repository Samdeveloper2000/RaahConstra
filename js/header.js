fetch("header.html")
  .then((response) => response.text()) // Converting response to text
  .then((data) => {
    // Injecting header content into the header-container div
    document.getElementById("header-container").innerHTML = data;

    // Debugging: Log current page URL
    console.log("Current Page URL:", window.location.pathname);

    let currentPage = window.location.pathname.split("/").pop(); // Extract file name (e.g. 'index.html', 'about.html')
    console.log("Current Page File:", currentPage);

    // Map the current page to its corresponding menu item and add the 'active' class
    let menuItems = {
      "index.html": "home", // home page id
      "about.html": "about", // about page id
      "faq.html": "faq", // faq page id
      "projects.html": "projects", // projects page id
      "contact.html": "contact", // contact page id
    };

    // Add active class to the current page's menu item
    if (menuItems[currentPage]) {
      let activeItem = document.getElementById(menuItems[currentPage]);
      if (activeItem) {
        activeItem.classList.add("active");
        console.log(`Active class added to: ${menuItems[currentPage]}`);
      }
    }
  })
  .catch((error) => console.error("Error loading header:", error)); // Error handling
