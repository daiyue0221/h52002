var btns = document.querySelectorAll('.content .right a'),//获取点击的元素
    imgBigs = document.querySelectorAll('.content .left img'),//获取大图
    kth = document.querySelectorAll('.kth')//获取文本
for(var i = 0;i<btns.length;i++){
    btns[i].onclick = function(){//给a标签绑定事件，一共4个
        for(var j = 0;j<btns.length;j++){
            btns[j].previousElementSibling.classList.add('hidd')//点击后让所有图片隐藏，这个classlist.add还没学习，就是给这个元素的class名字添加一个，这里添加的hidd属性名，我的css里面hidd是隐藏效果

            btns[j].setAttribute('num',j)//这里用到的是给元素设置自定义属性，给每个按钮都加一个数字属性，方便我们晓得点击的是第几个按钮，切换第几张图片

            btns[j].children[0].classList.remove('bian')//因为我按钮上下两排的两个span，所以这里的作用也是在点击的时候先把样式恢复
            btns[j].children[1].classList.remove('bian')//这里用到的classlist.remove也没有学，就是给这个元素移除某个classname

            imgBigs[j].classList.add('ac')//这里也是先让所有的图片先隐藏

            kth[j].classList.add('ac')//这里也是让文字先隐藏


        }

        this.previousElementSibling.classList.remove('hidd')//让点击对应的小图显示

        this.children[0].classList.add('bian')//让点击对应的按钮变黑
        this.children[1].classList.add('bian')//让点击对应的按钮变黑

        imgBigs[parseInt(this.getAttribute("num"))].classList.remove('ac')//让点击的大图显示
        
        kth[parseInt(this.getAttribute("num"))].classList.remove('ac')//切换对应的文字
        
    }
}
