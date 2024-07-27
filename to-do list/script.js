$(function(){

var $list, $newForm

$list = $('ul')
$newForm = $('#form')


$newForm.on('submit', function(e){
    e.preventDefault()
    var $text = $('input:text').val()
    $list.append('<li>' + $text + '</li>')
    $text = $('input:text').val('')
})

$list.on('dblclick', 'li', function(){
    var $li = $(this);
    $li.remove();
})

$list.on('click', 'li', function(){
    var $li = $(this);
    $li.css({
        textDecoration: 'line-through'
    });
})

$('.cl').on('click', function(){
    $list.remove()
})































































})