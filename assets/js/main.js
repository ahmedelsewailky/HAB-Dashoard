$(function () {
    "use strict";

    $(".simplebar-menu").each(function () {
        if (!this.SimpleBar) {
            new SimpleBar(this);
        }
    });

    $(".theme-toggler").on("click", function () {
        $("body").toggleClass("dark-theme");
    });

    $(".sidebar-toggler-button").on("click", function () {
        $("body").toggleClass("collapsed-sidebar");
    });
});