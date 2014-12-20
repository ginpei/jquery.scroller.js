jQuery.scroller = (function(document) {
	var scroller = $({});

	// cache
	var html = document.documentElement;
	var body = document.body;

	/**
	 * Margin for detect the end of page.
	 * @type Number
	 */
	scroller.marginBottom = 0;

	/**
	 * Entry point.
	 */
	scroller.initialize = function() {
		// set up properties
		scroller.updateWindowInformations();

		// listen
		$(window)
			.on('scroll', function(event) {
				scroller.onscroll(event);
			})
			.on('resize', function(event) {
				scroller.updateWindowInformations(event);
			});

		// prevent re-run
		delete scroller.initialize;
	};

	/**
	 * Called when scrolled.
	 * @param {Event} event A scroll event.
	 */
	scroller.onscroll = function(event) {
		scroller.top = body.scrollTop || html.scrollTop;
		scroller.trigger('scroll', event);

		if (this.isOnBottom()) {
			scroller.trigger('scrolltoend', event);
		}
	};

	/**
	 * @return Boolean
	 */
	scroller.isOnBottom = function() {
		return (this.top + this.windowHeight + this.marginBottom >= this.pageHeight);
	};

	/**
	 * Update page height and window height.
	 */
	scroller.updateWindowInformations = function() {
		this.pageHeight = body.scrollHeight;
		this.windowHeight = html.clientHeight;
	};

	scroller.initialize();

	return scroller;
})(document);
