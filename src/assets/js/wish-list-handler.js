$(document).ready(function(){
    let likeBtn = $('.content__recipe-like')
    likeBtn.on('click', changeIcon)

    function changeIcon(event) { 
        if($(this).html() == '<svg><use xlink:href="assets/img/sprite.svg#icon-like"></use></svg>') {
            $(this).html('<svg><use xlink:href="assets/img/sprite.svg#icon-liked"></use></svg>')
        } else {
            $(this).html('<svg><use xlink:href="assets/img/sprite.svg#icon-like"></use></svg>')
        }
    }
})