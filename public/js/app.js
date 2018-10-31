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
require("dotenv").config();
var keys = require(".keys.js");
// var apiKey = new whatShouldThisBe(keys.firebase);

// Initialize Firebase
var config = {
    apiKey: apiKey,
    authDomain: "logiktemp.firebaseapp.com",
    databaseURL: "https://logiktemp.firebaseio.com",
    projectId: "logiktemp",
    storageBucket: "logiktemp.appspot.com",
    messagingSenderId: "815483326465"
};
firebase.initializeApp(config);

var database = firebase.database();

var fullName = "";
var email = "";
var contactNumber = "";
var message = "";

$("#submit").on("click", function (event) {
    event.preventDefault();

    fullName = $("#contact-name").val().trim();
    email = $("#contact-email").val().trim();
    contactNumber = $("#contact-number").val().trim();
    message = $("#message-text").val().trim();

    database.ref().push({
        fullName: fullName,
        email: email,
        contactNumber: contactNumber,
        message: message,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});

database.ref().on("child_added", function (snapshot) {

    var sv = snapshot.val();


    console.log(sv.fullName);
    console.log(sv.email);
    console.log(sv.contactNumber);
    console.log(sv.message);


    $("#contact-name").clear();
    $("#contact-email").clear();
    $("#contact-number").clear();
    $("#message-text").clear();

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});