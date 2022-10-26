let dropdown = document.querySelector('#drop1');

dropdown.addEventListener('click',function(e){
    let label = this.querySelector('.label')
    if(e.path.includes(this.querySelector('.item_list'))){
        label.innerText = e.target.innerText
        let itemList = document.querySelector('.item_list')
        itemList.style.background = '#fff'
        let navBack = document.querySelector('#navback')
        navBack.style.height = '110px'
    }
    this.classList.toggle('active')
})