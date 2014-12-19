jQuery.scroller = (function(document) {
	var scroller = $({});

	var html = document.documentElement;
	var body = document.body;

	scroller.onscroll = function(event) {
		scroller.top = body.scrollTop || html.scrollTop;
		scroller.trigger('scroll', event);

		if (this.isOnBottom()) {
			scroller.trigger('scrolltoend', event);
		}
	};

	scroller.isOnBottom = function() {
		return (this.top + this.windowHeight >= this.pageHeight);
	};

	scroller.updateWindowInformations = function(event) {
		this.pageHeight = body.scrollHeight;
		this.windowHeight = html.clientHeight;
	};

	$(document).on('scroll', function(event) {
		scroller.onscroll(event);
	});
	$(window).on('resize', function(event) {
		scroller.updateWindowInformations(event);
	});

	// initialize
	scroller.updateWindowInformations();

	return scroller;
})(document);
