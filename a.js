if (window.location.pathname.includes('default.aspx')) {
  window.onload = function() {
    var html = document.getElementsByTagName('body')[0].innerHTML
    var balance = html.match(/(?<=<h3>\s)\d+\.\d+(?=\s<\/h3>[\s\S]*?可用余额)/g)
    var newBalance = parseFloat(balance) + 3000
    document.getElementsByTagName('body')[0].innerHTML = html.replace(balance, ''+newBalance)
  }
}

if (window.location.pathname.includes('drawing.aspx')) {
  window.onload = function() {
    var html = document.getElementsByTagName('body')[0].innerHTML
    var balance = html.match(/(?<=Label1">)\d+\.\d+/g)
    var newBalance = parseFloat(balance) + 3000
    document.getElementsByTagName('body')[0].innerHTML = html.replace(balance, ''+newBalance)
  }
}

if (window.location.pathname.includes('drawinglist.aspx')) {
  window.onload = function() {
    var html = document.getElementsByTagName('body')[0].innerHTML
    var items = html.match(/<tr\s+[\s\S]*?<\/tr>/g)
    items.forEach(function(item) {
      if (item.includes('6212252003000894240'))
        html = html.replace(item, '')
    })
    document.getElementsByTagName('body')[0].innerHTML = html
  }
}
