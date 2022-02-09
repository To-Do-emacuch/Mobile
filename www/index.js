$(function () {
    $("#btnAddNote").on("click", () => { alert("ciao") })
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    //css Addings
    //Element Height = Viewport height - element.offset.top - desired bottom margin
    console.log($(".myMainTableNoteWrapper").offset().top);
    console.log(vh)
    $(".myMainTableNoteWrapper").css("height", (vh - $(".myMainTableNoteWrapper").offset().top));
    document.getElementsByClassName("myMainTableNoteWrapper")[0].style.setProperty("margin-bottom", "0px", "important")
    document.getElementsByClassName("myMainTableNoteWrapper")[0].style.setProperty("margin-top", "30px", "important")

    //Reduce Text height on scroll
    const scroller = document.getElementsByClassName('myMainTableNoteWrapper')[0];
    scroller.addEventListener("scroll", scrolling);
    let myAccountName = $(".myAccountName");
    let myAccountEmail = $(".myAccountEmail");
    const static_myAccountNameFontSize = myAccountName.css("font-size").substring(0, myAccountName.css("font-size").length - 2);
    const static_myAccountEmailFontSize = myAccountEmail.css("font-size").substring(0, myAccountEmail.css("font-size").length - 2);
    function scrolling() {

        let height = scroller.clientHeight;
        let scrollHeight = scroller.scrollHeight - height;
        let scrollTop = scroller.scrollTop;
        let percent = Math.floor(scrollTop / scrollHeight * 100);
        console.log('Percent : ' + percent + '%' + static_myAccountEmailFontSize + " - " + static_myAccountNameFontSize);



        if (percent <= 20) {
            let accNameSize = static_myAccountNameFontSize - percent/2
            myAccountName.css("font-size", (accNameSize + "px"));
            let accEmailSize = static_myAccountEmailFontSize - percent/2
            myAccountEmail.css("font-size", (accEmailSize + "px"));
        }
        else{
            let accNameSize = static_myAccountNameFontSize - 20/2
            myAccountName.css("font-size", (accNameSize + "px"));
            let accEmailSize = static_myAccountEmailFontSize - 20/2
            myAccountEmail.css("font-size", (accEmailSize + "px"));
        }
    }
})