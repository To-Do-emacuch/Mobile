$(function () {
    //CSS
    setMyMainTableNoteWrapperHeight(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0));
    //Reduce Text height on scroll
    document.getElementsByClassName('myMainTableNoteWrapper')[0].addEventListener("scroll", () => {
        scrollingTable(
            $(".myAccountName").css("font-size").substring(0, $(".myAccountName").css("font-size").length - 2),
            $(".myAccountEmail").css("font-size").substring(0, $(".myAccountEmail").css("font-size").length - 2)
        );
    });
    //CSS
})