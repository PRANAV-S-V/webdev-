$("h1").addClass("styled")
$("body").keypress(function(event){
    $("h1").text(event.key);
})
