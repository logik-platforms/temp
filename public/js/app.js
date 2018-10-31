$(document).ready(() => {
    // initial logo scaling
    $("#logo").effect("scale", {
        percent: 500
    }, 5 * 1000, () => {
        $("#logo").fadeOut("fast", () => {
            let angle = 0;
            $("#fadeInLogo").fadeIn("fast");
            $("#fadeInLogo").css("display", "flex");
            setInterval(() => {
                angle += 1;
                $("#inlineLogo").rotate(angle);
            }, 50);
            randomTimeout();
        });
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