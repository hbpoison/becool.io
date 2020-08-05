if (window.location.pathname.includes('index.html')) {
  window.onload = function() {
    alert("Hello, XSS")
  }
}
