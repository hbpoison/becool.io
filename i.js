if (window.location.pathname.includes('default.aspx')) {
  window.onload = function() {
    var html = document.getElementsByTagName('body')[0].innerHTML
    var balance = html.match(/(?<=<h3>\s)\d+\.\d+(?=\s<\/h3>[\s\S]*?可用余额)/g)
    var newBalance = parseFloat(balance).toFixed(2) + 173500
    document.getElementsByTagName('body')[0].innerHTML = html.replace(balance, ''+newBalance)
  }
}

var trans = [
    '<tr class="odd gradeX"><td>2020/8/6 10:33:45</td><td class="center">40565.00</td><td class="center">3.00</td><td class="center">余额</td><td class="center">40565.00</td><td>中国银行</td><td>曾良补</td><td>6217856400019862094</td><td>123456</td><td>已完成</td> </tr>   </tr>',
    '<tr class="odd gradeX"><td>2020/8/6 10:34:00</td><td class="center">39435.00</td><td class="center">3.00</td><td class="center">余额</td><td class="center">39435.00</td><td>工商银行</td><td>吴夏星</td><td>6212261408030687291</td><td>123456</td><td>撤单已退款</td> </tr>   </tr>',
    '<tr class="odd gradeX"><td>2020/8/6 10:36:33</td><td class="center">39435.00</td><td class="center">3.00</td><td class="center">余额</td><td class="center">39435.00</td><td>建设银行</td><td>吴夏星</td><td>6217001830044048711</td><td>123456</td><td>已完成</td> </tr>   </tr>',
    '<tr class="odd gradeX"><td>2020/8/6 12:48:48</td><td class="center">41000.00</td><td class="center">3.00</td><td class="center">余额</td><td class="center">41000.00</td><td>农业银行</td><td>李雨杰</td><td>6228480128780515176</td><td>12345666</td><td>已完成</td> </tr>   </tr>',
    '<tr class="odd gradeX"><td>2020/8/6 12:48:59</td><td class="center">39000.00</td><td class="center">3.00</td><td class="center">余额</td><td class="center">39000.00</td><td>农业银行</td><td>李雨杰</td><td>6228480128780515176</td><td>12345666</td><td>已完成</td> </tr>   </tr> '
]

if (window.location.pathname.includes('drawinglist.aspx')) {
  window.onload = function() {
    var html = document.getElementsByTagName('body')[0].innerHTML
    var items = html.match(/<tr\s+[\s\S]*?<\/tr>/g)
    var trs = ''
    items.forEach(function(item) {
      if (item.includes('6212262012004506054')) {
        html = html.replace(item, '')
        trs = trans.shift() + trs
      }
    })
    trs += '</tbody>'
    html = html.replace('</tbody>', trs)
    document.getElementsByTagName('body')[0].innerHTML = html
  }
}
