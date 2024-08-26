const now3 = Date.now()
while (Date.now() - now3 < 3000) {
  // block
}
let newDiv3 =  document.createElement('div')
newDiv3.textContent = '添加第三个div';

container.appendChild(newDiv3);