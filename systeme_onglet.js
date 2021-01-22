var afficherOnglet = function($a, duration){
    if(duration === undefined){
        duration = 500
    }
    var $li = $a.parent()
    if($li.hasClass('active')){
        return false
    }
    var $target = $($a.attr('href'))
    //console.log($target)
    $li.siblings('.active').removeClass('active')
    $li.addClass('active')
    $target.siblings(':visible').fadeOut(duration, function(){
        $target.fadeIn(duration)
    })
}

$('.tabs a').click(function(e){
    var $a = afficherOnglet($(this))
    console.log($a)
})

var hash = window.location.hash
if (hash !== ""){
    var $a = $('.tabs a[href="' + hash + '"]')
    //console.log($a.length)
    if ($a.length > 0)
    {
        afficherOnglet($a, 0)
    }
}


/******* Code en JavaScript PUR pour changer la couleur du text des liens href******
var links = document.querySelectorAll('.tabs a')
for(var i = 0; i < links.length; i++)
{
    var link = links[i]
    link.style.color = 'red'
}
*/

//**** Code JQUERY pour changer la couleur du texte en rouge */
//$('.tabs a').css('color', 'red')

//**** Code JQUERY pour changer le text du premier élément */
//console.log($('.tabs a:first').text('Test jQuery'))

/*On sélectionne le premier UL et on y ajoute un nouveau LI
var ul = $('ul:first')
var li = $('<li class="active"></li>')
var a = $('<a href="#">Salut!</a>')
li.append(a)
ul.append(li)*/

/*Pour greffer un évènement
$('.tabs a').on('click', function(e){
    console.log(this)
})*/

//REQUETE AJAX en JQUERY
var $ul = $('#users')
console.log($ul)
$.get('https://jsonplaceholder.typicode.com/users', {}, function(data, textStatus, jqXHR){
    data.forEach(function(user){
        var li = $('<li>')
        li.text(user.name)
        $ul.append(li)
    })
})