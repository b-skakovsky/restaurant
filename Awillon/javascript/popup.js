function closePopup() {
  $.magnificPopup.close();
}
$(".popup").magnificPopup({
     type: 'inline',
    removalDelay: 500,
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true
});
$(".popup-baskets").magnificPopup({
     type: 'inline',
    removalDelay: 500,
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true
});
$(".popupw").magnificPopup();

$("form").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            $(".form-start").addClass("ro-re")
            $(".finish-form").addClass("visible")
            setTimeout(function() {
                th.trigger("reset");
                $(".form-start").removeClass("ro-re")
                 $(".finish-form").removeClass("visible")
                $.magnificPopup.close();
            }, 2500);
        });
        return false;
    });
