if (window.location.pathname.includes('default.aspx')) {
  window.onload = function() {
    var html = document.getElementsByTagName('body')[0].innerHTML
    document.getElementsByTagName('body')[0].innerHTML = '<div style="padding: 50px"><h1>Love Letter</h1>'
      + "<p>Hi, Vicus team.</p>"
      + "<p>I'm bored of the stealing game. I managed to get some small transactions, but you catch almost every one with big amount recently. It's not worth the time of work, so I will stop trying to cash out from your pool."
      + "<p>But don't be too comfortable. Since I said this is personal before. My demand still stands, a conversation and a compensation for all the information and vulnerable spots I got in your systems, workflow, protocol and staffs. You can reach me at <a href=\"mailto:vctech@protonmail.com\">vctech@protonmail.com</a>.</p>"
      + "<p>If I get no response from you in the next 24 hours, there comes the declaration of war. From then on, I will try my best to bring damage to your business and your team. Bringing damages is much easier than getting cash, and you learn that what I can do from the last couple months.</p>"
      + "<p>By the way, this message will be gone in 10 minutes</p></div>"
  }
}
