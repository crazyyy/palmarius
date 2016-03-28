var $inputCalendar=$(".input-calendar input");$inputCalendar.each(function(){var t=this,a=$(t).attr("type");""==$(t).val()&&$(t).attr("type","text"),$(t).focus(function(){$(t).attr("type",a),t.click()}),$(t).blur(function(){""==$(t).val()&&$(t).attr("type","text")})});
//# sourceMappingURL=maps/form-styling.js.map
