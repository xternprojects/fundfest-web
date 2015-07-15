function clickEvent() {

        var currentDiv = $(this).html();
        var editDiv = $("<textarea />");
        editDiv.val(currentDiv);
        $(this).replaceWith(editDiv);
        editDiv.focus();
        editDiv.blur(exitClickEventDiv);
}
function clickEventH2() {

        var currentDiv = $(this).html();
        var editDiv = $("<textarea />");
        editDiv.val(currentDiv);
        $(this).replaceWith(editDiv);
        editDiv.focus();
        editDiv.blur(exitClickEventH2);
}

function exitClickEventDiv() {
    var html = $(this).val();
    var solidText = $("<div>");
    solidText.html(html);
    $(this).replaceWith(solidText);
    solidText.click(clickEvent);
}

function exitClickEventH2() {
    var html = $(this).val();
    var solidText = $("<h2 class='title title--full editable-h2'>");
    solidText.html(html);
    $(this).replaceWith(solidText);
    solidText.click(clickEvent);
}

$(document).ready(function() {
    $(".editable-h2").click(clickEventH2);
    $(".editable").click(clickEvent);
});