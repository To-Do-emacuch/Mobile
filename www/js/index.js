$(function () {
    //CSS
    let static_myAccountNameFontSize = $(".myAccountName").css("font-size").substring(0, $(".myAccountName").css("font-size").length - 2)
    let static_myAccountEmailFontSize = $(".myAccountEmail").css("font-size").substring(0, $(".myAccountEmail").css("font-size").length - 2)
    setMyMainTableNoteWrapperHeight(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0));
    //Reduce Text height on scroll
    document.getElementsByClassName('myMainTableNoteWrapper')[0].addEventListener("scroll", () => {
        scrollingTable(
            static_myAccountNameFontSize,
            static_myAccountEmailFontSize
        );
    });
    //CSS
    $("#TableWrapper").on("swipe", function () {
        alert("ye")
    })
    const tableWrapper = document.getElementById("TableWrapper");

    let lastSwiperPositionX = 0;
    tableWrapper.addEventListener('touchstart', e => {
        lastSwiperPositionX = e.changedTouches[0].screenX
    })
    tableWrapper.addEventListener('touchend', e => {
        lastSwiperPositionX = 0;
        let target = e.target;
        console.log(target.tagName)
        if (target.tagName.toUpperCase() != "DIV" || target.tagName.toUpperCase() != "TD" || target.tagName.toUpperCase() != "H1") {
            var touch = e.touches[0] || e.changedTouches[0];
            x = touch.pageX;
            y = touch.pageY;
            let rowEnd;
            if (target.tagName.toUpperCase() == "H1")
                rowEnd = $(target).parents().eq(0)
            else if ($(target).parents().eq(0).hasClass("myMainTableApparentRow"))
                rowEnd = $(target)
            else
                rowEnd = $(target).children("div").eq(0)

                console.log((parseInt(baseLeft)+"px"))
            rowEnd.css("left", (parseInt(baseLeft)+"px"))
        }
        else
            console.log("Not Identified Target");
    })
    let first = true;
    let baseLeft;
    for (let row of $(".myMainTableNoteWrapper").children("div")) {
        let apparentRow = $(row).children("div")
        let offsetDiv = row.getBoundingClientRect();
        if (first) {
            first = false;
            baseTop = $(row).css("height")
        }
        $(row).css({
            "width": $(row).css("width"),
            "height": $(row).css("height")
        })
        apparentRow.css({
            "position": "absolute",
            "top": (offsetDiv.top - baseTop),
            "left": offsetDiv.left,
            "width": $(row).css("width"),
            "height": $(row).css("height")
        })
        baseLeft = $(apparentRow).css("left").slice(0, apparentRow.css("left").length - 2);
    }
    tableWrapper.addEventListener("touchmove", e => {
        let target = e.target;
        if (target.tagName.toUpperCase() != "DIV" || target.tagName.toUpperCase() != "TD" || target.tagName.toUpperCase() != "H1") {
            var touch = e.touches[0] || e.changedTouches[0];
            x = touch.pageX;
            y = touch.pageY;
            let row;
            if (target.tagName.toUpperCase() == "h1")
                row = $(target)
            else if ($(target).parents().eq(0).hasClass("myMainTableApparentRow"))
                row = $(target).parents().eq(0)
            else
                row = $(target)
            console.log(row)
            if (lastSwiperPositionX < x) {
                //right
                let leftX = row.css("left").slice(0, row.css("left").length - 2);
                row.css("left", parseFloat(leftX) + (x - lastSwiperPositionX))
                leftX = row.css("left").slice(0, row.css("left").length - 2);
                let widthDiv = row.children("h1").css("width").slice(0, row.children("h1").css("width").length - 2);
                if (parseFloat(leftX) > (+widthDiv / 3 + +baseLeft))
                    alert("Lanciato")
            }
            else {
                //left
                let leftX = row.css("left").slice(0, row.css("left").length - 2);
                row.css("left", leftX - (lastSwiperPositionX - x))
                let widthDiv = row.children("h1").css("width").slice(0, row.children("h1").css("width").length - 2);
                console.log(Math.abs(parseFloat(leftX)) + " - " + (+widthDiv / 2 + +baseLeft))
                if (Math.abs(parseFloat(leftX)) > (+widthDiv / 3 + +baseLeft))
                    alert("Lanciato")
            }
        }
        else console.log("ERROR:" + target.tagName.toString());
        lastSwiperPositionX = x;
    })
})