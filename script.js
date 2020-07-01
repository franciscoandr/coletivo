var followCursor = (
  function() {
    var s = document.getElementById('cursor');
    s.style.position = 'absolute';

    return {
      init: function() {
      document.body.appendChild(s);
    },

    run: function(e) {
      var e = e || window.event;
      s.style.left = (e.clientX - 100) + 'px';
      s.style.top = (e.clientY - 100) + 'px';
      getMouseCoords(e);
    }
  };
}());

window.onload = function() {
  followCursor.init();
  document.body.onmousemove = followCursor.run;
}
