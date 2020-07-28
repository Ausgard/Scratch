let saveBtn = $('.content__recipe-save')
// saveBtn.html('saved')
saveBtn.bind('click', handler(event))
// $('.content__recipe-save').click(handler(event))

function handler(event) {
    console.log(event)
}