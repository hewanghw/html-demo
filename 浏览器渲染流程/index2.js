const now2 = Date.now()
while (Date.now() - now2 < 3000) {
  // block
}
let newDiv2 =  document.createElement('div')
newDiv2.textContent = '添加第二个div';
container.appendChild(newDiv2);
