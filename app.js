const initMegaMenu = (function(){
    // nav.noor-nav_menu  .noor-sub_menu li 


let magaMenue = document.querySelectorAll("nav.noor-nav_menu  .noor-sub_menu .noor-sub_menu   ");
// let magaMenues = document.querySelectorAll("nav.noor-nav_menu  .noor-sub_menu .noor-sub_menu   ");

magaMenue.forEach(function(item){
    // console.log(item)
    let ht = item.getBoundingClientRect();
    // console.log(item.offsetHeight)offsetTop
    let pTop = item.parentElement.getBoundingClientRect();
    // console.log(pTop.top);element.offsetTop + element.offsetHeight
    // console.log(item.parentElement.offsetTop);
    let parentLiTop = item.parentElement.offsetTop;
    let parentLiTopHalf = parseFloat(parentLiTop) / 2;
    let parentLiHeight = item.parentElement.offsetHeight;
    let parentLiHeightHalf = parentLiHeight / 2;
    let parentUlHeight = item.parentElement.parentElement.offsetHeight;
    let parentUlHeightHalf = parseFloat(parentUlHeight) / 2;
    let currentItemUlHeight = item.offsetHeight;
    let currentItemUlHeightHalf = currentItemUlHeight / 2;
    // console.log(item.parentElement.offsetHeight);
    // console.log(item.parentElement.parentElement.offsetHeight);
    console.log(`
     parentLiTop : ${parentLiTop} |
     parentLiTopHalf : ${parentLiTopHalf} |
     parentLiHeight : ${parentLiHeight} |
     parentLiHeightHalf : ${parentLiHeightHalf} |
     parentUlHeight : ${parentUlHeight} |
     currentItemUlHeight : ${currentItemUlHeight} |
     currentItemUlHeightHalf : ${currentItemUlHeightHalf} 
     
     `);

    //  item.style.marginTop =   - (parentLiHeightHalf + parentLiTopHalf ) + 'px';


    if( parseFloat(parentLiTop) <= parseFloat(parentUlHeightHalf) ){

        if(parseInt(currentItemUlHeightHalf) <= parseInt(parseFloat(parentLiTop))  ){
            console.log('ok')
            item.style.marginTop = -(parseFloat(currentItemUlHeightHalf) -parseFloat(parentLiHeightHalf))+'px';
        }else{     
            item.style.marginTop =   - parseFloat(parentLiTop) +'px';
        }
        
    }else if(parseFloat(parentLiTop) > parseFloat(parentUlHeightHalf)){
    //    console.log((parseFloat(parentUlHeight) - parseFloat(parentLiTop)))
    //     item.style.marginTop =    - (parseFloat(parentUlHeight) - parseFloat(parentLiTop)) +'px';

        if(parseInt(currentItemUlHeightHalf) <= parseInt(parseFloat(parentLiTop))  ){
            console.log('ok')
            item.style.marginTop = -(parseFloat(currentItemUlHeightHalf) -parseFloat(parentLiHeightHalf))+'px';
        }else{     
            item.style.marginTop =   - parseFloat(parentLiTop) +'px';
        }
    }
    


    // if(parseInt(currentItemUlHeightHalf) <= parseInt(parentLiTop)  ){
    //     console.log('ok')
    //     item.style.marginTop = -(parseFloat(currentItemUlHeightHalf) -parseFloat(parentLiHeightHalf))+'px';

    // }else if(currentItemUlHeightHalf <= parentLiTop  ){
    //     // console.log('!ok')
       
    //  // item.style.marginTop =   - parentLiTop +'px';
    //     // if(parentLiTop > currentItemUlHeight){
    //     //     console.log('ok')
    //     //     item.style.marginTop =   - 100 + '%';
    //     // }else{
    //     //     item.style.marginTop =   - parentLiTop +'px';
    //     // }

    // }
 
})
})([])


document.addEventListener("DOMContentLoaded", initMegaMenu);