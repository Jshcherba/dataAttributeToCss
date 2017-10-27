$(document).ready(function() {
    $('a.plus').on('click', function () {
        var parent = $(this).parent().find('.reviews');
        var attrValue = parseInt(parent.attr("data-review"));
        if (attrValue < 100) {
            parent.attr("data-review", attrValue + 10);
        }
    });
    $('a.minus').on('click', function () {
        var parent = $(this).parent().find('.reviews');
        var attrValue = parseInt(parent.attr("data-review"));
        if (attrValue > 0) {
            parent.attr("data-review", attrValue - 10);
        }
    });
});