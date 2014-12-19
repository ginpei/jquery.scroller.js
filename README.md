# About jQuery.scroller.js

The unique ovserver for scroll event.

## Demo

Here:

* http://ginpei.github.io/jquery.scroller.js/sample/show-scroll-top.html

## Example

via Demo.

```js
// udpate scrollTop value
$.scroller.on('scroll', function(event) {
    $top.text($.scroller.top);
});

// Show message when scrolled to end of the page
$.scroller.on('scrolltoend', function(event) {
    $onScrollToEnd
        .stop()
        .css({ opacity:1 })
        .fadeTo(1000, 0);
});
```

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

