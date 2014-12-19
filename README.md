# About jQuery.scroller.js

The unique ovserver for scroll event.

# Referencese

## jQuery.scroller.on(type, listener, [context])

Add event listener. jQuery's API.

## jQuery.scroller.off([type [, listener [, context]]])

Remove listener(s). jQuery's API.

## jQuery.scroller.top

scrollTop.

* type … Number

Update when scrolled.

## jQuery.scroller.marginBottom

Margin for detect the end of page. Default is `0`.

* type … Number

For example: When the page's height is 1000 px and the window height is 100 px, to scroll 900 px fires `scrolltoend` event. In this case, you can use `jQuery.scroller.marginbottom = 100` to fire that event when scrolled to 800px.

## Events

* `"scroll"`
* `"scrolltoend"` (means: scroll-to-end)

