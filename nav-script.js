var arr = document.querySelectorAll('nav.navbar li')

for(var i=0; i<arr.length; i++){
  arr[i].addEventListener('mouseenter',function () {
    this.style.backgroundColor = '#ff8100'
  })
  arr[i].addEventListener('mouseleave',function () {
    if(!window.location.href.includes(this.innerText.split(' ')[0].toLowerCase())){
      this.style.backgroundColor = 'transparent'
    }
  })
}