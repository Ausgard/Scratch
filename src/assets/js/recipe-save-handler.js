$(document).ready(function(){
    let saveBtn = $('.content__recipe-save')
    saveBtn.on('click', setBtnValue)

    function setBtnValue(event) {
        $(this).html('Saved')
        $(this).css('justify-content', 'center')
        $(this).css('background-color', '#30BE76')
        $(this).css('color', '#ffffff')
        if($(event.target).html() === 'Saved') {
            $(this).html('<svg><use xlink:href="assets/img/sprite.svg#icon-recipe-save"></use></svg><span>Save</span>')
            $(this).css('justify-content', 'space-between')
            $(this).css('background-color', '#ffffff')
            $(this).css('color', '#30BE76')
        }
    }
})