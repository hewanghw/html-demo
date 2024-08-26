
var container = document.getElementById('container');
const now1 = Date.now()
while (Date.now() - now1 < 3000) {
  // block
}
let newDiv1 =  document.createElement('div')
newDiv1.textContent = '添加第一个div';

container.appendChild(newDiv1);
