// 按需加载图片
var allImgs = document.querySelectorAll('img');
imgOffsetTop = [];
for (var i = 0; i < allImgs.length; i++) {
    imgOffsetTop[i] = allImgs[i].getBoundingClientRect().top;
}
// 加载首屏图片
for (var i = 0; i < allImgs.length; i++) {
    // 设置 20 缓冲
    if (imgOffsetTop[i] < window.innerHeight + document.documentElement.scrollTop + 20) {
        allImgs[i].src = allImgs[i].getAttribute('data-src');
    }
}
// 滚动出现搜索框和侧边导航 滚动至特定区域侧边导航高亮
var toTopBtn = document.querySelector('.totop');
var sections = document.querySelectorAll('.js-showimgs');
var offset_y = []
var searchBox = document.querySelector('.nav-bar');
var navBox = document.querySelector('.aside-nav');
var navItems = navBox.querySelectorAll('.nav-item');
//存储各区块的offsetTop值
for (var i = 0; i < sections.length; i++) {
    offset_y[i] = sections[i].offsetTop;
}
offset_y[8] = document.body.offsetHeight;
document.onscroll = function () {
    if (document.documentElement.scrollTop > 780) {
        searchBox.style.top = 0;
    } else {
        searchBox.style.top = '-50px';
    }

    if (document.documentElement.scrollTop > 700) {
        navBox.style.width = '36px';
        navBox.style.height = '370px';
    } else {
        navBox.style.width = 0;
        navBox.style.height = 0;
    }

    for (var i = 0; i < navItems.length; i++) {
        if (document.documentElement.scrollTop > offset_y[i] - 50 && document.documentElement.scrollTop < offset_y[i + 1] - 50) {
            navItems[i].classList.add('item-bg-' + (i + 1));
        } else {
            navItems[i].classList.remove('item-bg-' + (i + 1));
        }
    }

    // 按需加载图片
    for (var i = 0; i < allImgs.length; i++) {
        // 设置 20 缓冲
        if (imgOffsetTop[i] < window.innerHeight + document.documentElement.scrollTop + 20 && allImgs[i].src === location.origin + location.pathname) {
            allImgs[i].src = allImgs[i].getAttribute('data-src');
        }
    }
}
// 页面内跳转
for (let i = 0; i < navItems.length; i++) {
    navItems[i].onclick = function () {
        document.documentElement.scrollTo(0, offset_y[i] - 40);
    }
}
toTopBtn.onclick = function () {
    document.documentElement.scrollTo(0, 0);
}
//done

// 输入任意文本搜索框 placehd 消失回不来
var placehd = document.querySelector('.placehd');
function Keydown() {
    placehd.style.display = 'none';
}

var placehd_2 = document.querySelector('.nav-placehd');
function Keydown2() {
    placehd_2.style.display = 'none';
}
//7.15 轮播图
var imgs = document.querySelectorAll('.banner a img');
var container = document.querySelector('#show-con');
var num = 1;
function sileShow2() {
    setInterval(function () {
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.opacity = '0';
            container.classList.remove('bg' + (i + 1));
            btns[i].style.backgroundColor = '#000';
            btns[i].style.opacity = '.3';
        }
        imgs[num].style.opacity = '1';
        container.classList.add('bg' + (num + 1));
        btns[num].style.backgroundColor = '#fff';
        btns[num].style.opacity = '1';
        if (num == imgs.length - 1) {
            num = 0;
        } else {
            num++;
        }
    }, 4000);
}

sileShow2();
//done

//7.15 点击切换banner图v1.0
var btns = document.querySelectorAll('.roll-bar li');
for (let i = 0; i < btns.length; i++) {
    btns[i].onmouseover = function () {
        num = i;
        for (var j = 0; j < btns.length; j++) {
            btns[j].style.backgroundColor = '#000';
            btns[j].style.opacity = '.3';
            imgs[j].style.opacity = '0';
            container.classList.remove('bg' + (j + 1));
        }
        this.style.backgroundColor = '#fff';
        this.style.opacity = '1';
        imgs[i].style.opacity = '1';
        container.classList.add('bg' + (i + 1));
    }
}
//done

//7.15 选项卡
var tabs = document.querySelectorAll('.tabs li');
var items = document.querySelectorAll('.grid-con a');
var index = 1;
for (let i = 0; i < tabs.length; i++) {
    tabs[i].onmouseover = function () {
        index = i;
        for (var j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('selected');
            items[j].style.display = 'none';
        }
        this.classList.add('selected');
        items[i].style.display = 'block';
    }
}

//每3s切换选项卡
setInterval(function () {
    // console.log(index);
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('selected');
        items[i].style.display = 'none';
    }
    tabs[index].classList.add('selected');
    items[index].style.display = 'block';
    if (index == tabs.length - 1) {
        index = 0;
    } else {
        index++;
    }
}, 3000);
        //done