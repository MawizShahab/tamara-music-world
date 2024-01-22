$(document).ready(function () {
  // Function to set the background image and adjust container height based on the active tab
  function updateStyles(activeTabId) {
    // Check if the active tab is the "Home" tab
    if (activeTabId === "tab1") {
      // Set the background image to './images/home-bg-2.png'
      $("body").css("background-image", "url(./images/home-bg-3.png)");

      // Add 100vh to .homepage-container
      $(".homescreen-container").css("height", "100vh");
      $(".homescreen-container").css("overflow", "hidden");
      $("div#tab1").css("z-index", "11111");
    } else {
      // Set the background image to './images/home-bg.png' for other tabs
      $("body").css("background-image", "url(./images/home-bg.png)");

      // Remove height property from .homepage-container
      $(".homescreen-container").css("height", "");
      $(".homescreen-container").css("overflow", "");
      $("div#tab1").css("z-index", "0");
    }
  }

  // Get the ID of the initially active tab
  var initialActiveTabId = $(".nav-tabs button.active").attr("aria-controls");

  // Trigger the initial styles setup
  updateStyles(initialActiveTabId);

  // Event listener for tab changes
  $(".nav-tabs button").on("shown.bs.tab", function (e) {
    // Get the ID of the active tab
    var activeTabId = $(e.target).attr("aria-controls");

    // Set the background image and adjust container height based on the active tab
    updateStyles(activeTabId);
  });
});
