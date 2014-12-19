jQuery.scroller = (function(document) {
	var scroller = $({});

	var html = document.documentElement;
	var body = document.body;

	$(document).on('scroll', function(event) {
		scroller.top = body.scrollTop || html.scrollTop;
		scroller.trigger('scroll', event);
	});

	return scroller;
})(document);