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
    $("#myTbody").on("swipe", function () {
        alert("ye")
    })
    const tBody = document.getElementsByClassName('myMainTableNoteWrapper')[0]
    let touchstartX = 0
    let touchendX = 0

    let difference = 0;
    function handleGesture() {
        difference = touchendX > touchstartX ? touchendX - touchstartX : touchstartX - touchendX
    }
    let lastSwiperPositionX = 0;
    let actualPositionX = 0;
    tBody.addEventListener('touchstart', e => {
        lastSwiperPositionX = e.changedTouches[0].screenX
    })

    tBody.addEventListener('touchend', e => {
        lastSwiperPositionX = 0;
        handleGesture()
    })
    let first=true;
    for (let row of $(".myMainTableNoteWrapper").children("div")) {
        let apparentRow = $(row).children("div")
        let offsetDiv = row.getBoundingClientRect();
        if(first)
        {
            first = false;
            baseTop = $(row).css("height")
        }
        $(row).css({
            "width": $(row).css("width"),
            "height": $(row).css("height")
        })
        apparentRow.css({
            "position": "absolute",
            "top": (offsetDiv.top-baseTop),
            "left": offsetDiv.left,
            "width": $(row).css("width"),
            "height": $(row).css("height")
        })
    }
    tBody.addEventListener("touchmove", e => {
        let target = e.target;
        if (target.tagName.toUpperCase() != "TR" || target.tagName.toUpperCase() != "TD" || target.tagName.toUpperCase() != "H1") {
            var touch = e.touches[0] || e.changedTouches[0];
            x = touch.pageX;
            y = touch.pageY;
            let tr;
            console.log($(target).parents()[0])
            if (target.tagName.toUpperCase() == "TR")
                tr = target
            else
                tr = $(target).parents()[0]
            console.log(tr)
            let offsetDiv = tr.getBoundingClientRect();
            tr = $(tr);
            console.log(offsetDiv)
            tr.children("div").css({
                "top": offsetDiv.top,
                "left": offsetDiv.left,
                "width": tr.css("width"),
                "height": tr.css("height")
            })
            let marginSet;
            if (lastSwiperPositionX < x) {
                //swiping right
                marginSet = lastSwiperPositionX + x;/*
                tr.css("display", "block");
                tr.css("padding-right", 0);
                tr.css("padding-left", marginSet)*/
            }
            else {
                //swiping left
                marginSet = lastSwiperPositionX - x;/*
                tr.css("display", "block");
                tr.css("padding-left", 0);
                tr.css("padding-right", marginSet)*/
            }
        }
        else console.log(target.tagName.toString());
        lastSwiperPositionX = x;
    })
})