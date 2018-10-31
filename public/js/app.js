$(document).ready(() => {
    // initial logo scaling
    $("#logo").effect("scale", {
        percent: 500
    }, 4.75 * 1000, () => {
        $("#logo").fadeOut("fast", () => {
            $("#fadeInLogo").fadeIn("slow", () => {
                $(".navText").fadeIn("slow");
            });
            $("#fadeInLogo").css("display", "flex");
            randomTimeout();
        });
    }).rotate({
        duration: 6000,
        angle: 90,
        animateTo: 360
    });

    function distort(element) {
        element.addClass("distort")
        setTimeout(() => {
            element.removeClass("distort");
            if (Math.random() <= 0.5) {
                setTimeout(() => {
                    element.addClass("distort");
                    setTimeout(() => {
                        element.removeClass("distort");
                    }, 0.1 * 1000);
                }, 0.05 * 1000);
            }
        }, 0.1 * 1000);
    }

    function randomTimeout() {
        let interval = setTimeout(() => {
            distort($("#titleText"));
            clearTimeout(interval);
            randomTimeout();
        }, (Math.random() * 7 + 2) * 1000);
    }
});