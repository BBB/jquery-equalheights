/*
 * jQuery EqualHeights Plugin
 * version: 0.1
 * URL: http://github.com/BBB/jquery-equalheights
 * Description: Will add the height of the tallest child to all children.
 * Requires: 1.3.2+ (Not tested on anything lower, but it'll probably work).
 * Author: Oliver Relph
 * Copyright: Copyright 2010 Oliver Relph
 */

(function($) {
	$.fn.equalheights = function(children) {
		
		return this.each(function() {

			var $this = $(this);
			var $children = $(children, $this);
			
		  	var highest = 0;
			$children.each(function(){
				highest = Math.max($(this).height(), highest);
			}).height(highest);

		});
	};
})(jQuery);
