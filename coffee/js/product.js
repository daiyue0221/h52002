var btns = document.querySelectorAll('.head_left')
var pic = document.querySelectorAll('')
for(var i = 0;i<btns.length;i++){
    btns[i].setAttribute('num',i)

    btns[i].onclick = function(){
        this.getAttribute('num')
    }
}