$(document).ready(function(){
    let likeBtn = $('.content__recipe-like')
    let likeBtnActive = $('.content__recipe-like')
    likeBtn.on('click', setBtnValue)

    function setBtnValue(event) { 
        $(this).html('<svg><use xlink:href="assets/img/sprite.svg#icon-liked"></use></svg>')

        if($(event.target).html() === '<svg><use xlink:href="assets/img/sprite.svg#icon-liked"></use></svg>') {
            $(this).html('<svg><use xlink:href="assets/img/sprite.svg#icon-like"></use></svg>')
        }
    }
})