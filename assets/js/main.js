$(function () {
    "use strict";

    $(".collapsed-sidebar .sidebar")
        .on("mouseenter", function () {
            $("body").addClass("visible-sidebar");
        })
        .on("mouseleave", function () {
            $("body").removeClass("visible-sidebar");
        });
});