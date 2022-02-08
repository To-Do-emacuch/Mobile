$(function(){
    $("#btnAddNote").on("click",()=>{alert("ciao")})
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    //css Addings
    //Element Height = Viewport height - element.offset.top - desired bottom margin
    console.log($(".myMainTableNoteWrapper").offset().top);
    console.log(vh)
    $(".myMainTableNoteWrapper").css("height",(vh -$(".myMainTableNoteWrapper").offset().top));
    document.getElementsByClassName("myMainTableNoteWrapper")[0].style.setProperty("margin-bottom", "0px", "important")
    document.getElementsByClassName("myMainTableNoteWrapper")[0].style.setProperty("margin-top", "2rem", "important")
})