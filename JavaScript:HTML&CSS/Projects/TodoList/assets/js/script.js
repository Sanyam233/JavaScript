/*as we need the listener on future tasks that are not added yet to. 'ul' 'click' 'li' 
specifies that add the listener to all the lis that are inside the ul*/
$('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');
});

// same as above 
$('ul').on('click', 'span', function(event) {
    $(this).parent().fadeOut(600, function() {
        $(this).remove();
    });
    event.stopPropagation();

})

$("#taskInput").on('keypress', function(event) {

    if (event.which == 13) {
        var inputVal = $("#taskInput").val();
        $("#taskInput").val('');
        $('ul').append(`<li><span class = 'fa fa-trash'></span> ${inputVal}</li>`);
    }
});

console.log($("#toggle"));
$("#toggle").click(function() {
    console.log("ssa");
    $("#taskInput").fadeToggle();

});