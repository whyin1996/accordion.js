var accordion = (function (param) {
    if (typeof $ === "undefined" && typeof window.JQuery === "undefined") {
        console.error("jquery is required");
        return;
    }
    var setting = {
        container: ".k-accordion",
        button: ".k-accordion__button",
        content: ".k-accordion__content", 
    };
    setting = $.extend(true, setting, param);
    var accordions = $(setting.container);
    accordions.find(setting.button).on("click", function (element) {
        var list = $(this).parent().find(setting.content);
        if (list.is(":visible")) {
            list.hide();
        } else {
            list.show();
        }
    });
});