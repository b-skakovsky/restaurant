jQuery('.tabs').each(function(){
    var $active, $content, $links = jQuery(this).find('a');
    $active = jQuery($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('active');
    $content = $($active[0].hash);
    $links.not($active).each(function () {
        jQuery(this.hash).hide();
    });
    jQuery(this).on('click', 'a', function(e){
        $active.removeClass('active');
        $content.hide();
        $active = jQuery(this);
        $content = jQuery(this.hash);
        $active.addClass('active');
        $content.show();
        e.preventDefault();
    });
});