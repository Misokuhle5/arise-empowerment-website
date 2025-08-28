// Function to include HTML content
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through all elements */
  z = document.getElementsByTagName('*');
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with the attribute "include-html" */
    file = elmnt.getAttribute('include-html');
    if (file) {
      /* Make an HTTP request to fetch the file */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = 'Page not found.';
          }
          /* Remove the attribute after including HTML */
          elmnt.removeAttribute('include-html');
          includeHTML(); /* Call the function again to include any nested includes */
        }
      };
      xhttp.open('GET', file, true);
      xhttp.send();
      /* Exit the function */
      return;
    }
  }
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', function () {
  includeHTML();
});
