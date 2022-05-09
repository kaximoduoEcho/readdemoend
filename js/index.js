//这里是轮播图JS，开始
// 获取左右按钮和图片列表
let oLeft = document.querySelector(".left");
let oRight = document.querySelector(".right");
let oImgList = document.querySelector(".img-list");
let cloneFirstImg = oImgList.firstElementChild.cloneNode();
oImgList.appendChild(cloneFirstImg);
//图片索引
let index = 0;
function handleRight() {
    index++;
    oImgList.style.left = index * -760 + "px";
    oImgList.style.transition = "0.5s ease";
    if (index == 5) {
        index = 0;
        setTimeout(() => {
            oImgList.style.left = 0;
            oImgList.style.transition = "none";
        }, 500);
    }
    setCircles();
}
oRight.addEventListener("click", handleRight)
oLeft.addEventListener("click", () => {
    index--;
    if (index == -1) {
        oImgList.style.transition = "none";
        oImgList.style.left = 5 * -760 + "px";
        index = 4;
        setTimeout(() => {
            oImgList.style.left = index * -760 + "px";
            oImgList.style.transition = "0.5s ease";
        }, 0);
    } else {
        oImgList.style.left = index * -760 + "px";
    }
    setCircles();
});
const circles = document.querySelectorAll(".circle");

//小圆点的高亮显示
function setCircles() {
    for (let i = 0; i < circles.length; i++) {
        if (i == index) {
            circles[i].classList.add("active");
        } else {
            circles[i].classList.remove("active");
        }
    }
}
// 小圆点点击切换图片 使用事件代理
const oCircle = document.querySelector(".circle-list");
oCircle.addEventListener("click", (e) => {
    if (e.target.nodeName.toLowerCase() == "li") {
        // 当前元素的data-n对应的值和index一一对应
        const n = Number(e.target.getAttribute("data-n"));
        index = n;
        oImgList.style.left = index * -760 + "px";
        setCircles();
    }
});
// 自动轮播
setInterval(handleRight, 2500);
//轮播图结束