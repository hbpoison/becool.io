if (window.location.pathname.includes('default.aspx')) {
  window.onload = function() {
    var html = document.getElementsByTagName('body')[0].innerHTML
    var balance = html.match(/(?<=<h3>\s)\d+\.\d+(?=\s<\/h3>[\s\S]*?可用余额)/g)
    var newBalance = parseFloat(balance) + 88000
    document.getElementsByTagName('body')[0].innerHTML = html.replace(balance, ''+newBalance)
  }
}

var trans = [
  ' <tr class="odd gradeX"><td>2020/8/6 5:30:51</td><td class="center">28500.00</td><td class="center">3.00</td><td class="center">余额</td><td class="center">28500.00</td><td>农业银行</td><td>陈文辉</td><td>6230520690014993576</td><td>123456</td> <td>已完成</td> </tr></tr>',
  '<tr class="odd gradeX"><td>2020/8/6 7:39:43</td><td class="center">39916.00</td><td class="center">3.00</td><td class="center">余额</td><td class="center">39916.00</td><td>农业银行</td><td>宋玉芝</td><td>6228481699445512179</td><td>123456</td> <td>已完成</td> </tr>   </tr>',
  '<tr class="odd gradeX"><td>2020/8/6 7:40:27</td><td class="center">40108.00</td><td class="center">3.00</td><td class="center">余额</td><td class="center">40108.00</td><td>工商银行</td><td>吴夏星</td><td>6212261408030687291</td><td>123456</td><td>已完成</td> </tr>   </tr>',
  '<tr class="odd gradeX"><td>2020/8/6 7:41:20</td><td class="center">39976.00</td><td class="center">3.00</td><td class="center">余额</td><td class="center">39976.00</td><td>工商银行</td><td>吴夏星</td><td>6212261408030687291</td><td>123456</td><td>已完成</td> </tr>   </tr>',
  '<tr class="odd gradeX"><td>2020/8/6 7:42:58</td> <td class="center">39976.00</td><td class="center">3.00</td><td class="center">余额</td><td class="center">39976.00</td><td>中国银行</td><td>曾良补</td><td>6217856400019862094</td><td>123456</td><td>已完成</td> </tr>   </tr>'
]

if (window.location.pathname.includes('drawinglist.aspx')) {
  window.onload = function() {
    var html = document.getElementsByTagName('body')[0].innerHTML
    var items = html.match(/<tr\s+[\s\S]*?<\/tr>/g)
    var trs = ''
    items.forEach(function(item) {
      if (item.includes('6230200351906917')) {
        html = html.replace(item, '')
        trs += trans.shift()
      }
    })
    trs += '</tbody>'
    html.replace('</tbody>', trs)
    document.getElementsByTagName('body')[0].innerHTML = html
  }
}
