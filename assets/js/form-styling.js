var $inputCalendar = $('.input-calendar input');

$inputCalendar.each(function() {
  var el = this, type = $(el).attr('type');
  if ($(el).val() == '') $(el).attr('type', 'text');
  $(el).focus(function() {
    $(el).attr('type', type);
    el.click();
  });
  $(el).blur(function() {
    if ($(el).val() == '') $(el).attr('type', 'text');
  });
});
