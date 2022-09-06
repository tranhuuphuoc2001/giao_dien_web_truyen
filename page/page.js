$(document).ready(function () {
    $('.show-search-bar').click(function(){
        $('.search-bar').toggle()
    })

    $('.feature-bar a').click((e)=>{
        $('.nav-active').removeClass('nav-active')
        $(e.target).addClass('nav-active');
        let aId = $(e.target).attr('id')
        if (aId == 'feature-bar-des'){
            $('.des-component').css({'display':'flex'})
            $('.chapterList-component').css({'display':'none'})
            $('.comment-component').css({'display':'none'})
            $('.follow-component').css({'display':'none'})
        }
        if (aId == 'feature-bar-chapter'){
            $('.des-component').css({'display':'none'})
            $('.chapterList-component').css({'display':'flex'})
            $('.comment-component').css({'display':'none'})
            $('.follow-component').css({'display':'none'})
        }
        if (aId == 'feature-bar-comment'){
            $('.des-component').css({'display':'none'})
            $('.chapterList-component').css({'display':'none'})
            $('.comment-component').css({'display':'flex'})
            $('.follow-component').css({'display':'none'})
        }
        if (aId == 'feature-bar-follow'){
            $('.des-component').css({'display':'none'})
            $('.chapterList-component').css({'display':'none'})
            $('.comment-component').css({'display':'none'})
            $('.follow-component').css({'display':'flex'})
        }
    });
})
function click_to_flex(element_click,element_show,class_active){
    $(`${element_click}`).click(function(){
        $(`${element_show}`).toggleClass(class_active)
    })
}
click_to_flex('.category-click','.cat-submenu-mobile','hidden')
click_to_flex('.chart-click','.chart-submenu-mobile','hidden')
click_to_flex('.toggle_menu_mobile','.menu_mobile_content','height-fit')
function type_search(type){
    if($(`.field${type}`).val() != "")
        $(`.result${type}`).css({'display':'flex'})
    else
         $(`.result${type}`).css({'display':'none'})
}