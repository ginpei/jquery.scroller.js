jQuery.scroller = (function(document) {
	var scroller = $({});

	// cache
	var elHtml = document.documentElement;
	var elBody = document.body;
	var elScrollable = (navigator.userAgent.indexOf('WebKit')<0 ? elHtml : elBody);

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
		if (document.addEventListener) {
			document.addEventListener('scroll', function(event) {
				scroller.onscroll(event);
			});
			window.addEventListener('resize', function(event) {
				scroller.updateWindowInformations(event);
			});
		}
		else {
			$(window)
				.on('scroll', function(event) {
					scroller.onscroll(event);
				})
				.on('resize', function(event) {
					scroller.updateWindowInformations(event);
				});
		}

		// prevent re-run
		delete scroller.initialize;
	};

	/**
	 * Called when scrolled.
	 * @param {Event} event A scroll event.
	 */
	scroller.onscroll = function(event) {
		scroller.top = elScrollable.scrollTop;
		scroller.trigger('scroll', event);

		if (this.isOnBottom()) {
			scroller.trigger('scrolltoend', event);
		}
	};

	/**
	 * @return Boolean
	 */
	scroller.isOnBottom = function() {
		return (this.top + this.windowHeight + this.marginBottom >= this.height);
	};

	/**
	 * Update page height and window height.
	 */
	scroller.updateWindowInformations = function() {
		this.height = elBody.scrollHeight;
		this.windowHeight = elHtml.clientHeight;
	};

	scroller.initialize();

	return scroller;
})(document);
