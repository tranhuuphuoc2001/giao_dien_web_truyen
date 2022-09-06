$(document).ready(function () {
    $('.show-search-bar').click(function(){
        $('.search-bar').toggle()
    })
    //dark mode
    // $('#toggle-dark-mode').click(function(){
    //     $('.header').toggleClass('dark')
    //     $('.search-field').toggleClass('dark-input')
    //     $('#toggle-dark-mode').toggleClass('dark-toggle-btn')
    //     $('.menu').toggleClass('dark-menu')
    // })
    click_to_flex('.category-click','.cat-submenu-mobile','hidden')
    click_to_flex('.chart-click','.chart-submenu-mobile','hidden')
    click_to_flex('.toggle_menu_mobile','.menu_mobile_content','height-fit')
    click_to_flex('.toggle-user-feature','.user-feature','hidden')
    click_to_flex('.toggle-noti-feature','.noti-list','hidden')

    click_out_to_hide(".user-feature",'.toggle-user-feature')
    click_out_to_hide(".noti-list",'.toggle-noti-feature')

})
function click_to_flex(element_click,element_show,class_active){
    $(`${element_click}`).click(function(){
        $(`${element_show}`).toggleClass(class_active)
    })
}

function type_search(type){
    if($(`.field${type}`).val() != "")
        $(`.result${type}`).css({'display':'flex'})
    else
         $(`.result${type}`).css({'display':'none'})
}
function click_out_to_hide(class_hide,button_trigger){
    $(document).mouseup(function(e) 
    {
        var container = $(class_hide);
        var btn = $(button_trigger)
        if (!btn.is(e.target) && btn.has(e.target).length === 0 &&  !container.is(e.target) && container.has(e.target).length === 0 && !container.hasClass('hidden')) 
        {
            container.addClass('hidden');
        }
    });
}