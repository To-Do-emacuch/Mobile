
function setMyMainTableNoteWrapperHeight(vh) {
    //Element Height = Viewport height - element.offset.top - desired bottom margin
    $(".myMainTableNoteWrapper").css("height", (vh - $(".myMainTableNoteWrapper").offset().top));
    document.getElementsByClassName("myMainTableNoteWrapper")[0].style.setProperty("margin-bottom", "0px", "important")
    document.getElementsByClassName("myMainTableNoteWrapper")[0].style.setProperty("margin-top", "30px", "important")
}

function scrollingTable(static_myAccountNameFontSize,static_myAccountEmailFontSize) {
    const scroller = document.getElementsByClassName('myMainTableNoteWrapper')[0];
    let myAccountName = $(".myAccountName");
    let myAccountEmail = $(".myAccountEmail");
    let height = scroller.clientHeight;
    let scrollHeight = scroller.scrollHeight - height;
    let scrollTop = scroller.scrollTop;
    let percent = Math.floor(scrollTop / scrollHeight * 100);

    if (percent <= 20) {
        let accNameSize = static_myAccountNameFontSize - percent / 2
        myAccountName.css("font-size", (accNameSize + "px"));
        let accEmailSize = static_myAccountEmailFontSize - percent / 2
        myAccountEmail.css("font-size", (accEmailSize + "px"));
    }
    else {
        let accNameSize = static_myAccountNameFontSize - 20 / 2
        myAccountName.css("font-size", (accNameSize + "px"));
        let accEmailSize = static_myAccountEmailFontSize - 20 / 2
        myAccountEmail.css("font-size", (accEmailSize + "px"));
    }
}