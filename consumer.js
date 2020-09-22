//글자에 색 넣기
var cateItem=document.querySelector(".categoryUl");
var loginSignup=document.querySelector(".login-signup");
var currentItem;
function mouseHandler(e){
    if(currentItem){
        currentItem.classList.remove('item-active');
    }
    e.target.classList.add('item-active');
    currentItem=e.target;
}

loginSignup.addEventListener('mouseover', mouseHandler);

cateItem.addEventListener('mouseover', mouseHandler);
//slide
var slideList=document.querySelector('.slide_list');
var slideContents=document.querySelectorAll('.slide_content');
var slideBtnNext=document.querySelector('.slide_btn_next');
var slideBtnPrev=document.querySelector('.slide_btn_prev');
var pagination=document.querySelector('.slide_pagination');
var slideLen=slideContents.length; //slide Contents 노드 갯수
var slideWidth=700;
var slideSpeed=300;
var curIndex=0; //현재 슬라이드 인덱스

var firstChild=slideList.firstElementChild;
var lastChild=slideList.lastElementChild;
var clonedFirst=firstChild.cloneNode(true); //첫화면 복사
var clonedLast=lastChild.cloneNode(true); //마지막화면 복사

slideList.style.width = slideWidth*(slideLen+2)+"px";
slideList.appendChild(clonedFirst); //마지막에 붙임
slideList.insertBefore(clonedLast, slideList.firstElementChild); //첫번째에 붙임

slideList.style.transform="translate3d(-"+(slideWidth * (curIndex+1))+"px, 0px, 0px)";
var curSlide=slideContents[curIndex];

slideBtnNext.addEventListener('click', function(){
    if(curIndex <= slideLen-1){ 
        slideList.style.transition=slideSpeed+"ms";
        slideList.style.transform="translate3d(-"+(slideWidth * (curIndex+2))+"px, 0px, 0px)"; //translate : 이 위치로 이동
    }
    if(curIndex===slideLen-1){
        setTimeout(function(){
            slideList.style.transition="0ms";
            slideList.style.transform="translate3d(-"+slideWidth+"px, 0px, 0px)";
        }, slideSpeed);
        curIndex=-1;
    }
    curSlide=slideContents[++curIndex];
});


slideBtnPrev.addEventListener('click', function(){
    if(curIndex>=0){
        slideList.style.transition=slideSpeed+"ms";
        slideList.style.transform="translate3d(-"+(slideWidth*curIndex)+"px, 0px, 0px)";
    }
    if(curIndex===0){
        setTimeout(function(){
            slideList.style.transition="0ms";
            slideList.style.transform="translate3d(-"+slideWidth * slideLen+"px, 0px, 0px)";
        }, slideSpeed);
        curIndex=slideLen;
    }
    curSlide=slideContents[--curIndex];
});