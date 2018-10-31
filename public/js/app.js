$(document).ready(() => {
    $("#logo").effect("scale", {
        percent: 500
    }, 5 * 1000, () => {
        console.log("Complete animation");
    })
});