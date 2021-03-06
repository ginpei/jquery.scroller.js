/*! jQuery.scroller.js v0.0.0 by TAKANASHI Ginpei */
/*  https://github.com/ginpei/jquery.scroller.js  */
jQuery.scroller = (function(window, document) {
	var scroller = $({});

	// cache
	var elHtml = document.documentElement;
	var elScrollable = (navigator.userAgent.indexOf('WebKit')<0 ? elHtml : document.body);

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
		if (window.addEventListener) {
			window.addEventListener('scroll', function(event) {
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
		return (this.top + this.windowHeight + this.marginBottom >= this.pageHeight);
	};

	/**
	 * Update page height and window height.
	 */
	scroller.updateWindowInformations = function() {
		this.pageHeight = elScrollable.scrollHeight;
		this.windowHeight = elHtml.clientHeight;
	};

	scroller.initialize();

	return scroller;
})(window, document);
