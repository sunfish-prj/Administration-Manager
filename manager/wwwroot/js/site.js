// Write your Javascript code.
$(document).ready(function () {
    animations();
    graphInitialization();

    $('.addNew').on('click', function () {
        $.get('/ServiceLevelAgreementPolicies/AddMetric').done(function (html) {
            $('#metrics').append(html);
        });
    });
});

function createVM() {
    var createPosition = function () {
        return {
            Name: ko.observable()
        };
    };

    var addPosition = function () {
        params.push(createPosition());
    };

    var name = ko.observable();
    var params = ko.observableArray([createPosition()]);

    return {
        name: name,
        params: params,
        addPosition: addPosition
    };
}

function graphInitialization() {
    // Morris.js Charts sample data for SB Admin template

    // Donut Chart
}

function animations() {
    var sidebarWidth;
    var bodyPaddingLeft;
    $(".hamburger").on("click", function () {
        if (!$(this).hasClass("open")) {
            $(".open").parent("li").animate({
                marginRight: "-10px"
            }, 500);

            $("#wrapper").animate({
                paddingLeft: bodyPaddingLeft
            }, 500);
        }
        else {
            bodyPaddingLeft = $("#wrapper").css("padding-left");

            $(this).parent("li").animate({
                marginRight: "-5px"
            }, 500);

            $("#wrapper").animate({
                paddingLeft: "60px"
            }, 500);
        }
        $(this).toggleClass("open");

        $(".icon").toggleClass("iconEnlarge");

        if (!$(".icon").hasClass("iconEnlarge")) {
            $(".icon").animate({
                marginRight: "-=20px",
                marginLeft: "-=5px"
            }, 500);
            $(".logOut").show(400);
            $("ul.side-nav").animate({
                width: sidebarWidth
            }, 500);
        }
        else {
            sidebarWidth = $(".side-nav").width();
            $(".iconEnlarge").animate({
                marginRight: "20px",
                marginLeft: "5px"
            }, 500);
            $(".logOut").hide(200);
            $("ul.side-nav").animate({
                width: "58px"
            }, 500);
        }
    });

    $("ul.side-nav, ul.logOff").mouseenter(function () {
        if (!$(this).find(".hamburger:hover").length > 0) {
            if (!$(".hamburger").hasClass("open")) {
                $("ul.side-nav").animate({
                    width: sidebarWidth
                }, 500);
                $(".logOut").show(400);
            }
        }
    });
    $("ul.side-nav, ul.logOff").mouseleave(function () {
        if (!$(".hamburger").hasClass("open")) {
            $("ul.side-nav").animate({
                width: "58px"
            }, 500);
            $(".logOut").hide(200);
        }
    });
}