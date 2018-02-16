function startScrollHandler () {
  // Beginning color
  var TOP_COLOR = '#fff';
  var ITEMS = [
    {selector: '#a', color: '#9edbe8'},
    {selector: '#b', color: '#ffd8ca'},
    {selector: '#c', color: '#e5d8fa'},
    {selector: '#next', color: '#fff'},
    {selector: '#demo', color: '#FFF'}, // strictly speaking not needed
  ];
  var colors = getColors(TOP_COLOR, ITEMS);

  // How far up the page should an element be before bg changes color?
  var SCROLL_OFFSET = window.innerHeight * .5;
  // Elements which BACKGROUND should change color as user scrolls
  var BACKGROUND_ELEMENTS = ['body'];
  // Elements which FILL should change color as user scrolls
  var FILL_ELEMENTS = ['.wave g'];

  window.addEventListener('scroll', throttle(onScroll, 250));

  function onScroll (e) {
    var currentPosition = document.body.scrollTop;
    var currentColor = getCurrentColor(currentPosition, colors);
    $(BACKGROUND_ELEMENTS.join('')).css('background-color', currentColor);
    $(FILL_ELEMENTS.join(',')).each(function () {
      this.setAttribute('fill', currentColor);
    });
  }

  /**
   * helpers
   */
  function throttle (func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : new Date();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = new Date();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  }

  /**
   * Map colors to the position of the elements
   */
  function getColors (topColor, items) {
    var top = [{position: 0, color: topColor}];
    return top.concat(items.map(function (item) {
      var el = $(item.selector)[0];
      var elPosition = el.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      return {position: elPosition, color: item.color, el: el};
    }));
  }

  /**
   * Gets the current bg color depending on scroll position
   */
  function getCurrentColor (currentPosition, colors) {
    var i = 1, len = colors.length;
    for (; i < len; i++)
      if (currentPosition + SCROLL_OFFSET < colors[i].position) return colors[i-1].color;
    return colors[0].color; // fallback
  }
}

setTimeout(startScrollHandler, 500); // We let images finish loading
